import React, { useEffect } from "react";
import clsx from "clsx";
import { hideBodyScroll, showBodyScroll } from "../../utiles/helpers";

export const ModalComponent = ({
  otherClasses,
  show,
  handleClose,
  additionalClass,
  children,
}) => {
  const modalComponentClasses = clsx(
    "flex justify-center fixed top-0 left-0 bottom-0 right-0 transition duration-300 bg-[#00000080] overflow-auto z-50",
    show ? "opacity-1 z-50 visible" : " opacity-0 invisible",
    additionalClass
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeClick, false);
    return () => {
      document.removeEventListener("keydown", handleEscapeClick, false);
    };
    // eslint-disable-next-line
  }, []);

  const handleEscapeClick = (event) => {
    if (event.keyCode === 27) handleClose();
  };

  if (show) {
    hideBodyScroll();
  } else {
    showBodyScroll();
  }

  return (
    <div className={modalComponentClasses} data-testid="modal-component">
      <button
        className={
          "modal-overlay absolute left-0 top-0 bottom-0 right-0 z-[-1] cursor-auto w-full h-full"
        }
        onClick={() => handleClose()}
      />
      <div
        className={clsx(
          "modal-wrapper bg-white overflow-auto h-auto my-auto rounded-lg",
          otherClasses
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
