import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-xl border border-gray-300 p-3
      focus:outline-none
      focus:ring-2
      focus:ring-orange-400
      ${className}`}
      {...props}
    />
  );
}

export default Input;