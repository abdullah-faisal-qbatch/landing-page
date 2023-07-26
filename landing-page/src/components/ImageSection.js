import React from "react";
import Image from "../cards/Image";
import "../styles/ImageSection.css";
import image from "../assets/image.jpg";

const ImageSection =()=> {
  const imagesData = [
    {
      picture: image,
      title: "Advanced Features",
      description:
        "Our landing page template works on all devices, so you only have to set it up once and get beautiful results forever",
    },
    {
      picture: image,
      title: "Advanced Features",
      description:
        "Our landing page template works on all devices, so you only have to set it up once and get beautiful results forever",
    },
    {
      picture: image,
      title: "Advanced Features",
      description:
        "Our landing page template works on all devices, so you only have to set it up once and get beautiful results forever",
    },
  ];
  return (
    <div className="flex flex-col items-center main-section-image-section">
      <p className="text-center mt-10 image-section-description">
        Simplify operating and manage with transparency
      </p>
      <div className="grid grid-cols-3 mt-30 mb-10 ml-40 mr-40 image-section-margin">
        {imagesData.map((index) => (
          <Image
            image={index.picture}
            title={index.title}
            description={index.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSection;
