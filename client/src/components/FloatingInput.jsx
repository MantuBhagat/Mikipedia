import React, { useState } from "react";

const FloatingInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6">
      {/* Icon */}
      {icon && (
        <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
      )}

      {/* Input */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(value !== "")}
        placeholder=" " // important for floating label
        className={`w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
          ${isFocused || value ? "border-gray-800" : "border-gray-500"}`}
      />

      {/* Label */}
      <label
        htmlFor={name}
        className={`absolute left-10 px-1 transition-all duration-200 cursor-text bg-white 
          ${
            isFocused || value
              ? "-top-2 text-xs text-gray-800"
              : "top-3 text-sm text-gray-500"
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
