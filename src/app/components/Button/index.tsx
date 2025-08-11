import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-red-600 py-3 px-4 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-red-900/80 transition-all disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
