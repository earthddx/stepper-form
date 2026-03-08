import {
  GENDERS,
  STEP1_FIELDS,
  type OnboardingFormData,
} from "@/schemas/onboarding.schema";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Field, inputCls, inputErrorCls } from "@/components/ui/Field";
import { useNavigate } from "react-router-dom";

function StepOne() {
  const {
    formState: { errors },
    register,
  } = useFormContext<OnboardingFormData>();

  return (
    <div className="space-y-8">
      <Header />
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Basic Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            name="firstName"
            label="First Name"
            error={errors.firstName}
            required
          >
            <input
              id="firstName"
              placeholder="Jane"
              className={cn(inputCls, errors.firstName && inputErrorCls)}
              {...register("firstName")}
            />
          </Field>
          <Field
            name="lastName"
            label="Last Name"
            error={errors.lastName}
            required
          >
            <input
              id="lastName"
              placeholder="Smith"
              className={cn(inputCls, errors.lastName && inputErrorCls)}
              {...register("lastName")}
            />
          </Field>
          <Field
            name="dateOfBirth"
            label="Date of Birth"
            error={errors.dateOfBirth}
            required
          >
            <input
              id="dateOfBirth"
              type="date"
              className={cn(inputCls, errors.dateOfBirth && inputErrorCls)}
              {...register("dateOfBirth")}
            />
          </Field>
          <Field name="gender" label="Gender" error={errors.gender} required>
            <select
              id="gender"
              className={cn(inputCls, errors.gender && inputErrorCls)}
              {...register("gender")}
            >
              {GENDERS.map((gender) => {
                return (
                  <option key={gender} value={gender}>
                    {gender.replace(/_/g, " ")}
                  </option>
                );
              })}
            </select>
          </Field>
          <Field name="email" label="Work Email" error={errors.email} required>
            <input
              id="email"
              type="email"
              placeholder="jane.smith@example.com"
              className={cn(inputCls, errors.email && inputErrorCls)}
              {...register("email")}
            />
          </Field>
          <Field
            name="phone"
            label="Phone Number"
            error={errors.phone}
            hint="Include country code, e.g. +1 555 123 4567"
            required
          >
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className={cn(inputCls, errors.phone && inputErrorCls)}
              {...register("phone")}
            />
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
        Personal Information
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Fields marked * are required
      </p>
    </div>
  );
};

const Navigation = () => {
  const navigate = useNavigate();
  const { trigger } = useFormContext<OnboardingFormData>();

  const handleNext = async () => {
    const valid = await trigger(STEP1_FIELDS);
    if (valid) navigate("/onboard/employment");
  };

  return (
    <div className="flex justify-end pt-4 border-t border-border">
      <button
        type="button"
        onClick={handleNext}
        className="px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
      >
        Next: Employment →
      </button>
    </div>
  );
};

export default StepOne;
