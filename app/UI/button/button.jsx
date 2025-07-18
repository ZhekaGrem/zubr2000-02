import React from "react";
import styles from "@/app/styles/UI/button.module.css";

// Button component with consistent styling
const Button = ({
  children,
  title_button,
  title_button_sent_out,
  isSubmitted = false,
  disabled = false,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  // Determine button text
  const buttonText = children || (isSubmitted ? title_button_sent_out : title_button);
  
  // Build class names
  const classNames = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      disabled={disabled || isSubmitted}
      className={classNames}
      onClick={onClick}
      {...props}
    >
      <span className={styles.btnText}>
        {buttonText}
      </span>
    </button>
  );
};

export default React.memo(Button);