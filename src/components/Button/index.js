import React from "react"
import "./index.less"

const Button = ({ onClick, children, quantity, styles, buttonClass }) => (
  <button className={buttonClass} style={styles} disabled={quantity === 1} onClick={onClick}>
    {children}
  </button>
);

export default Button