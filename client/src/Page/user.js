import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../Components/Table';

export default function User() {
  return (
      <div className='container text-start p-5'>
          <button className='btn btn-dark mb-5'>
            <Link to="/adduser" className="text-decoration-none" style={{color: "white"}}>Add User</Link>
          </button>
          <Table />
      </div>
  )
}
