# RHF + Zod + TanStack Query

A minimal learning sandbox that wires **React Hook Form**, **Zod**, and **TanStack Query** together in one feature — so the data flow between them is explicit and easy to follow.

## What this project is for

Most tutorials cover each library in isolation. This project connects all three in a single posts feature so you can see exactly how they interact:

> Zod owns the schema → RHF runs Zod on submit → TanStack Query updates the cache after a successful mutation

## Stack

| Library | Role |
|---|---|
| React Hook Form | Manages form state without `useState`. `register()` wires uncontrolled inputs; `handleSubmit()` runs validation before calling your function. |
| Zod | Defines field types, constraints, and error messages as a schema. `z.infer<>` derives the TypeScript type for free. |
| TanStack Query | Handles server state. `useQuery` fetches and caches the list. `useMutation` + `setQueryData` updates the cache instantly after a form submit — no extra fetch needed. |
| React Router | Simple two-page setup: Dashboard (intro) and Playground (the demo). |
| Tailwind CSS v4 | Utility-first styling with shadcn design tokens. |

## Project structure

```
src/
├── pages/
│   ├── Dashboard.tsx          # Intro page explaining the project
│   └── Playground.tsx         # Main demo page
│
├── features/
│   ├── posts/
│   │   ├── types.ts           # Post, PostFormData types
│   │   ├── schema.ts          # postSchema, CATEGORIES
│   │   ├── api.ts             # Mock API (in-memory db)
│   │   └── components/
│   │       ├── Header.tsx
│   │       ├── PostForm.tsx   # RHF + Zod + useMutation
│   │       ├── PostList.tsx   # useQuery
│   │       ├── PostItem.tsx
│   │       └── CheatSheet.tsx
│   └── dashboard/
│       └── components/
│           ├── Hero.tsx
│           ├── Why.tsx
│           ├── StackCards.tsx
│           └── CTA.tsx
│
├── router/
│   └── index.tsx
└── lib/
    └── utils.ts
```

## Key concepts demonstrated

**Uncontrolled inputs with RHF**
`register('field')` returns `{ name, ref, onChange, onBlur }`. Spreading it onto an input makes it uncontrolled — no `useState`, no re-render on every keystroke.

**Zod as the single validation source**
`zodResolver(postSchema)` plugs Zod into RHF. Errors from `formState.errors` come directly from the Zod schema. `noValidate` on the form disables the browser's native validation so both systems don't conflict.

**Two error surfaces**
- `formState.errors` — Zod validation errors, fire before the mutation is called
- `useMutation` `isError` / `error` — network/server errors, fire when the request fails

**Cache update without refetching**
After a successful post creation, `setQueryData` appends the new post directly to the cached list. No extra network round-trip, no loading flicker. `invalidateQueries` would be the right choice if the server applies logic you can't replicate client-side.

## Getting started

```bash
npm install
npm run dev
```
