import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  return (
    <div>
      <section>
        <div className="bg-blue-600">
          <div className="container flex flex-col items-center px-4 py-10 pb-24 mx-auto text-center lg:pb-56 md:pt-16 md:pb-36 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <Link to="/services">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded border-gray-300 hover:bg-gray-100 text-gray-50 hover:text-black"
                >
                  Services
                </button>
              </Link>
              <label
                htmlFor="my-drawer"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-300 hover:bg-gray-100 text-gray-50 hover:text-black drawer-button"
              >
                Open
              </label>
            </div>
          </div>
        </div>
        <div className="w-[1050px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500">
          <Banner></Banner>
        </div>
      </section>
      <Features></Features>
    </div>
  );
};

export default Home;
