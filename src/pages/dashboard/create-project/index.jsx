import Button from "@/components/Button";
import CreateCsvFirstStep from "@/components/CreateCsvFirstStep";
import CreateCsvProject from "@/components/CreateCsvProject";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
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
        <div className="w-full flex items-center justify-between">
          <Button
            variant="link"
            label="Previous"
            onClick={() => handleNavigatePrev(componentIndex)}
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
