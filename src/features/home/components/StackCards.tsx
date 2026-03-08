const STACK = [
  {
    name: "React Hook Form",
    description:
      "Manages each step's form state without re-renders on every keystroke. useFormContext shares state across the step tree without prop drilling.",
  },
  {
    name: "Zod",
    description:
      "Defines a per-step schema that validates only the current step's fields on submit. Derives TypeScript types automatically via z.infer<>.",
  },
  {
    name: "TanStack Query",
    description:
      "Handles server state: useMutation dispatches the final merged payload, and invalidateQueries refreshes any dependent data after a successful submission.",
  },
  {
    name: "React Router",
    description:
      "Powers the step-to-step navigation via nested routes under /onboard. Each step is a child route, and the layout renders the shared progress stepper.",
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
