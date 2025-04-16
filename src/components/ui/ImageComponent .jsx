import React from "react";

const ImageComponent = ({
  src,
  alt = "",
  width = "auto",
  height = "auto",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width, height }}
      className={`object-contain ${className}`}
      loading="lazy"
    />
  );
};



export default ImageComponent;
