import React, { useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'; // Import useParams from 'react-router-dom' library

export default function EditForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone_no: '',
    email: '',
    city: ''
  });

  const { id } = useParams(); // Get the id parameter from the URL

  function handleChange(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }

  function submitUser() {
    const { name, phone_no, email, city } = formData;
    if (!name || !phone_no || !email || !city) {
      toast.error('Fill all fields');
    } else {
      axios
        .patch(`http://localhost:3001/update/${id}`, formData)
        .then(function (response) {
          toast.success('User updated successfully');
          setTimeout(() => {
            window.location.href = '/user';
          }, 3000);
        })
        .catch(function (error) {
          if (error.response && error.response.data && error.response.data.error) {
            toast.error(error.response.data.error);
          } else {
            toast.error('An error occurred');
          }
        });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className='container p-5'>
        <h1>Edit User</h1>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control' id='name' onChange={handleChange} value={formData.name} />
          </div>
          <div className='form-group'>
            <label htmlFor='phone_no'>Phone Number</label>
            <input
              type='text'
              className='form-control'
              id='phone_no'
              onChange={handleChange}
              value={formData.phone_no}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' id='email' onChange={handleChange} value={formData.email} />
          </div>
          <div className='form-group'>
            <label htmlFor='city'>City</label>
            <input type='text' className='form-control' id='city' onChange={handleChange} value={formData.city} />
          </div>
          <button type='button' className='btn btn-primary' onClick={submitUser}>
            Update User
          </button>
        </form>
      </div>
    </>
  );
}
