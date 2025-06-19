import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, variant = "primary", onClick, className = "", ...props }) => {
//   const baseStyles = "px-4 py-2 rounded font-medium transition duration-200";
  const baseStyles = "px-4 py-2 rounded font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={classNames(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
