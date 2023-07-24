import React from "react";
import "../styles/Image.css";

function Image(props) {
  return (
    <div className="flex space-x-2 flex-col mt-10">
      <div className="img-section-height">
        <div className="img-head">
          <img
            src={props.image}
            alt="Error in image"
            className="single-image-section-style"
          />
        </div>
      </div>
      <div className="mt-2.5">
        <h1 className="max-w-md text-2xl font-bold mt-2.5 img-desc">
          {props.title}
        </h1>
        <p className="max-w-sm text-darkGrayishBlue mt-2.5">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Image;
