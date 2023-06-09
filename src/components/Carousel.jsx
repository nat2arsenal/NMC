import { useState } from 'react';
import CarouselItem from './CarouselItem';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      image: '/assets/Carousel Images/4.png',
      description: 'Business Ethics',
    },
    {
      image: '/assets/Carousel Images/5.png',
      description: 'Business Ethics',
    },
    {
      image: '/assets/Carousel Images/6.png',
      description: 'Business Ethics',
    },
    {
      image: '/assets/Carousel Images/7.png',
      description: 'Business Ethics',
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="carousel-container">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 71}%)` }}
        >
          {items.map((item, index) => {
            return <CarouselItem item={item} key={index} />;
          })}
        </div>
        <button
          type="button"
          className="arrow-button arrow-button--right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src="/assets/Images/arrow-down.svg" alt="right-arrow" />
        </button>
        <button
          type="button"
          className="arrow-button arrow-button--left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <img src="/assets/Images/arrow-down.svg" alt="left-arrow" />
        </button>
      </div>
    </>
  );
}
