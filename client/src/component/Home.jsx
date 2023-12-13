import React, { useState, useEffect } from "react";
import Navbar from "./Header/Navbar";
import { Link } from "react-router-dom";
import loadgif from "./img/load.gif";

export default function Home() {
  const [Data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [visible ,setVisible] = useState(25);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    fetch(`https://codeapi.ashutosh-sharma.com/content/all`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setContent(data);
      }).finally(()=>{
        setIsLoading(false);
      })
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  // ----------Handle Search ----------------

  const Filter = (event)=>{
    setContent(Data.filter(f => f.title.toLowerCase().includes(event.target.value)))
  }

  const loadmore = ()=>{
    setVisible(visible+25);
  }

  return (
    <section className="mb-10">
      <Navbar />
      <div className=" my-5 w-100 text-center">
        <input
          type="search"
          onChange={Filter}
          className="border-2 w-1/2 border-grey-500 focus:outline-none py-1 rounded px-5"
          placeholder="Search"
        />
      </div>
      {isLoading ? ( <div className=""><img src={loadgif} alt="Loading..." className="w-28 m-auto" /></div>) : (<>
      <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 mx-5">
        {content.length > 0 &&
          content.slice(0,visible).map((records) => (
            <Link
              to={`/block/${records._id}`}
              key={records._id}
              className="bg-box px-5 py-5 text-white text-lg rounded m-1"
              style={{ backgroundColor: '#9B1C1C' }}
            >
              {records.title}
            </Link>
          ))}
      </div><br/>
      {(content.length > 25 && content.length>visible)?(<div className="text-center">
        <button className="text-center px-5 py-1 bg_nav text-white rounded m-auto" onClick={loadmore}>Load More</button>
      </div>):''}</>)}

    </section>
  );
}
