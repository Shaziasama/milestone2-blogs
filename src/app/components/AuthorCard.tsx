import React from "react";

const AuthorCard = () => {
  return (
    <div className="bg-white shadow-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-900"
          src="../images/picture2.jpg"
          alt="Author Image"
        />
        <div>
          <h3 className="text-xl font-bold">SHAZIA SAMMA</h3>
          <p className="text-slate-500">Web Developer</p>
        </div>
      </div>
    <div className="mt-4 flex space-x-3">
        <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-900 transition duration-300">LinkedIn</a>
        <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-900 transition duration-300">Github</a>

    </div>
    </div>
  );
};

export default AuthorCard;
