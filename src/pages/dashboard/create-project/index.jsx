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

  const handleNavigateNext = (e) => {
    if (componentIndex > 3) {
      return;
    } else {
      setComponentIndex(e + 1);
    }
  };
  const handleNavigatePrev = (e) => {
    if (componentIndex <= 1) {
      return;
    } else {
      setComponentIndex(e - 1);
    }
  };

  console.log(componentIndex);

  return (
    <div>
      <Header />
      <SideBar />
      <div className="mt-[240px]  lg:ml-[320px]">
        {componentIndex === 1 && <CreateCsvFirstStep />}
        {componentIndex === 2 && <CreateCsvProject />}
        {componentIndex === 3 && <CsvProjectField/>}
        {componentIndex === 4 && <CsvPreview/>}
        <div className="w-full flex items-center justify-between px-6 lg:px-10">
          <Button
            variant="link"
            label="Previous"
            onClick={() => handleNavigatePrev(componentIndex)}
            otherClasses={clsx(componentIndex === 1 && "opacity-70 cursor-not-allowed hover:bg-none focus:border-none")}
          />
          <Button
            variant="link"
            label="Next"
            onClick={() => handleNavigateNext(componentIndex)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
