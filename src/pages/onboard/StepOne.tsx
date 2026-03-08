import React from "react";

function StepOne() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Personal Information
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Fields marked * are required
        </p>
      </div>
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Basic Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input id="firstName" placeholder="Jane" />
          <input id="lastName" placeholder="Smith" />
          <input id="dateOfBirth" type="date" />
        </div>
      </section>
    </div>
  );
}

export default StepOne;
