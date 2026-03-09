export default ({
  label,
  value,
}: {
  label: string;
  value?: string | number | boolean;
}) => {
  const display =
    value === true
      ? "Yes"
      : value === false
        ? "No"
        : value
          ? String(value)
          : "—";
  return (
    <div className="flex justify-between py-1.5 border-b border-border last:border-none">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs text-foreground font-medium">{display}</span>
    </div>
  );
};
