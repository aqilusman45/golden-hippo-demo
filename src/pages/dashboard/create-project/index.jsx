import Button from "@/components/Button";
import CreateCsvFirstStep from "@/components/CreateCsvFirstStep";
import CreateCsvProject from "@/components/CreateCsvProject";
import CsvPreview from "@/components/CsvPreview";
import CsvProjectField from "@/components/CsvProjectField";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import clsx from "clsx";
import { useState } from "react";

const CreateProject = () => {
  const [componentIndex, setComponentIndex] = useState(1);
  const [dataProps, setDataProps] = useState([])

  const handleNavigateNext = (e) => {
    if (componentIndex > 2) {
      return;
    } else {
      setComponentIndex(e + 1);
    }
  };
  const handleNavigatePrev = (e) => {
    if (componentIndex <= 1) {
      return;
    } else {
      setComponentIndex(e -1);
    }
  };

  const handleDataProps =(e)=>{
      let projectOfProps = []
      projectOfProps.push({e})
      setDataProps(projectOfProps)
  }

  console.log(componentIndex);
  console.log(dataProps, 'data props')

  return (
    <div>
      <Header />
      <SideBar />
      <div className="mt-[240px]  lg:ml-[320px]">
        {componentIndex === 1 && <CreateCsvFirstStep componentIndex={componentIndex} handleDataProps={handleDataProps} handleNavigateNext={handleNavigateNext} handleNavigatePrev={handleNavigatePrev}/>}
        {componentIndex === 2 && <CreateCsvProject componentIndex={componentIndex} handleDataProps={handleDataProps} handleNavigateNext={handleNavigateNext} handleNavigatePrev={handleNavigatePrev}/>}
        {/* {componentIndex === 3 && <CsvProjectField handleDataProps={handleDataProps} handleNavigateNext={handleNavigateNext} handleNavigatePrev={handleNavigatePrev}/>} */}
        {componentIndex === 3 && <CsvPreview dataProps={dataProps}/>}
        <div className="w-full flex items-center justify-between px-6 lg:px-10">
         
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
