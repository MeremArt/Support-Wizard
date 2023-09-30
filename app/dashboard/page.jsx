import React from "react";
import { DashboardLayout } from "@/components/Layout";
import LineChart from "@/components/linecharts/page";
import Line from "@/components/line/page";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineFolderView } from "react-icons/ai";
const dashboard = ({ children }) => {
  return (
    <>
      <DashboardLayout>
        {/* <div className="text-xl text-black">Welcome to the dashboard</div> */}
        {/* <LineChart /> */}
        <Line />
        <section className="flex container flex-col md:flex-row">
          <div className=" m-4 md:m-10 mt-24 w-1/2 h-44 shadow-md  bg-white dark:bg-secondary-dark-bg rounded-3xl ">
            <div className="flex  items-center p-4">
              <AiOutlineFolderView size={30} color="#8A88FB" />
              <h2 className=" ml-2 text-center ">Page views</h2>
            </div>
            <div>
              <p style={{ color: "#848484" }} className="m-4 text-sm">
                Today
              </p>
            </div>
            <div>
              <h2 className="m-4 text-black text-2xl text-bold">0</h2>
            </div>
          </div>
          <div className=" m-4 md:m-10 mt-24 w-1/2 h-44 shadow-md  bg-white dark:bg-secondary-dark-bg rounded-3xl ">
            <div className="flex  items-center p-4">
              <BsFillPeopleFill size={30} color="#8A88FB" />
              <h2 className=" ml-2 text-center ">Visitors</h2>
            </div>
            <div>
              <p style={{ color: "#848484" }} className="m-4 text-sm">
                Today
              </p>
            </div>
            <div>
              <h2 className="m-4 text-black text-2xl text-bold">0</h2>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};

export default dashboard;
