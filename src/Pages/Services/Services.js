import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCart from "./ServicesCart/ServicesCart";

const Services = () => {
  const allServices = useLoaderData();
  return (
    <div className="w-[85%] mx-auto py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <ServicesCart key={service._id} service={service}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
