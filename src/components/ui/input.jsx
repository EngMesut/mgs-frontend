import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm",
        "border-2",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-0 focus:bg-white focus:rounded-lg bg=gray-200",
        "dark:bg-white dark:text-black",
        "dark:placeholder:text-gray-500",
        "focus:outline-none focus:ring-0 focus:bg-white focus:rounded-lg ",
      
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
