import { z } from "zod";

export const GENDERS = ["MALE", "FEMALE", "PREFER_NOT_TO_SAY"] as const;

export const schema = z.object({
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
