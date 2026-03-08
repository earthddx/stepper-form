function Why() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold text-foreground">Why this exists</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Multi-step forms expose exactly where libraries meet: React Router drives
        the step navigation, RHF controls each step's local form state, Zod
        enforces the schema on submit, and TanStack Query dispatches the final
        payload and caches the response. State is preserved across steps so
        navigating back doesn't wipe your answers.
      </p>
    </div>
  );
}

export default Why;
