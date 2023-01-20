import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    //  ======= Hero Slider Section =======
    <div className="pb-4">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/img/post-slide-6.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              {" "}
              17 Pictures of Medium Length Hair in Layers That Will Inspire Your
              New Haircut
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/img/post-slide-1.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>The Best Homemade Masks for Face (keep the Pimples Away)</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/img/post-slide-3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              13 Amazing Poems from Shel Silverstein with Valuable Life Lessons
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
