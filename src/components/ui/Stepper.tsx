import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const STEPS = [
  { label: "Personal", path: "/onboard/personal" },
  { label: "Employment", path: "/onboard/employment" },
  { label: "Benefits", path: "/onboard/benefits" },
  { label: "Review", path: "/onboard/review" },
] as const;

export default () => {
  const { pathname } = useLocation();
  const currentIndex = STEPS.findIndex((s) => pathname.startsWith(s.path));

  return (
    <nav aria-label="Form progress" className="mb-8">
      <ol className="flex items-center">
        {STEPS.map((step, i) => {
          const isDone = i < currentIndex;
          const isCurrent = i === currentIndex;

          return (
            <li
              key={step.path}
              className="flex items-center flex-1 last:flex-none"
            >
              {/* Step circle */}
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors",
                    isDone &&
                      "bg-primary border-primary text-primary-foreground",
                    isCurrent && "bg-background border-primary text-primary",
                    !isDone &&
                      !isCurrent &&
                      "bg-background border-border text-muted-foreground",
                  )}
                >
                  {isDone ? "✓" : i + 1}
                </span>
                <span
                  className={cn(
                    "mt-1 text-xs font-medium hidden sm:block",
                    isCurrent ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2 mb-4",
                    i < currentIndex ? "bg-primary" : "bg-border",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
