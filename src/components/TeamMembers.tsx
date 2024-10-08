import React from "react";
import { contributingMembers, coreMembers } from "../../constant/teamMembers";

const TeamMembers = () => {
  return (
    <div>
      <div className="mt-28">
        <h1 className="font-semibold text-3xl text-center sm:text-5xl">
          OUR TEAM
        </h1>
      </div>

      <div className="">
        <h2 className="mx-2 sm:mx-10 text-2xl sm:text-4xl">Core Members</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          {coreMembers.map(({ detail, img, name, profession }) => (
            <div
              className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-visible relative mt-16 border border-1 border-black hover:scale-105 transition-all"
              key={name}
            >
              <div className="absolute inset-x-0 top-[-48px] flex justify-center">
                <img
                  className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                  src={img}
                  alt="Profile"
                />
              </div>
              <div className="pt-16 pb-6 px-6">
                <p className="text-gray-700 mb-4">{detail}</p>
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                <p className="text-gray-600">{profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mx-2 sm:mx-10 text-2xl sm:text-4xl">
          Contributing Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          {contributingMembers.map(({ detail, img, name, profession }) => (
            <div
              className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-visible relative mt-16 border border-1 border-black hover:scale-105 transition-all"
              key={name}
            >
              <div className="absolute inset-x-0 top-[-48px] flex justify-center">
                <img
                  className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                  src={img}
                  alt="Profile"
                />
              </div>
              <div className="pt-16 pb-6 px-6">
                <p className="text-gray-700 mb-4 text-center">{detail}</p>
                <h3 className="text-lg font-bold text-gray-900 mt-36">
                  {name}
                </h3>
                <p className="text-gray-600">{profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
