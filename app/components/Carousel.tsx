"use client";
import React, { useState, useEffect, Fragment } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlide = true;
  const autoSlideInterval = 5000;

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mb-[100px] w-full grid place-items-center max-[440px]:p-5">
      <div className="overflow-hidden relative h-[450px] bg-[#f1f1f1] py-[80px] mt-[100px]  px-[100px] w-[1200px] max-[440px]:w-full max-[440px]:flex max-[440px]:flex-col max-[440px]:gap-8 max-[440px]:p-3 rounded-[20px] grid grid-cols-2 place-items-center ">
        {images.map((image, index) => (
          <Fragment key={index}>
            <div className="flex flex-col h-[450px] max-[440px]:h-48 max-[440px]:space-y-5 space-y-[40px] items-start">
              <span className="bg-white p-[10px] rounded-[10px]">
                <img
                  src="/EmbeddedFinance.webp"
                  alt="embedded finance"
                  className="h-[40px] w-[40px]"
                />
              </span>
              <p className="font-light text-[#687588] leading-[30px]">
                Embedded Finance platform and Payroll Management Software{" "}
                Solutions for your organizations and workforce
              </p>
              <span className="flex flex-row space-x-[10px] items-center justify-center">
                <span className="text-[#2b71f0] font-semiBold text-[13px]">
                  Learn more
                </span>
                <span className="bg-[#2b71f0] w-[30px] h-[30px] grid place-items-center rounded-full text-white">
                  <IoIosArrowRoundForward className="text-[21px]" />
                </span>
              </span>
            </div>
            <img
              src="/computerDashboard.webp"
              alt="computer"
              className="mb-[100px]"
            />
          </Fragment>
        ))}
      </div>
      <div className="absolute bottom-[-60px] left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            title="slide_buttons"
            className={`w-[11px] h-[11px] rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#2b71f0]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
