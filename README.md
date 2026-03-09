# Multi-step Onboarding Form

A four-step employee onboarding form built as a learning project to explore how React Router, React Hook Form, Zod, and TanStack Query work together in a real-world flow.

**Live demo:** https://earthddx.github.io/stepper-form/

## What it covers

- **30 fields** across a single Zod schema, validated per-step
- Form state shared across all steps via `FormProvider` — navigating back restores exactly what was typed
- Per-step validation using `trigger(STEP_FIELDS)` before advancing
- Final submission via `useMutation`, with the submissions list auto-refreshed via `invalidateQueries`

## Steps

| # | Step | Fields |
|---|------|--------|
| 1 | Personal | Name, DOB, gender, email, phone, home address (6 + 5 sub-fields) |
| 2 | Employment | Department, job title, start date, employment type, work location |
| 3 | Benefits | Health/dental/vision plans, life insurance, retirement %, equipment, WFH allowance, meal subsidy, phone allowance, parking |
| 4 | Review & Submit | Data summary, terms agreement, background check consent, digital signature |

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** + **shadcn/ui**
- **React Hook Form** — `FormProvider` + `useFormContext` for cross-step state
- **Zod v4** — single schema with per-step `trigger()` validation
- **TanStack Query** — `useMutation` for submission, `invalidateQueries` for live list refresh
- **React Router v7** — nested routes under `/onboard`, shared layout with progress stepper

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Builds and pushes to the `gh-pages` branch via `gh-pages`.
