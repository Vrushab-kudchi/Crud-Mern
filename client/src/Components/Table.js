import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://185.210.144.13:3001/user')
      .then(response => {
        setData(response.data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://185.210.144.13:3001/delete/${id}`)
      .then(response => {
        console.log('User deleted:', response.data);
        toast.success("User Deleted");
        setData(prevData => prevData.filter(item => item._id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="table-responsive"> {/* Added class for responsiveness */}
      <ToastContainer />
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Phone No</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row"></th>
              <td>{item.name}</td>
              <td>{item.phone_no}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>
                <Link to={`/edit/${item._id}`} className='btn btn-primary mr-2'>Edit</Link>
                <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
