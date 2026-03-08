import {
  DEPARTMENTS,
  EMPLOYMENT_TYPES,
  STEP2_FIELDS,
  WORK_LOCATIONS,
  type OnboardingFormData,
} from "@/schemas/onboarding.schema";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Field, inputCls, inputErrorCls } from "@/components/ui/Field";
import { useNavigate } from "react-router-dom";

function StepTwo() {
  const {
    formState: { errors },
    register,
  } = useFormContext<OnboardingFormData>();

  return (
    <div className="space-y-8">
      <Header />
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Role
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            name="department"
            label="Department"
            error={errors.department}
            required
          >
            <select
              id="department"
              className={cn(inputCls, errors.department && inputErrorCls)}
              {...register("department")}
            >
              {DEPARTMENTS.map((dep) => {
                return (
                  <option key={dep} value={dep}>
                    {dep.replace(/_/g, " ")}
                  </option>
                );
              })}
            </select>
          </Field>
          <Field
            name="jobTitle"
            label="Job Title"
            error={errors.jobTitle}
            required
          >
            <input
              id="jobTitle"
              placeholder="Software Engineer"
              className={cn(inputCls, errors.jobTitle && inputErrorCls)}
              {...register("jobTitle")}
            />
          </Field>
          <Field
            name="startDate"
            label="Start Date"
            error={errors.startDate}
            required
          >
            <input
              id="startDate"
              type="date"
              className={cn(inputCls, errors.startDate && inputErrorCls)}
              {...register("startDate")}
            />
          </Field>
          <Field
            name="employmentType"
            label="Employment Type"
            error={errors.employmentType}
            required
          >
            <select
              id="employmentType"
              className={cn(inputCls, errors.employmentType && inputErrorCls)}
              {...register("employmentType")}
            >
              {EMPLOYMENT_TYPES.map((type) => {
                return (
                  <option key={type} value={type}>
                    {type.replace(/_/g, " ")}
                  </option>
                );
              })}
            </select>
          </Field>
          <Field
            name="workLocation"
            label="Work Location"
            error={errors.workLocation}
            required
          >
            <select
              id="workLocation"
              className={cn(inputCls, errors.workLocation && inputErrorCls)}
              {...register("workLocation")}
            >
              <option value="">Select location</option>
              {WORK_LOCATIONS.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </section>
      <Navigation />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground">
        Employment Details
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Your role and contract information
      </p>
    </div>
  );
};

const Navigation = () => {
  const navigate = useNavigate();
  const { trigger } = useFormContext<OnboardingFormData>();

  const handleNext = async () => {
    const valid = await trigger(STEP2_FIELDS);
    if (valid) navigate("/onboard/benefits");
  };
  const handlePrev = async () => {
    navigate("/onboard/personal");
  };

  return (
    <div className="flex justify-between pt-4 border-t border-border">
      <button
        type="button"
        onClick={handlePrev}
        className="px-6 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
      >
        ← Back
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
      >
        Next: Benefits →
      </button>
    </div>
  );
};

export default StepTwo;
