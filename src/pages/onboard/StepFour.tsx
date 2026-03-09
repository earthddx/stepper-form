import { Field, inputCls, inputErrorCls } from "@/components/ui/Field";
import Row from "@/components/ui/Row";
import { useSubmitApplication } from "@/hooks/useSubmitApplication";
import { cn } from "@/lib/utils";
import {
  STEP1_FIELDS,
  STEP2_FIELDS,
  STEP3_FIELDS,
  STEP4_FIELDS,
  type OnboardingFormData,
} from "@/schemas/onboarding.schema";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function StepFour() {
  const { getValues } = useFormContext<OnboardingFormData>();

  const data = getValues();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Review & Submit
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Please review your information before submitting
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Personal data={data} />
        <Employment data={data} />
        <Benefits data={data} />
      </div>
      <Agreement />
      <Navigation />
    </div>
  );
}

export default StepFour;

const Agreement = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useFormContext<OnboardingFormData>();

  const { mutate, isPending } = useSubmitApplication();
  const navigate = useNavigate();

  const navigateToFirstError = (errorKeys: string[]) => {
    if (STEP1_FIELDS.some((f) => errorKeys.includes(f))) {
      navigate("/onboard/personal");
    } else if (STEP2_FIELDS.some((f) => errorKeys.includes(f))) {
      navigate("/onboard/employment");
    } else if (STEP3_FIELDS.some((f) => errorKeys.includes(f))) {
      navigate("/onboard/benefits");
    }
  };

  const onSubmit = handleSubmit(
    (formData) => {
      console.log(formData);
      mutate(formData, {
        onSuccess: () => {
          alert("Application submitted successfully!");
          navigate("/home");
        },
        onError: (error) => {
          alert("Failed to submit application. Please try again.");
          console.error(error);
          // setError("root", {
          //   type: "server",
          //   message: "Submission failed. Please try again.",
          // });
          navigateToFirstError(Object.keys(errors));
        },
      });
    },
    (errors) => {
      console.error(errors);
    },
  );

  return (
    <form id="agreement-form" onSubmit={onSubmit} className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Agreement</h3>
      <Field name="agreeToTerms" label="" error={errors.agreeToTerms}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("agreeToTerms")}
            className={cn(
              "mt-0.5 w-4 h-4 accent-primary",
              errors.agreeToTerms && "ring-1 ring-destructive",
            )}
          />
          <span className="text-sm text-foreground">
            I agree to the{" "}
            <span className="text-primary underline cursor-pointer">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="text-primary underline cursor-pointer">
              Employee Handbook
            </span>
          </span>
        </label>
      </Field>
      <Field
        name="agreeToBackgroundCheck"
        label=""
        error={errors.agreeToBackgroundCheck}
      >
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("agreeToBackgroundCheck")}
            className={cn(
              "mt-0.5 w-4 h-4 accent-primary",
              errors.agreeToBackgroundCheck && "ring-1 ring-destructive",
            )}
          />
          <span className="text-sm text-foreground">
            I consent to a background and reference check as part of the
            onboarding process
          </span>
        </label>
      </Field>
      <Field
        name="signature"
        label="Digital Signature"
        error={errors.signature}
        hint="Type your full legal name to sign"
        required
      >
        <input
          id="signature"
          {...register("signature")}
          className={cn(
            inputCls,
            errors.signature && inputErrorCls,
            "font-handwriting italic",
          )}
          placeholder="Jane Elizabeth Smith"
        />
      </Field>
    </form>
  );
};

const Personal = ({ data }: { data: OnboardingFormData }) => {
  return (
    <div className="bg-muted rounded-lg p-4">
      <h3 className="text-sm font-semibold text-foreground mb-3">Personal</h3>
      <Row label="Name" value={`${data.firstName} ${data.lastName}`} />
      <Row label="Date of Birth" value={data.dateOfBirth} />
      <Row label="Gender" value={data.gender} />
      <Row label="Email" value={data.email} />
      <Row label="Phone" value={data.phone} />
      <Row
        label="Address"
        value={`${data.address?.city}, ${data.address?.country}`}
      />
    </div>
  );
};
const Employment = ({ data }: { data: OnboardingFormData }) => {
  return (
    <div className="bg-muted rounded-lg p-4">
      <h3 className="text-sm font-semibold text-foreground mb-3">Employment</h3>
      <Row label="Department" value={data.department} />
      <Row label="Job Title" value={data.jobTitle} />
      <Row label="Start Date" value={data.startDate} />
      <Row label="Employment Type" value={data.employmentType} />
      <Row label="Work Location" value={data.workLocation} />
    </div>
  );
};
const Benefits = ({ data }: { data: OnboardingFormData }) => {
  return (
    <div className="bg-muted rounded-lg p-4">
      <h3 className="text-sm font-semibold text-foreground mb-3">Benefits</h3>
      <Row label="Health Plan" value={data.healthPlan} />
      <Row label="Dental" value={data.dentalCoverage} />
      <Row label="Vision" value={data.visionCoverage} />
      <Row
        label="Retirement Contribution"
        value={
          data.retirementContribution
            ? `${data.retirementContribution}%`
            : undefined
        }
      />
      <Row label="Equipment" value={data.equipmentPreference} />
      <Row label="WFH Allowance" value={data.workFromHomeAllowance} />
    </div>
  );
};

const Navigation = () => {
  const navigate = useNavigate();

  const handlePrev = async () => {
    navigate("/onboard/benefits");
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
        form="agreement-form"
        type="submit"
        className="px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {"Submit Application"}
      </button>
    </div>
  );
};
