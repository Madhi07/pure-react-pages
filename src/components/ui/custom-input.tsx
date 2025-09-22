import * as React from "react";
import { cn } from "@/lib/utils";

export interface CustomInputProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password';
}

const CustomInput = React.forwardRef<HTMLDivElement, CustomInputProps>(
  ({ className, placeholder, value, onValueChange, type = 'text', ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || '');
    const [isFocused, setIsFocused] = React.useState(false);

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Backspace') {
        const newValue = internalValue.slice(0, -1);
        setInternalValue(newValue);
        onValueChange?.(newValue);
      } else if (e.key.length === 1) {
        const newValue = internalValue + e.key;
        setInternalValue(newValue);
        onValueChange?.(newValue);
      }
    };

    const displayValue = type === 'password' ? '•'.repeat(internalValue.length) : internalValue;

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all",
          "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
          "hover:border-primary/50 cursor-text glass-effect",
          isFocused && "border-primary ring-2 ring-primary/20",
          className
        )}
        tabIndex={0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyPress}
        {...props}
      >
        <div className="flex-1 outline-none">
          {internalValue ? (
            <span className="text-foreground">{displayValue}</span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          {isFocused && (
            <span className="animate-pulse text-primary">|</span>
          )}
        </div>
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";

export { CustomInput };