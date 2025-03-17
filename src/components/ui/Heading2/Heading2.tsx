import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Heading2.module.scss";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  variant?: "black" | "white" | "blue";
  className?: string;
}

const Heading2: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const { children, variant = "black", className } = props;
  return (
    <h2
      className={clsx(styles.heading, styles[`variant-${variant}`], className)}
    >
      {children}
    </h2>
  );
};

export default Heading2;
