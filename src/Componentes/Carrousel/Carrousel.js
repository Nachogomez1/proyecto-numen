import React, { useEffect, useState } from "react";
import SliderContent from "../../Componentes/Carrousel/SliderContent";
import Dots from "../../Componentes/Carrousel/Dots";
import Arrows from "../../Componentes/Carrousel/Arrows";
import sliderImage from "../../Componentes/Carrousel/sliderImage";
import "./carrousel.css";

const len = sliderImage.length - 1;

function Carrousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Carrousel;
