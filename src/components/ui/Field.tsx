import type { FieldError } from "react-hook-form";
import type { ReactNode } from "react";

export const inputCls =
  "w-full px-3 py-2 text-sm border border-input rounded-md bg-background " +
  "text-foreground placeholder:text-muted-foreground " +
  "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

export const inputErrorCls = "border-destructive focus:ring-destructive";

interface FieldProps {
  name: string;
  label: string;
  children: ReactNode;
  error?: FieldError;
  hint?: string;
  required?: boolean;
}

export function Field({
  name,
  label,
  error,
  hint,
  required,
  children,
}: FieldProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error.message}
        </p>
      )}
    </div>
  );
}
