import clsx from "clsx";
import styles from "./Button.module.scss";

interface IProps {
  onClick: () => void;
  text: string;
  variant?: "contained-60-primary";
  className?: string;
}

const Button = (props: IProps) => {
  const { onClick, variant = "contained-60-primary", text, className } = props;
  return (
    <button
      className={clsx(styles.button, styles[`variant-${variant}`], className)}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
