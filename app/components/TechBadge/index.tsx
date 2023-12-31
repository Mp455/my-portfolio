import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <span className="text-red-600 bg-red-900/80 text-sm py-1 px-3 rounded-lg">
      {name}
    </span>
  );
};
