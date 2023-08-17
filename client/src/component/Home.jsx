import React, { useState, useEffect } from "react";
import Navbar from "./Header/Navbar";
import { Link } from "react-router-dom";
import loadgif from "./img/load.gif";

export default function Home() {
  const [Data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [visible ,setVisible] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch(`https://codeapi.ashutosh-sharma.com/content/all`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setContent(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // ----------Handle Search ----------------

  const Filter = (event)=>{
    setContent(Data.filter(f => f.title.toLowerCase().includes(event.target.value)))
  }

  const loadmore = ()=>{
    setVisible(visible+15);
  }
  return (
    <section>
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-10">
        {content.length > 0 &&
          content.slice(0,visible).map((records) => (
            <Link
              to={`/block/${records._id}`}
              key={records._id}
              className="bg-box px-5 py-5 text-white text-lg rounded m-1"
            >
              {records.title}
            </Link>
          ))}
      </div>
      {(content.length > 15 && content.length>visible)?(<div className="text-center">
        <button className="text-center px-5 py-1 bg_nav text-white rounded m-auto" onClick={loadmore}>Load More</button>
      </div>):''}</>)}

    </section>
  );
}
