import React, {useState, useEffect} from "react";
import Navbar from "./Header/Navbar";
import {updateContent} from "../service/api";

import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import Reload from "./img/LaodingGif.gif";

export default function Update() {
    const navigate = useNavigate();

    const param = useParams();
    const id = param.id;
    
  const formik = useFormik({
    initialValues: {
      title: "",
      lang: "",
      content:"",
    },
   
    onSubmit: async (values) => { 
      loading();
      const msg = await updateContent(values,id);
      alert(msg.msg);
      // sessionStorage.setItem("msg", msg.msg);
      navigate("/");
    },
  });

  const fetchData = () => {
    fetch(`https://codeapi.ashutosh-sharma.com/content/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        formik.setValues(data);
      });
  };
  useEffect(() => {
    fetchData();
  },[]);

  const [load, setLoad] = useState('false');
  const loading = () => {
    setLoad('true');
  };
  return (
    <>
      <Navbar />
      <section className="m-10">
        <div>
          <div className="bg-box my-2 rounded text-white">
            <h1 className="text-center text-2xl font-extrabold">Update Data</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
               {formik.touched.title && formik.errors.title ? (
                <div className="text-red-600">{formik.errors.title}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                htmlFor="lang"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Language
              </label>
              <select
                type="text"
                id="lang"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lang}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="javascript">Javascript</option>
                <option value="jsx">JSX</option>
                <option value="php">PHP</option>
                <option value="plaintext">text</option>
                <option value="python">Python</option>
                <option value="htmlbars">Html</option>
                <option value="css">CSS</option>
                <option value="sql">SQL</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Content
              </label>
              <textarea
                id="content"
                rows="8"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
                className=" border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 "
                required
              ></textarea>
            </div>
            <div className="text-right">
              {(load === 'true')?( <p className="text-white bg-blue-700 cursor-pointer rounded-lg ml-auto   px-7 " style={{"maxWidth":"100px"}}>
                <img src={Reload} width="35px" alt="loading"></img>
              </p>):(<button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>)}
              
             
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
