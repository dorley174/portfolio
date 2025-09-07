import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; // Import Flickity styles
import Image from "next/image"; // Assuming you're using Next.js for images
import "../css/flickity.css"; // Your custom styles

interface SliderProps {
  projects: React.ReactNode[]; // Array of React elements
}

const Slider: React.FC<SliderProps> = ({ projects }) => {
  const flickityOptions = {
    initialIndex: 0,
    cellAlign: "center",
    wrapAround: true,
    autoPlay: 5000, // Auto-play every 3 seconds
    pageDots: true, // Show dots for navigation
    prevNextButtons: true, // Show previous/next buttons
  };

  return (
    <div id="slider" className="slider">
      <h1 className="title">Projects </h1>
      <Flickity
        className={"carousel"} // Default class for Flickity
        elementType={"div"} // Default container element
        options={flickityOptions} // Flickity options
        disableImagesLoaded={false} // Default false
        reloadOnUpdate // Reload Flickity on component update
      >
        {projects.map((project, index) => (
          <div className="carousel-cell" key={index}>
            {project}
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default Slider;
