const STEPS = [
  {
    number: 1,
    label: "Personal",
    description: "Name, email, date of birth, and contact details.",
  },
  {
    number: 2,
    label: "Employment",
    description: "Job title, department, start date, and employment type.",
  },
  {
    number: 3,
    label: "Benefits",
    description: "Health plan, retirement contribution, and PTO preference.",
  },
  {
    number: 4,
    label: "Review",
    description: "Summary of all entries before the final submission.",
  },
];

function Steps() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">The form steps</h2>
      <ol className="space-y-2">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
              {step.number}
            </span>
            <div className="space-y-0.5">
              <p className="text-sm font-medium text-foreground">{step.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Steps;
