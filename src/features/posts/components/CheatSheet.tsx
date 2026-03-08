function CheatSheet() {
  return (
    <div className="bg-muted rounded-lg p-4 text-xs space-y-2">
      <p className="font-semibold text-foreground text-sm">
        How these three fit together
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
        <div>
          <p className="font-medium text-foreground mb-1">Zod</p>
          <p className="text-muted-foreground">
            Defines the schema: field types, constraints, error messages.{" "}
            <code className="bg-background px-1 rounded">z.infer&lt;&gt;</code>{" "}
            gives you the TS type for free.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground mb-1">React Hook Form</p>
          <p className="text-muted-foreground">
            <code className="bg-background px-1 rounded">register()</code> wires
            inputs without useState.{" "}
            <code className="bg-background px-1 rounded">handleSubmit()</code>{" "}
            runs Zod via{" "}
            <code className="bg-background px-1 rounded">zodResolver</code>{" "}
            before calling your function.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground mb-1">TanStack Query</p>
          <p className="text-muted-foreground">
            <code className="bg-background px-1 rounded">useQuery</code> fetches
            &amp; caches the list.{" "}
            <code className="bg-background px-1 rounded">useMutation</code> +{" "}
            <code className="bg-background px-1 rounded">
              invalidateQueries
            </code>{" "}
            triggers a refetch after the form submits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheatSheet;
