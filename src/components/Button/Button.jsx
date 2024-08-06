import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss"

export const Button = ({
  href,
  children,
  classes,
  color = "black",
  ...rest
}) => {
  return (
    <Link to={href} className={`button button--${color} ${classes}`} {...rest}>
      {children}
    </Link>
  );
};
