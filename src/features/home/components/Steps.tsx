const STEPS = [
  {
    number: 1,
    label: "Personal",
    description:
      "First and last name, date of birth, gender, work email, phone number, and home address.",
  },
  {
    number: 2,
    label: "Employment",
    description:
      "Department, job title, start date, employment type (full-time, part-time, contract, internship), and work location.",
  },
  {
    number: 3,
    label: "Benefits",
    description:
      "Health, dental, and vision plan tiers, life insurance, retirement contribution percentage, equipment preference, WFH allowance, meal subsidy, phone allowance, and optional parking spot.",
  },
  {
    number: 4,
    label: "Review & Submit",
    description:
      "Summary of all entered data, agreement to terms and background check consent, and a digital signature before final submission.",
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
            <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
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
