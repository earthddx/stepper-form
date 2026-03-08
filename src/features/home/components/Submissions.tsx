const MOCK_SUBMISSIONS = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    jobTitle: "Frontend Engineer",
    department: "Engineering",
    employmentType: "Full-time",
    healthPlan: "Premium",
    submittedAt: "2026-03-05T10:24:00.000Z",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Martinez",
    email: "bob.martinez@example.com",
    jobTitle: "Product Manager",
    department: "Marketing",
    employmentType: "Full-time",
    healthPlan: "Standard",
    submittedAt: "2026-03-05T11:03:00.000Z",
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Wei",
    email: "carol.wei@example.com",
    jobTitle: "UX Designer",
    department: "Design",
    employmentType: "Full-time",
    healthPlan: "Premium",
    submittedAt: "2026-03-05T13:47:00.000Z",
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Okafor",
    email: "d.okafor@example.com",
    jobTitle: "Data Analyst",
    department: "Finance",
    employmentType: "Contract",
    healthPlan: "Basic",
    submittedAt: "2026-03-06T08:15:00.000Z",
  },
  {
    id: 5,
    firstName: "Emily",
    lastName: "Schulz",
    email: "emily.schulz@example.com",
    jobTitle: "HR Coordinator",
    department: "HR",
    employmentType: "Part-time",
    healthPlan: "Standard",
    submittedAt: "2026-03-06T09:32:00.000Z",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Nguyen",
    email: "frank.n@example.com",
    jobTitle: "Backend Engineer",
    department: "Engineering",
    employmentType: "Full-time",
    healthPlan: "Premium",
    submittedAt: "2026-03-06T10:58:00.000Z",
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Patel",
    email: "grace.patel@example.com",
    jobTitle: "Operations Lead",
    department: "Operations",
    employmentType: "Full-time",
    healthPlan: "Standard",
    submittedAt: "2026-03-06T14:20:00.000Z",
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Kim",
    email: "henry.kim@example.com",
    jobTitle: "DevOps Engineer",
    department: "Engineering",
    employmentType: "Contract",
    healthPlan: "Basic",
    submittedAt: "2026-03-06T15:44:00.000Z",
  },
  {
    id: 9,
    firstName: "Isla",
    lastName: "Rossi",
    email: "isla.rossi@example.com",
    jobTitle: "Brand Designer",
    department: "Design",
    employmentType: "Part-time",
    healthPlan: "Standard",
    submittedAt: "2026-03-07T08:02:00.000Z",
  },
  {
    id: 10,
    firstName: "James",
    lastName: "Andersen",
    email: "j.andersen@example.com",
    jobTitle: "Finance Analyst",
    department: "Finance",
    employmentType: "Full-time",
    healthPlan: "Premium",
    submittedAt: "2026-03-07T09:19:00.000Z",
  },
];

function Submissions() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">
        Current submissions
      </h2>
      <ul className="space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1">
        {MOCK_SUBMISSIONS.map((s) => (
          <li
            key={s.id}
            className="p-4 bg-card border border-border rounded-lg space-y-1"
          >
            <p className="text-sm font-medium text-foreground">
              {s.firstName} {s.lastName}
            </p>
            <p className="text-xs text-muted-foreground">
              {s.jobTitle} · {s.department} · {s.employmentType}
            </p>
            <p className="text-xs text-muted-foreground">
              {s.email} · {s.healthPlan} health plan
            </p>
            <p className="text-xs text-muted-foreground/60">
              Submitted {new Date(s.submittedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submissions;
