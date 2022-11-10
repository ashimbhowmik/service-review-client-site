import React, { useContext, useEffect, useState } from "react";
import FilterReview from "../FilterReview/FilterReview";

const ReviewStore = ({ _id }) => {
  const [reviews, setReviews] = useState();
  const [deleteData, setDeleteData] = useState([]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure delete your review");
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
        })
        .finally(window.location.reload());
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const serviceReviews = reviews?.filter((x) => x.service === _id);
  console.log(serviceReviews);

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto">
        {serviceReviews?.map((s) => (
          <FilterReview
            key={s._id}
            s={s}
            handleDelete={handleDelete}
          ></FilterReview>
        ))}
      </div>
    </div>
  );
};

export default ReviewStore;
