import React from "react";
import img2 from "../assets/New folder/5.jpg";
import img3 from "../assets/New folder/6.jpg";
import img4 from "../assets/New folder/7.jpg";
import img1 from "../assets/New folder/8.jpg";

const ZoomCard = () => {
  return (
    <div className="w-2/3 mx-auto mt-52 md:mt-16 ">
      <h3 className="text-3xl text-center mb-2 font-bold">Recipe </h3>
      <p className="text-lg py-5 mb-5">cookbook, collection of recipes, instructions, and information about the preparation and serving of foods. At its best, a cookbook is also a chronicle and treasury of the fine art of cooking, an art whose masterpieces—created only to be consumed—would otherwise be lost.</p>
      <div className="text-center border-2 w-full md:flex">
        <div className=" overflow-hidden md:w-1/2 p-2">
          <img
            className="hover:scale-125 transition-all duration-500 cursor-pointer w-full"
            src={img1}
            alt=""
          />
        </div>
        <div className=" md:w-1/2 p-2 py-5 my-auto text-justify">
          <h3 className="text-3xl text-center">Jollof Rice</h3>
          <span className="text-lg text-gray-700">
            {" "}
            Also known as benachin, jollof rice is a rice dish popular among
            West African countries. This rice dish is notable for its vibrant
            red color, possibly due to the use of seasonings, chili peppers,
            tomatoes, and curry powder.
          </span>
        </div>
      </div>


      <div className="text-center border-2 w-full md:flex">
        <div className=" overflow-hidden md:w-1/2 p-2">
          <img
            className="hover:scale-125 transition-all duration-500 cursor-pointer w-full"
            src={img2}
            alt=""
          />
        </div>
        <div className=" md:w-1/2 p-2 py-5 my-auto text-justify">
          <h3 className="text-3xl text-center">Bison burger</h3>
          <span className="text-lg text-gray-700">
            {" "}
            In a large bowl, combine bison, Worcestershire sauce, shallot,
            garlic, salt, pepper, coriander, and ground mustard. Form into 8
            patties that are slightly larger than your hamburger buns. Let sit
            at room temp for 30 minutes.
          </span>
        </div>
      </div>

      <div className="text-center border-2  md:flex">
        <div className="h-min overflow-hidden md:w-1/2 p-2">
          <img
            className="hover:scale-125 transition-all duration-500 cursor-pointer w-full"
            src={img3}
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-2 py-5 my-auto text-justify">
          <h3 className="text-3xl text-center">Bacon Cheeseburger</h3>
          <span className="text-lg text-gray-700">
            {" "}
            Bacon is added to this American classNameic for a smoky, cheesy burger.
            Available at Bud Pavilion, Handmade Burgers, Leadfoots Race Bar &
            Grill, Major Goolsbys Heartland, and Tavern at the Park.
          </span>
        </div>
      </div>

      <div className="text-center border-2 md:flex">
        <div className="h-min overflow-hidden md:w-1/2 p-2">
          <img
            className="hover:scale-125 transition-all duration-500 cursor-pointer w-full"
            src={img4}
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-2 py-5 my-auto text-justify">
          <h3 className="text-3xl text-center">GARLIC SWORDFISH</h3>
          <span className="text-lg text-gray-700">
          Its citrus season in Sicily and our Sicilian Sea Salt with Organic Lemon is a great finish to any dish. One of our favorites is this simple and delicious swordfish steak recipe.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ZoomCard;
