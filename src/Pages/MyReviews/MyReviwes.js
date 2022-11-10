import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import ReviewCard from "./ReviewStore/ReviewCard/ReviewCard";

const MyReviwes = () => {
  const reviews = useLoaderData();
  const { user } = useAuth();
  const myReviews = reviews?.filter((x) => x.userImage === user?.photoURL);
  const { _id } = myReviews;
  console.log(myReviews);
  return (
    <div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[80%] mx-auto my-20">
        {myReviews.map((r) => (
          <ReviewCard r={r} key={_id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviwes;
