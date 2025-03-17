import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Paragraph.module.scss";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  variant?: "black" | "white";
  className?: string;
}

const Paragraph: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const { children, variant = "black", className } = props;
  return (
    <p
      className={clsx(
        className,
        styles.paragraph,
        styles[`variant-${variant}`]
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
