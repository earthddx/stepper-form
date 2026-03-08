import Stepper from "@/components/ui/Stepper";
import { Link, Outlet } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type OnboardingFormData } from "@/schemas/onboarding.schema";

function layout() {
  const form = useForm<OnboardingFormData>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <Link
          to="/home"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="text-base font-semibold text-foreground">
          Employee Onboarding
        </h1>
        <div className="w-24" /> {/* spacer */}
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <Stepper />
        <FormProvider {...form}>
          <Outlet />
        </FormProvider>
      </main>
    </div>
  );
}

export default layout;
