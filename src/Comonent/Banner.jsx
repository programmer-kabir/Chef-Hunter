import React from 'react';
import image from '../assets/New folder/image-1.jpg'
const Banner = () => {
    return (
        <div >
      <div className="hidden md:block w-full rounded">
        <img src={image} className="w-full" style={{ height: "450px" }} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="lg:ml-10 -mt-9">
            <h2 className="text-5xl mb-5  text-white  font-bold">
              Welcome to our <br /> Recipe
            </h2>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
      {/* <ZoomCard></ZoomCard> */}
    </div>
    );
};

export default Banner;