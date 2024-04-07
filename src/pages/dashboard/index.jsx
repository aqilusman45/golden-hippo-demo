import ChartSection from "@/components/ChartSection";
import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import SideBar from "@/components/SideBar";
import React from "react";

const Dashboard =()=>{
    return <div className="">
      <Header/> 
      <SideBar/>
      <ProjectGrid/>
      <ChartSection/>
    </div>
}
export default Dashboard;