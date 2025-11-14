import type { ReactNode, CSSProperties } from "react";
import styles from "./index.module.css";

const Wrapper = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <section
      className={`${styles.centeredSection} ${className || ""}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default Wrapper;
