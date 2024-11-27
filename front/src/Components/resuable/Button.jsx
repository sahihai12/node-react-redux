import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className="outlinebtn bg-transparent primary b-primary border px-8 py-1 b-radius text-xl"
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button;
