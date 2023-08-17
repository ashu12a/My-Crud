import React from 'react';
import "./login.css"
import { useNavigate } from 'react-router-dom';

export default function Login() {
 const navigate = useNavigate();

  const login = (e)=>{
    const val = e.target.value;
    if(val === "7505"){
      localStorage.setItem('asuhas23sdga','true');
      navigate('/');
    }else{
      
    }
  }

  return (
    <section style={{backgroundImage:"URL('https://source.unsplash.com/random')"}} className='h-screen pt-40'>
      <div
        className="max-w-lg m-auto bg-green-600 px-8  rounded text-white pt-10 py-20"
      >
        {" "}
        
          <h1 className="text-3xl text-center fotn-bold mb-5">Login</h1>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Your PIN
            </label>
            <input
              type="number"
              id="pin"
              onChange={login}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

      </div>
    </section>
  );
}
