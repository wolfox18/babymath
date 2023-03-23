import React from "react";
import "./Variant.css";

export const Variant = ({ number, isCorrect }) => {
  const [variantClass, setVariantClass] = React.useState("variant");
  React.useEffect(()=>{
    setVariantClass('variant');
  }, []);  
  return <li onClick={()=>{
    if (isCorrect) {
      setVariantClass("variant variant__type_correct");
    } else {
      setVariantClass("variant variant__type_wrong");
    }
  }}className={variantClass}>{number}</li>;
};
