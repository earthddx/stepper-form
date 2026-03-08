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
});

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
