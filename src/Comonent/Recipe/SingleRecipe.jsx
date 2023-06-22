import React from "react";
import Recipe from "./Recipe";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const SingleRecipe = ({ singleData }) => {
  // const recipe = useLoaderData()
  // console.log(data);
  // console.log(singleData);
  const {id, chef_name, chef_picture, country, likes, year_experience, famous, recipe } =
    singleData;
    // const handleViewDetails =id =>{
    //   // console.log(id);
    // }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <LazyLoad height={256} width={384} threshold={0.95} effect={blur}>
      <figure>
        <img src={chef_picture} className="w-96 h-64" alt="recipe" />
      </figure>
      </LazyLoad>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <h5 className="text-base font-semibold -mt-2">
          {year_experience} year of experience
        </h5>
        <h5 className="text-base font-semibold -mt-2">
          Country name: {country}
        </h5>
        <h3 className="text-base font-semibold -mt-2">
          Number of recipe: {recipe.length}
        </h3>
        <div className="card-actions flex  justify-between items-center">
          <div className="items-center gap-2 flex font-semibold text-lg">
            <AiFillLike className=""></AiFillLike>
            <button className="">{likes}</button>
          </div>
          <Link to={`/recipe/${id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default SingleRecipe;

