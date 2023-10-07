import React from "react";
import Charthead from "../Charthead/page";
import LineChart from "../linechart/page";
function Line() {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 shadow-md  bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Charthead category="" title="Live visitors" />
        <div className="flex   flex-col md:flex-row">
          <LineChart />
        </div>
      </div>
    </>
  );
}

export default Line;
