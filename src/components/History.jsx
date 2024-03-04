import React, { useState } from "react";

const History = () => {
  const [Imagesindex, setImagesindex] = useState(0);
  const CarouselImages = [
    "/Assets/images/LA.jpeg",
    "/Assets/images/snowMOunt.jpeg",
    "/Assets/images/LA.jpeg",
    "/Assets/images/snowMOunt.jpeg",
  ];

  // Carousel handler
  const indexer = (index) => {
    setImagesindex(index);
  };

  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}${CarouselImages[Imagesindex]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50%",
  };

  // Render carousel or accordion based on screen size
  const isMobile = window.innerWidth <= 768;
  let content;
  if (isMobile) {
    // Render accordion
    content = CarouselImages.map((image, index) => (
      <div
        key={index}
        onClick={() => indexer(index)}
        className='accordion-item'>
        <img
          src={image}
          alt='carouselImage'
          className='object-contain w-full '
        />
      </div>
    ));
  } else {
    // Render carousel
    content = CarouselImages.map((image, index) => (
      <li
        key={index}
        onClick={() => indexer(index)}
        className='w-[10rem] border-2 border-gray-300 cursor-pointer'>
        <img
          src={image}
          alt='carouselImage'
          className='object-contain w-auto'
        />
      </li>
    ));
  }

  // Render carousel indicators
  const carousel_indicators = () => {
    return CarouselImages.map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 cursor-pointer bg-white rounded-full mx-1 ${
          index === Imagesindex ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => indexer(index)}
      />
    ));
  };

  return (
    <section
      id='section1'
      style={style}
      className='section_1 w-[100%] h-screen flex flex-col justify-between items-center gap-[2rem] pb-[6rem] md:pb-0 '>
      <div className='mt-6 lg:mt-[9rem] w-full md:mb-0 mb-[7rem] relative md:block top-[13rem]'>
        <div className='flex flex-col w-full'>
          <p className='text-[40px] items-center md:text-4xl flex gap-5 md:gap-0 font-bold text-gray-600 '>
            01{" "}
            <span className='font-semibold text-lg lg:text-xl uppercase ml-[-1rem]'>
              history
            </span>{" "}
          </p>
        </div>
        <p className='text-xs md:text-sm text-neutral-900  text-left p-2 md:text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className='flex items-center p-3 flex-col w-full m-auto bg-slate-900  bg-opacity-45 md:block relative bottom-[-5rem] '>
        {isMobile ? (
          <div className='accordion flex w-full'>{content}</div>
        ) : (
          <ul className='w-full p-3 m-auto items- gap-[1rem] justify-center flex'>
            {content}
          </ul>
        )}
        <div className='flex'>{carousel_indicators()}</div>
      </div>
    </section>
  );
};

export default React.memo(History);
