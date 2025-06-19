import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
