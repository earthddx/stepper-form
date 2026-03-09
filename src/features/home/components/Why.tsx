function Why() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold text-foreground">Why this exists</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        A four-step employee onboarding form that covers personal details,
        employment info, benefits selection, and a review & sign-off step.
        React Router drives step navigation via nested routes, React Hook Form
        preserves state across steps so going back never wipes your answers, Zod
        validates only the current step's fields on Next, and TanStack Query
        dispatches the final payload and refreshes the submissions list on
        success.
      </p>
    </div>
  );
}

export default Why;
