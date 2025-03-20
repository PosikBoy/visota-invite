import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Subtitle.module.scss";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "black" | "white";
}

const Subtitle: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const { children, variant = "black", className, ...rest } = props;
  return (
    <p
      className={clsx(styles.subtitle, styles[`variant-${variant}`], className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Subtitle;
