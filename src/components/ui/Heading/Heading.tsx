import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Heading.module.scss";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  variant?: "black" | "white";
  className?: string;
}

const Heading: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const { children, variant = "black", className } = props;

  return (
    <h1
      className={clsx(styles.heading, styles[`variant-${variant}`], className)}
    >
      {children}
    </h1>
  );
};

export default Heading;
