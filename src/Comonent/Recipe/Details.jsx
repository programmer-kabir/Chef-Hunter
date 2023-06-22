import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { HiBookmark } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const [active , setActive] = useState(false)
  const { id } = useParams();
  // console.log(id);
  const recipes = useLoaderData();
  
  const {
    chef_name,
    chef_picture,
    country,
    likes,
    year_experience,
    famous,
    description,
    recipe
  } = recipes;
  console.log(likes);
  const handleBookMark =()=>{
    toast('yah bookmark dadd')
    setActive(true)
  }
  return (
    <div>
        <ToastContainer position="top-center" autoClose={6000}/>
        <div className="card px-5 md:w-1/2 bg-base-100 shadow-xl container mx-auto mt-16 border">
          {
            active ? <div className="hidden"></div> :<div className="card-actions justify-end -ml-5 p-2 font-semibold text-xl">
            <HiBookmark onClick={handleBookMark} >  </HiBookmark>
          </div>
          
          }
      {/* <div className="card-actions justify-end -ml-5 p-2 font-semibold text-xl">
        <HiBookmark onClick={handleBookMark} >  </HiBookmark>
      </div> */}
      <hr className="mb-5 mt-2" />
      <figure>
        <img src={chef_picture} alt="Shoes" className="w-full rounded-t-lg" />
      </figure>

      <div className="grid grid-cols-3 gap-4 mt-8 px-2">
        <img className="rounded shadow-xl" src={recipe[0]} alt="" />
        <img className="rounded shadow-xl" src={recipe[1]} alt="" />
        <img className="rounded shadow-xl" src={recipe[2]} alt="" />
        
    </div>

      <div className="card-body">
        <h2 className="card-title">Name: {chef_name}</h2>
        <h2 className="card-title">Country: {country}</h2>
        <h2 className="card-title">Year of experience: {year_experience}</h2>
        <p>{description}</p>
      </div>

    

      <div className="card-actions  py-3 px-5 -ml-5 font-semibold text-xl">
        <Link to='/'> <button className="btn btn-primary">Back</button></Link>
      </div>
    </div>

    </div>
  );
};

export default Details;
