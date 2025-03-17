"use client";

import Heading2 from "@/components/ui/Heading2/Heading2";
import styles from "./Preferences.module.scss";
import Image, { StaticImageData } from "next/image";

import Preference1 from "@/assets/images/color-1.png";
import Preference2 from "@/assets/images/color-2.png";
import Preference3 from "@/assets/images/color-3.png";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Subtitle from "@/components/ui/Subtitle/Subtitle";
import Heading from "@/components/ui/Heading/Heading";

interface IItem {
  id: number;
  snippet: string;
  image: StaticImageData;
}

const data: IItem[] = [
  {
    id: 0,
    snippet: "Голубой",
    image: Preference1,
  },
  {
    id: 1,
    snippet: "Синий",
    image: Preference2,
  },
  {
    id: 2,
    snippet: "Серебристый",
    image: Preference3,
  },
];

const Preferences = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className={styles.preferencesWrapper}>
      <div className="container">
        <div className={styles.preferences}>
          <div className={styles.heading}>
            <Heading>
              Тематика дня рождения —{" "}
              <span className={styles.accent}>высокое общество.</span>
            </Heading>
            <Heading2>Вечерние образы будут выглядеть очень кстати!</Heading2>
            <Heading2>
              А также не забудь запастись карнавальной маской.
            </Heading2>
            <Heading2 variant="blue">
              Палитра праздника ориентирована на голубой, синий, серебристый и
              белый.
            </Heading2>
            <div className={styles.snippets}>
              {data.map((item) => (
                <div
                  className={clsx(
                    styles.snippet,
                    item.id === currentSlide && styles.active
                  )}
                  onClick={() => setCurrentSlide(item.id)}
                  key={item.id}
                >
                  <span>{item.snippet}</span>
                </div>
              ))}
            </div>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    styles.slide,
                    item.id == currentSlide && styles.active
                  )}
                >
                  <Image src={item.image} alt={`slide-${index}`} />
                </div>
              ))}
            </div>
            <Heading2 variant="blue">
              Все референсы можно найти по{" "}
              <a
                href="https://pin.it/fy0tBZE45"
                style={{ color: "blue", textDecoration: "underline" }}
                rel="nofollow"
              >
                ссылке.
              </a>
            </Heading2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preferences;
