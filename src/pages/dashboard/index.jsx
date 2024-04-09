import ChartSection from "@/components/ChartSection";
import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import SideBar from "@/components/SideBar";
import React, { useState } from "react";

const Dashboard =()=>{

  const [showSideBar, setShowSideBar] = useState(false)

  const handleShowSideBar=(e)=>{
    setShowSideBar(!e)
  }
  const handleCollapseSideBar=()=>{
    setShowSideBar(false)
  }

  
    return <div className="">
      <Header showSideBar={showSideBar} handleShowSideBar={handleShowSideBar}/> 
      <SideBar showSideBar={showSideBar} handleCollapseSideBar={handleCollapseSideBar}/>
      <ProjectGrid/>
      <ChartSection/>
    </div>
}
export default Dashboard;