import { createBrowserRouter, Navigate } from "react-router-dom";
import OnboardingLayout from "@/pages/onboard/layout";
import StepOne from "@/pages/onboard/StepOne";
import StepTwo from "@/pages/onboard/StepTwo";
import StepThree from "@/pages/onboard/StepThree";
import StepFour from "@/pages/onboard/StepFour";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/onboard",
    element: <OnboardingLayout />,
    children: [
      { index: true, element: <Navigate to="personal" replace /> },
      { path: "personal", element: <StepOne /> },
      { path: "employment", element: <StepTwo /> },
      { path: "benefits", element: <StepThree /> },
      { path: "review", element: <StepFour /> },
    ],
  },
]);
