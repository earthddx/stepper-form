import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-foreground">Playground</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          RHF + Zod + TanStack Query — minimal demo
        </p>
      </div>
      <Link
        to="/dashboard"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Dashboard
      </Link>
    </div>
  );
}

export default Header;
