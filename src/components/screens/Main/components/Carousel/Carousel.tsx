"use client";

import styles from "./Carousel.module.scss";
import CarouselImage1 from "@/assets/images/carousel-1.png";
import CarouselImage2 from "@/assets/images/carousel-2.png";
import CarouselImage3 from "@/assets/images/carousel-3.png";
import CarouselImage4 from "@/assets/images/carousel-4.png";
import clsx from "clsx";
import Image from "next/image";

import { useEffect, useState } from "react";

const images = [CarouselImage1, CarouselImage2, CarouselImage3, CarouselImage4];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image src={image} alt={`slide-${index}`} fill />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={clsx(styles.dot, index == currentIndex && styles.active)}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
