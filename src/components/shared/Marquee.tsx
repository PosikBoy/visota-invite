import React from "react";
import styles from "./Marquee.module.scss"; // Импортируем SCSS модуль

interface MarqueeProps {
  text: string; // Текст для бегущей строки
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  let repeatedText = text;
  for (let i = 0; i < 50; i++) {
    repeatedText = repeatedText + " • " + text;
  }

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>{repeatedText}</div>
    </div>
  );
};

export default Marquee;
