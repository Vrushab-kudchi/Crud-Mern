import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Userform() {
  const [formData, setFormData] = useState({
    name: '',
    phone_no: '',
    email: '',
    city: ''
  });

  function handlechange(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }

function submituser() {
  axios
    .post('http://185.210.144.13:3001/register', formData)
    .then(function (response) {
      toast.success('User created successfully');
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

  return (
    <>
      <ToastContainer />
    <div className='container p-5'>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          onChange={handlechange}
          value={formData.name}
          id='name'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='phone no' className='form-label'>
          Phone No
        </label>
        <input
          type='text'
          className='form-control'
          onChange={handlechange}
          value={formData.phone_no}
          id='phone_no'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          onChange={handlechange}
          value={formData.email}
          placeholder='name@example.com'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='city' className='form-label'>
          City
        </label>
        <input
          type='text'
          className='form-control'
          onChange={handlechange}
          value={formData.city}
          id='city'
        />
      </div>
      <button className='btn btn-primary' onClick={submituser}>
        Add User
      </button>
      </div>
      </>
  );
}
