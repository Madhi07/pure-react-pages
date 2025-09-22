import * as React from "react";
import { cn } from "@/lib/utils";

export interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: { value: string; label: string }[];
}

const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ className, placeholder, options, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all",
            "focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none",
            "hover:border-primary/50 cursor-pointer appearance-none",
            "glass-effect z-20 relative",
            // Ensure text is visible
            "text-foreground",
            // Style for placeholder-like first option
            "[&>option:first-child]:text-muted-foreground",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="text-muted-foreground">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              className="bg-card text-foreground py-2"
            >
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none z-30">
          <svg
            className="w-4 h-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  }
);
CustomSelect.displayName = "CustomSelect";

export { CustomSelect };