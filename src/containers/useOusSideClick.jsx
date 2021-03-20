import { useEffect } from "react";

const useOutSideClick = (ref, handleClick) => {
  useEffect(() => {
    const handleClickOutSide = (even) => {
      if (ref.current && !ref.current.contains(even.target)) {
        handleClick(ref);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [ref, handleClick]);
};

export default useOutSideClick;
