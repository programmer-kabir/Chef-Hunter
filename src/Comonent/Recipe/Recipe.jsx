import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
import Spinner from "../../Spinner/Spinner";

const Recipe = () => {
  const navigation = useNavigation()
  // console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <Spinner></Spinner>
  }
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-16 mb-3">Famous Chef </h2>
    <div className="container mx-auto grid items-center justify-center md:grid-cols-3 ">
      {data.map((singleData) => (
          <SingleRecipe
          singleData={singleData}
          key={singleData.id}
          ></SingleRecipe>
          ))}
    </div>
    </div>
  );
};

export default Recipe;
