# Plan: Refactor Feature Architecture — Separate Business Logic, UI, and Hooks

## Objective

Refactor the `features/` directory so that **business logic** is fully decoupled from **UI rendering**.
Each feature will contain a dedicated `hooks/` sub-folder housing custom hooks (e.g. `useProjects`, `useWork`).
Screens become thin, dumb renderers that only call hooks and pass state to components.
No logic (data selection, scroll state, hover state, status mapping) lives inside screen or component files.

This matches the architecture the user requested:
- `features/<feature>/hooks/use<Feature>.ts` — business/state logic
- `features/<feature>/screens/<Feature>Screen.tsx` — thin UI shell (calls hook, renders)
- `features/<feature>/components/` — presentational components receiving props

---

## Affected Files

| File | Change | Reason |
|------|--------|--------|
| `features/projects/hooks/useProjects.ts` | **create** | Extract hover state, project lookup, scroll mask logic from `ProjectsScreen` |
| `features/projects/hooks/useProjectDetail.ts` | **create** | Extract project-by-id lookup from `ProjectDetailScreen` |
| `features/projects/screens/ProjectsScreen.tsx` | **modify** | Replace inline logic with `useProjects()` hook call |
| `features/projects/screens/ProjectDetailScreen.tsx` | **modify** | Replace inline lookup with `useProjectDetail(id)` hook call |
| `features/projects/components/ProjectPreviewCard.tsx` | **modify** | Remove local router/translations; receive `onNavigate`/`statusLabel` as props, or keep self-contained (see note) |
| `features/work/hooks/useWork.ts` | **create** | Extract scroll mask logic from `WorkScreen` |
| `features/work/screens/WorkScreen.tsx` | **modify** | Replace inline scroll logic with `useWork()` hook call |
| `features/home/hooks/useHome.ts` | **create** | Wrap `useTranslations('home')` — keeps screen translation-free |
| `features/home/screens/HomeScreen.tsx` | **modify** | Replace `useTranslations` call with `useHome()` |
| `features/about/hooks/useAbout.ts` | **create** | Wrap `useTranslations('about')` |
| `features/about/screens/AboutScreen.tsx` | **modify** | Replace `useTranslations` call with `useAbout()` |
| `features/contact/hooks/useContact.ts` | **create** | Wrap `useTranslations('contact')` + expose `ContactType` values |
| `features/contact/screens/ContactScreen.tsx` | **modify** | Replace direct `ContactType` enum + `useTranslations` with `useContact()` |

---

## Implementation Steps

### Step 1 — Create `features/projects/hooks/useProjects.ts`

Extract from `ProjectsScreen`:
- `scrollRef` + `showTop` / `showBottom` scroll mask state + `useEffect` scroll listener
- `hoveredProject` state
- `handleHover(id)` function
- `statusDotColors` map
- `statusKey` + `statusLabel` derivation (requires `useTranslations`)

Return shape:
```ts
interface UseProjectsReturn {
  scrollRef: RefObject<HTMLDivElement>;
  showTop: boolean;
  showBottom: boolean;
  hoveredProject: ProjectType | null;
  handleHover: (id: string | null) => void;
  statusDotColors: Record<ProjectType['status'], string>;
  statusKey: string;
  statusLabel: string;
}
```

### Step 2 — Update `features/projects/screens/ProjectsScreen.tsx`

- Remove all local state/effect/logic
- Call `useProjects()` 
- Pass results to `<ProjectPreviewCard>` and `<ProjectItem>` as-is

### Step 3 — Update `features/projects/components/ProjectPreviewCard.tsx`

