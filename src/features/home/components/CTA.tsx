import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="mt-auto pb-6">
      <Link
        to="/onboard"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
      >
        Start Onboarding &rarr;
      </Link>
    </div>
  );
}

export default CTA;
