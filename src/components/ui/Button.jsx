import React from "react";

const Button = ({
  href,
  onClick,
  children,
  className = "",
  type = "button",
  target = "_self",
  unstyled = false,
}) => {
  const baseStyles = unstyled
    ? ""
    : "inline-flex items-center px-4 py-2 rounded-2xl text-white font-medium bg-blue-600 hover:bg-blue-700 transition duration-200";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
