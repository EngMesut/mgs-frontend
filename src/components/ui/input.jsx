import * as React from "react";
import { cn } from "../../lib/utils";
import { Search } from "lucide-react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm",
        "border-0",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-0 focus:bg-gray-200",
        "transition-all duration-200 ease-in-out",
        "dark:bg-gray-600 dark:text-gray-100",
        "dark:placeholder:text-gray-500",
        "dark:focus:bg-white-800",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "hover:bg-white dark:hover:bg-gary-600 ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const SearchInput = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
      <Input
        type="search"
        className={cn("pl-10", className)}
        placeholder="Search..."
        ref={ref}
        {...props}
      />
    </div>
  );
});
SearchInput.displayName = "SearchInput";

export { Input, SearchInput };
