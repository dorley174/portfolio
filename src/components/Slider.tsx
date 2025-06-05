import React, { useState } from 'react';
import '../css/main.css';

interface SliderProps {
  projects: React.ReactNode[]; // Массив React-элементов
}

const Slider: React.FC<SliderProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      {/* Левая стрелка */}
      <button className="slider-arrow left" onClick={handlePrev}>
        &#9664;
      </button>

      {/* Контейнер с проектами */}
      <div
        className="slider-content"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Смещение в зависимости от текущего индекса
        }}
      >
        {projects.map((project, index) => (
          <div className="project" key={index}>
            {project}
          </div>
        ))}
      </div>

      {/* Правая стрелка */}
      <button className="slider-arrow right" onClick={handleNext}>
        &#9654;
      </button>

      {/* Индикаторы */}
      <div className="slider-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
