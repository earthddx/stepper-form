const STACK = [
  {
    name: "React Hook Form",
    description:
      "A single useForm instance lives in the layout and is shared to every step via FormProvider + useFormContext. Values persist across route changes because the layout never unmounts, so navigating back restores exactly what was typed.",
  },
  {
    name: "Zod",
    description:
      "One schema covers all four steps. Per-step field arrays (STEP1_FIELDS, etc.) are passed to trigger() on Next so only the current step is validated before advancing. The full schema runs on final submit.",
  },
  {
    name: "TanStack Query",
    description:
      "useMutation wraps api.submit() on the final step. On success it calls invalidateQueries([\"applications\"]) so the submissions list on the home page automatically refetches the updated data.",
  },
  {
    name: "React Router",
    description:
      "Each step is a child route under /onboard, rendered via <Outlet /> in the shared layout. The layout owns the form state and the progress stepper, while each child owns only its own fields.",
  },
];

function StackCards() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">The stack</h2>
      <ul className="space-y-2">
        {STACK.map((item) => (
          <li
            key={item.name}
            className="p-4 bg-card border border-border rounded-lg space-y-1"
          >
            <p className="text-sm font-medium text-foreground">{item.name}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StackCards;
