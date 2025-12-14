import React from "react";

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const variantClasses = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
