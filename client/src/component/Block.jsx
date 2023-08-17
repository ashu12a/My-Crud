import React, { useState, useEffect } from "react";
import Navbar from "./Header/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DeleteContent } from "../service/api";

import loadgif from "./img/load.gif";

export default function Block() {
  const param = useParams();
  const navigate = useNavigate();
  const id = param.id;
  const [isLoading, setIsLoading] = useState(true);


  const [Data, setData] = useState([]);

  const deletecontent = async(val)=>{
    if (window.confirm("Are You Sure ?") === true) {
      await DeleteContent(val);
      navigate('/');
   
    }
  }
  

  const fetchData = () => {
    fetch(`https://codeapi.ashutosh-sharma.com/content/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <section className="lg:mx-10 mt-10 mx-0 md:mt-10 sm:mt-10">
        <div>
          <div className="bg-red-800 text-white">
            <p className="text-right mr-5">
              <Link to={`/update/${Data._id}`} className="mx-2">Edit</Link>{" "}
              <Link className="mx-2" onClick={()=>{deletecontent(Data._id)}}>Delete</Link>
            </p>
          </div>
          {isLoading ? (<><div className=""><img src={loadgif} alt="Loading..." className="w-28 m-auto" /></div></>):(<div className="shadow-xl p-5 ">
            <h1 className="text-2xl -mt-2 mb-2">{Data.title}</h1>

            <SyntaxHighlighter
              language={Data.lang}
              style={dark}
              className="text-sm"
            >
              {Data.content}
            </SyntaxHighlighter>
          </div>)}
          
        </div>
      </section>
    </>
  );
}
