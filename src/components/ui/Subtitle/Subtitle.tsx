import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Subtitle.module.scss";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  variant?: "black" | "white";
}

const Subtitle: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const { children, variant = "black" } = props;
  return (
    <p className={clsx(styles.subtitle, styles[`variant-${variant}`])}>
      {children}
    </p>
  );
};

export default Subtitle;
