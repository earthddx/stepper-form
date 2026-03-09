import type { OnboardingFormData } from "@/schemas/onboarding.schema";

type Application = OnboardingFormData & {
  id: number;
  createdAt: string;
};

const db: Application[] = [];
let nextId = db.length + 1;

export const api = {
  fetchApplications: (): Promise<Application[]> =>
    new Promise((res) => setTimeout(() => res([...db]), 500)),

  submit: (data: OnboardingFormData): Promise<Application> =>
    new Promise((res) =>
      setTimeout(() => {
        const application = {
          ...data,
          id: nextId++,
          createdAt: new Date().toISOString(),
        };
        db.push(application);
        res(application);
      }, 700),
    ),
};
