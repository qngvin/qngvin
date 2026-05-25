# Conventions

## Code & Naming Style
- **Naming Conventions**: React components use PascalCase (e.g. `HomeScreen.tsx`, `ActiveLink.tsx`). Screen modules are placed in `features/<domain>/screens/` and individual UI parts in `features/<domain>/components/` or `components/ui/`.
- **Known Typos/Consistency**:
  - `features/work/work.contants.ts` (Note typo: `contants` instead of `constants`).
  - `features/contact/screens/contact.contants.ts` (Note typo: `contants` instead of `constants`).
- **Unused Code**: `utils/age.ts` is currently defined but not referenced/called anywhere in the repository.

## Internationalization & Locales
- **Configuration**: Managed by `lib/i18n/config.ts`.
- **Supported Locales**: `en` and `vi`. Default is `en`.
- **Storage/Sync**: Locale cookie is stored in `NEXT_LOCALE`. `LanguageSwitcher.tsx` syncs this to `localStorage` and triggers a router refresh to re-fetch on the server.
- **Namespaces**: Message files are divided into domains: `about`, `auth`, `work`, `home`, `contact`, `common` and merged during request configuration inside `lib/i18n/request.ts`.

## UI Design & UX Paradigms
- **Splash/Loading Intro**: `PreviewWrapper.tsx` renders a text animation (`Preview.tsx`) fading out "tran quang vinh." letter-by-letter for 1.8 seconds on loading.
- **Active Route Representation**: `ActiveLink.tsx` overrides text displays in the header menu, swapping active menu labels with a single dot indicator (`GoDotFill`).
- **Animations**: Duration defaults to `1s` with `easeInOut` using Framer Motion for clean page transition sweeps.
- **Custom Background**: Client-side canvas-driven background `DottedGlowBackground.tsx` automatically scales with resolution, resolves light/dark theme variables, and observes mutations on class shifts.
- **Custom Fonts**: Loaded locally (`NeueMontreal` OTF fonts under `fonts/`) or Google Font (`Rubik`), configured in `app/fonts.ts` and set as CSS variables on layout body.
