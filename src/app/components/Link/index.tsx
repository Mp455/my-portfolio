import { cn } from "@/lib/utils";

import { ComponentProps } from "react";
import Link from "next/link";

type LinkProps = ComponentProps<typeof Link>;
export const ButtonLink = ({ className, children, ...props }: LinkProps) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-2 text-white text-sm hover:text-red-500 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
