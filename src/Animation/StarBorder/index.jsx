import styles from "./styles.module.css";

const StarBorder = ({
  as: Component = "button",
  className,
  color,
  speed,
  thickness,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`${styles.star_border_container} ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className={styles.border_gradient_bottom}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={styles.border_gradient_top}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className={styles.inner_content}>{children}</div>
    </Component>
  );
};

export default StarBorder;
