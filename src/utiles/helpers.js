export const hideBodyScroll = () => {
    if (typeof window !== "undefined") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  };
  
  export const showBodyScroll = () => {
    if (typeof window !== "undefined") {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  };
  