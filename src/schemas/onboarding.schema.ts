import { z } from "zod";

export const GENDERS = ["MALE", "FEMALE", "PREFER_NOT_TO_SAY"] as const;
export const DEPARTMENTS = [
  "ENGINEERING",
  "PRODUCT",
  "DESIGN",
  "MARKETING",
  "SALES",
  "HR",
  "FINANCE",
  "OPERATIONS",
] as const;
export const EMPLOYMENT_TYPES = [
  "FULL_TIME",
  "PART_TIME",
  "CONTRACT",
  "INTERNSHIP",
] as const;
export const WORK_LOCATIONS = ["REMOTE", "ONSITE", "HYBRID"] as const;
export const HEALTH_PLANS = ["BASIC", "STANDARD", "PREMIUM"] as const;
export const DENTAL_COVERAGE = ["NONE", "BASIC", "PREMIUM"] as const;
export const VISION_COVERAGE = ["NONE", "BASIC", "PREMIUM"] as const;
export const EQUIPMENT_PREFERENCES = ["MACBOOK", "WINDOWS", "LINUX"] as const;
export const WORK_FROM_HOME_ALLOWANCE = ["0", "500", "1000", "1500"] as const;

export const schema = z.object({
  // Step 1 - Personal Details
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const parsedDate = Date.parse(date);
      return !isNaN(parsedDate) && parsedDate < Date.now();
    }, "Date of birth must be a valid date in the past"),
  email: z
    .string()
    .min(1, "Email is required")
    .check(z.email("Invalid email address")),
  phone: z.string().regex(/^\+?[\d\s\-().]{7,20}$/, "Invalid phone number"),
  gender: z.enum(GENDERS),

  // Step 2 - Employment Details
  department: z.enum(DEPARTMENTS),
  jobTitle: z.string().min(1, "Job title is required").max(50),
  startDate: z.string().min(1, "Start date is required"),
  employmentType: z.enum(EMPLOYMENT_TYPES),
  workLocation: z.enum(WORK_LOCATIONS),

  // Step 3 - Benefits Selection
  healthPlan: z.enum(HEALTH_PLANS),
  dentalCoverage: z.enum(DENTAL_COVERAGE),
  visionCoverage: z.enum(VISION_COVERAGE),
  retirementContribution: z.number().min(0, "Min 0%").max(15, "Max 15%"),
  workFromHomeAllowance: z.enum(WORK_FROM_HOME_ALLOWANCE),
  phoneAllowance: z.boolean(),
  equipmentPreference: z.enum(EQUIPMENT_PREFERENCES),
  mealSubsidy: z.boolean(),
  parkingRequired: z.boolean(),
  parkingSpot: z.string().max(20).optional(),
});
// .superRefine((data, ctx) => { for conditionally required fields like parkingSpot })

export type OnboardingFormData = z.infer<typeof schema>;

export const STEP1_FIELDS: Array<keyof OnboardingFormData> = [
  "firstName",
  "lastName",
  "dateOfBirth",
  "gender",
  "email",
  "phone",
];

export const STEP2_FIELDS: Array<keyof OnboardingFormData> = [
  "department",
  "jobTitle",
  "startDate",
  "employmentType",
  "workLocation",
];

export const STEP3_FIELDS: Array<keyof OnboardingFormData> = [
  "healthPlan",
  "dentalCoverage",
  "visionCoverage",
  "retirementContribution",
  "workFromHomeAllowance",
  "phoneAllowance",
  "equipmentPreference",
  "mealSubsidy",
  "parkingRequired",
  "parkingSpot",
];