Currently self-contained (has its own `useRouter`, `useTranslations`). Keep `useTranslations` and `useRouter` inside the card for now — this component is already well-isolated.
Any remaining `statusDotColors`/`statusKey`/`statusLabel` inline logic in the card should remain in the component itself (it's component-internal, not screen logic).

### Step 4 — Create `features/projects/hooks/useProjectDetail.ts`

Extract from `ProjectDetailScreen`:
- `projects.find(p => p.id === id)` lookup + `notFound()` call
- `statusLabels` map
- `statusDotColors` map

Return shape:
```ts
interface UseProjectDetailReturn {
  project: ProjectType; // guaranteed non-null (calls notFound() if missing)
  statusLabel: string;
  statusDotColor: string;
}
```

### Step 5 — Update `features/projects/screens/ProjectDetailScreen.tsx`

- Remove `statusLabels`, `statusDotColors`, `projects.find(...)`, `notFound()` 
- Call `useProjectDetail(id)`
- Render returned values

### Step 6 — Create `features/work/hooks/useWork.ts`

Extract from `WorkScreen`:
- `scrollRef`, `showTop`, `showBottom`, scroll `useEffect`

Return shape:
```ts
interface UseWorkReturn {
  scrollRef: RefObject<HTMLDivElement>;
  showTop: boolean;
  showBottom: boolean;
  works: WorkType[];
}
```

Export `works` from the hook so the screen has a single import.

### Step 7 — Update `features/work/screens/WorkScreen.tsx`

- Remove all local state/effect/ref
- Call `useWork()`

### Step 8 — Create `features/home/hooks/useHome.ts`

Wrap `useTranslations('home')` and return a typed `t` function.
This is a thin wrapper — its value is in keeping the pattern consistent and making screens testable.

```ts
export const useHome = () => {
  const t = useTranslations('home');
  return { t };
};
```

### Step 9 — Update `features/home/screens/HomeScreen.tsx`

Replace `useTranslations('home')` with `const { t } = useHome()`.

### Step 10 — Create `features/about/hooks/useAbout.ts`

Same pattern as `useHome`:
```ts
export const useAbout = () => {
  const t = useTranslations('about');
  return { t };
};
```

### Step 11 — Update `features/about/screens/AboutScreen.tsx`

Replace `useTranslations('about')` with `const { t } = useAbout()`.

### Step 12 — Create `features/contact/hooks/useContact.ts`

```ts
export const useContact = () => {
  const t = useTranslations('contact');
  return {
    t,
    email: ContactType.Email,
    linkedin: ContactType.LinkedIn,
    github: ContactType.GitHub,
    instagram: ContactType.Instagram,
  };
};
```

### Step 13 — Update `features/contact/screens/ContactScreen.tsx`

Replace `useTranslations` + `ContactType` direct access with `const { t, email, linkedin, github, instagram } = useContact()`.

### Step 14 — Verify

```bash
npx tsc --noEmit
npm run lint
```

---

## Interface Changes

All changes are **non-breaking**:
- No public APIs change (screens are not consumed directly by other features)
- Hook return types are new — no existing code imports them
- `ProjectPreviewCard` props remain identical
- `ProjectItem` props remain identical

---

## Test Strategy

No test files exist in the project currently. Manual verification:
1. Run `npm run dev`, navigate to all routes: `/`, `/about`, `/work`, `/projects`, `/projects/[id]`, `/contact`
2. Verify scroll mask fade works on `/work` and `/projects`
3. Verify hover → preview card appears on `/projects`
4. Verify project detail page loads and shows correct status dot/label
5. Run `npx tsc --noEmit` — zero errors
6. Run `npm run lint` — zero errors

---

## Risks & Edge Cases

- **`notFound()` in hooks**: In Next.js App Router, `notFound()` throws internally. Calling it inside a hook is valid — Next.js will catch it. But the hook must be called from a component rendered in the app tree (not in a server action or outside React). This is already the case.
- **`'use client'` directive**: All hooks use `useState`, `useRef`, `useEffect`, `useTranslations`, `useRouter` — all client-only. Hooks don't carry the directive themselves; it must remain on the screen/component files that use them. No change needed.
- **Circular imports**: Hooks import from `projects.constants` and `projects.type` — no circular risk since those files have no upstream imports in the features layer.

---

## Out of Scope

- Adding state management libraries (Zustand, Jotai, Redux) — project doesn't need it
- Moving `ContactType` enum out of `contact.contants.ts` to a shared location
- Adding tests
- Refactoring `WorkDetail` component internals
- Renaming files with the `contants` typo (separate task)
