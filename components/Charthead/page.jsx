import React from "react";

const Charthead = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-2xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Charthead;
