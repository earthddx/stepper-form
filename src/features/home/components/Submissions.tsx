import { useApplications } from "@/hooks/useApplications";


function Submissions() {
  const { data: applications = [], isLoading } = useApplications();

  if (isLoading && !applications.length) {
    return (
      <p className="text-sm text-muted-foreground">Loading submissions...</p>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">
        Current submissions
      </h2>
      {!applications.length && (
        <p className="text-sm text-muted-foreground">No submissions yet.</p>
      )}
      <ul className="flex flex-wrap gap-3">
        {applications?.map((s) => (
          <li
            key={s.id}
            className="px-4 py-3 bg-card border border-border rounded-lg flex flex-col gap-0.5 min-w-48"
          >
            <p className="text-sm font-medium text-foreground">
              {s.firstName} {s.lastName}
            </p>
            <p className="text-xs text-muted-foreground">
              {s.jobTitle} · {s.department}
            </p>
            <p className="text-xs text-muted-foreground/60">
              {new Date(s.createdAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submissions;
