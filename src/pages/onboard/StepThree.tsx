import {
  DENTAL_COVERAGE,
  EQUIPMENT_PREFERENCES,
  HEALTH_PLANS,
  STEP3_FIELDS,
  VISION_COVERAGE,
  WORK_FROM_HOME_ALLOWANCE,
  type OnboardingFormData,
} from "@/schemas/onboarding.schema";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Field, inputCls, inputErrorCls } from "@/components/ui/Field";
import { useNavigate } from "react-router-dom";

function StepThree() {
  const {
    formState: { errors },
    register,
    watch,
  } = useFormContext<OnboardingFormData>();

  const contribution = watch("retirementContribution");
  const parkingReq = watch("parkingRequired");

  return (
    <div className="space-y-8">
      <Header />
      {/* Health Coverage */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Insurance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            name="healthPlan"
            label="Health Plan"
            error={errors.healthPlan}
            required
          >
            <select
              id="healthPlan"
              className={cn(inputCls, errors.healthPlan && inputErrorCls)}
              {...register("healthPlan")}
            >
              {HEALTH_PLANS.map((plan) => {
                return (
                  <option key={plan} value={plan}>
                    {plan.replace(/_/g, " ")}
                  </option>
                );
              })}
            </select>
          </Field>
          <Field
            name="dentalCoverage"
            label="Dental Coverage"
            error={errors.dentalCoverage}
            required
          >
            <select
              id="dentalCoverage"
              className={cn(inputCls, errors.dentalCoverage && inputErrorCls)}
              {...register("dentalCoverage")}
            >
              {DENTAL_COVERAGE.map((coverage) => (
                <option key={coverage} value={coverage}>
                  {coverage.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </Field>
          <Field
            name="visionCoverage"
            label="Vision Coverage"
            error={errors.visionCoverage}
            required
          >
            <select
              id="visionCoverage"
              className={cn(inputCls, errors.visionCoverage && inputErrorCls)}
              {...register("visionCoverage")}
            >
              {VISION_COVERAGE.map((coverage) => (
                <option key={coverage} value={coverage}>
                  {coverage.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </section>
      {/* Financial Perks */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Financial Perks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            name="retirementContribution"
            label={`Retirement Contribution (${contribution}%)`}
            error={errors.retirementContribution}
            hint="0–15% of gross salary"
            required
          >
            <input
              id="retirementContribution"
              type="range"
              min={0}
              max={15}
              step={1}
              {...register("retirementContribution", { valueAsNumber: true })}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0%</span>
              <span>15%</span>
            </div>
          </Field>

          <Field
            name="workFromHomeAllowance"
            label="Work-from-Home Allowance"
            error={errors.workFromHomeAllowance}
            required
          >
            <select
              id="workFromHomeAllowance"
              className={cn(
                inputCls,
                errors.workFromHomeAllowance && inputErrorCls,
              )}
              {...register("workFromHomeAllowance")}
            >
              {WORK_FROM_HOME_ALLOWANCE.map((allowance) => (
                <option key={allowance} value={allowance}>
                  {allowance.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </Field>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              id="phoneAllowance "
              type="checkbox"
              {...register("phoneAllowance")}
              className="w-4 h-4 rounded border-input accent-primary"
            />
            <span className="text-sm text-foreground">Phone Allowance</span>
          </label>
        </div>
      </section>

      {/* Equipment & Office */}
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
        Equipment & Office
      </h3>
      <Field
        name="equipmentPreference"
        label="Equipment Preference"
        error={errors.equipmentPreference}
        required
      >
        <div className="flex gap-4 mt-1">
          {EQUIPMENT_PREFERENCES.map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                {...register("equipmentPreference")}
                value={m}
                className="accent-primary"
              />
              <span className="text-sm text-foreground">{m}</span>
            </label>
          ))}
        </div>
      </Field>
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          id="mealSubsidy "
          type="checkbox"
          {...register("mealSubsidy")}
          className="w-4 h-4 rounded border-input accent-primary"
        />
        <span className="text-sm text-foreground">Meal Subsidy</span>
      </label>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          id="parkingRequired"
          type="checkbox"
          {...register("parkingRequired")}
          className="w-4 h-4 rounded border-input accent-primary"
        />
        <span className="text-sm text-foreground">Parking Required</span>
      </label>

      {parkingReq && (
        <Field
          name="parkingSpot"
          label="Parking Spot Preference"
          error={errors.parkingSpot}
          hint="e.g. Covered, Ground floor, Near entrance"
          required
        >
          <input
            id="parkingSpot"
            {...register("parkingSpot")}
            className={cn(inputCls, errors.parkingSpot && inputErrorCls)}
            placeholder="Covered parking preferred"
          />
        </Field>
      )}
      <Navigation />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground">
        Benefits & Perks
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Customise your benefits package
      </p>
    </div>
  );
};

const Navigation = () => {
  const navigate = useNavigate();
  const { trigger } = useFormContext<OnboardingFormData>();

  const handleNext = async () => {
    const valid = await trigger(STEP3_FIELDS);
    if (valid) navigate("/onboard/review");
  };
  const handlePrev = async () => {
    navigate("/onboard/employment");
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

export default StepThree;
