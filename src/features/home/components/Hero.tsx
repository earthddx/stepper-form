function Hero() {
  return (
    <div className="space-y-3 pt-10">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
        Learning project
      </p>
      <h1 className="text-3xl font-bold text-foreground">
        Multi-step Onboarding Form
      </h1>
      <p className="text-muted-foreground leading-relaxed">
        A sandbox built around a 4-step employee onboarding flow — Personal,
        Employment, Benefits, and Review. Each step is validated with Zod and
        React Hook Form, state is preserved as you move between steps, and the
        final submission is handled by TanStack Query.
      </p>
    </div>
  );
}

export default Hero;
