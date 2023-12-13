import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
    <nav className="bg_nav flex">
        <div>
          <Link to='/'>
          <h2 className="text-white text-4xl font-extrabold ml-5">ASHU</h2></Link>
        </div>
        <div className="ml-auto mt-2 text-right">
          <Link
            to="/new"
            className="text-white tex-2xl bg-green-600 px-5 py-2 mr-10 rounded"
          >
            Add New
          </Link>
        </div>
      </nav>
    
   </>
  )
}
