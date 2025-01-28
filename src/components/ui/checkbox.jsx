import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

const Checkbox = React.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    React.useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const handleChange = (e) => {
      const newChecked = e.target.checked;
      setIsChecked(newChecked);
      onCheckedChange?.(newChecked);
    };

    return (
      <div className="relative">
        <input
          type="checkbox"
          ref={ref}
          checked={isChecked}
          onChange={handleChange}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded border border-gray-200 ring-offset-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "checked:bg-gray-900 checked:text-gray-50",
            "dark:border-gray-800 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
            "dark:checked:bg-gray-50 dark:checked:text-gray-900",
            "appearance-none",
            className
          )}
          {...props}
        />
        {isChecked && (
          <Check className="absolute top-0 left-0 h-4 w-4 text-white dark:text-gray-900 pointer-events-none" />
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
