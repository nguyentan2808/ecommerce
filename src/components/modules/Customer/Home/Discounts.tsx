/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Discounts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        spacing: 10,
      },
      breakpoints: {
        "(min-width: 200px)": {
          slides: { perView: 1, spacing: 10 },
        },
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 800px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: any;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 300);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="py-4 px-8">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 p-4 h-40 rounded-md">
            1
          </div>
          <div className="keen-slider__slide number-slide2 p-4 h-40 rounded-md">
            2
          </div>
          <div
            className="keen-slider__slide number-slide3 p-4 h-40 rounded-md"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage:
                "url(https://cdn.dribbble.com/users/4816549/screenshots/16958113/media/0f165dbc28eb8831c23f00385b077f17.jpg?compress=1&resize=1200x900&vertical=top)",
            }}
          ></div>
          <div
            className="keen-slider__slide p-4 h-40 rounded-md"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",

              backgroundImage:
                "url(https://cdn.dribbble.com/users/1731254/screenshots/17747058/media/858efc09c41ad331c5ff1c9555831f4e.png?compress=1&resize=1200x900&vertical=top)",
            }}
          ></div>
          <div
            className="keen-slider__slide p-4 h-40 rounded-md"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",

              backgroundImage:
                "url(https://cdn.dribbble.com/users/6041123/screenshots/17742281/media/7cc98907d19acd4ba0869b40d87ef369.jpg?compress=1&resize=1200x900&vertical=top)",
            }}
          ></div>
          <div className="keen-slider__slide p-4 h-40 rounded-md">5</div>
          <div className="keen-slider__slide  p-4 h-40 rounded-md">6</div>
        </div>
        {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              left={false}
              onClick={() => instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex p-2 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`border-none w-3 h-3 rounded-full mx-1 p-1 cursor-pointer bg-black ${
                currentSlide === idx ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Discounts;

const Arrow = ({
  disabled,
  left,
  onClick,
}: {
  disabled: boolean;
  left: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"} ${
        disabled ? " arrow--disabled" : ""
      }`}
    >
      {left && "<"}
      {!left && ">"}
    </div>
  );
};
