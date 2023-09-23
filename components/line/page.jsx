import React from "react";
import Charthead from "../Charthead/page";
import LineChart from "../linechart/page";
function Line() {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        {/* <Charthead category="chart" title="live visitors" /> */}
        <div className="flex flex-col md:flex-row">
          <LineChart />
        </div>
      </div>
    </>
  );
}

export default Line;
