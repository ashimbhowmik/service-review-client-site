import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useDocumentTitle from "../../useDocumentTitle";
import useAuth from "../Hooks/useAuth";
import ReviewCard from "./ReviewStore/ReviewCard/ReviewCard";

const MyReviwes = () => {
  const [deleteData, setDeleteData] = useState([]);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = deleteData.filter((odr) => odr._id !== id);
            setDeleteData(remaining);
          }
        });
    }
  };
  const reviews = useLoaderData();
  const { user } = useAuth();
  const myReviews = reviews?.filter((x) => x.userImage === user?.photoURL);
  const { _id } = myReviews;
  // console.log(myReviews);
  useDocumentTitle("My Reviews");
  return (
    <div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[80%] mx-auto my-20">
        {myReviews.map((r) => (
          <ReviewCard r={r} key={_id} handleDelete={handleDelete}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviwes;
