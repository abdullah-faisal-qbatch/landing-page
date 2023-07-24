import React from "react";
import image from "./../assets/image.jpg";
import "./../styles/Image.css";

const Image = (props) => {
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
          {/* Advanced Features */}
        </h1>
        <p className="max-w-sm text-darkGrayishBlue mt-2.5">
          {props.description}
          {/* Our landing page template works on all devices, so you only have to
          set it up once and get beautiful results forever */}
        </p>
      </div>
    </div>
  );
};

export default Image;
