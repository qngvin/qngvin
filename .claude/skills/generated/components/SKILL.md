---
name: components
description: "Skill for the Components area of qngvin. 6 symbols across 4 files."
---

# Components

6 symbols | 4 files | Cohesion: 100%

## When to Use

- Working with code in `components/`
- Understanding how formatMonthYear, WorkDetail, handleLocaleChange work
- Modifying components-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `components/LanguageSwitcher.tsx` | setLocaleCookie, handleLocaleChange |
| `shared/components/Livetime.tsx` | Livetime, updateTime |
| `utils/date.ts` | formatMonthYear |
| `features/work/components/WorkDetail.tsx` | WorkDetail |

## Entry Points

Start here when exploring this area:

- **`formatMonthYear`** (Function) — `utils/date.ts:1`
- **`WorkDetail`** (Function) — `features/work/components/WorkDetail.tsx:4`
- **`handleLocaleChange`** (Function) — `components/LanguageSwitcher.tsx:30`
- **`Livetime`** (Function) — `shared/components/Livetime.tsx:3`
- **`updateTime`** (Function) — `shared/components/Livetime.tsx:8`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `formatMonthYear` | Function | `utils/date.ts` | 1 |
| `WorkDetail` | Function | `features/work/components/WorkDetail.tsx` | 4 |
| `handleLocaleChange` | Function | `components/LanguageSwitcher.tsx` | 30 |
| `Livetime` | Function | `shared/components/Livetime.tsx` | 3 |
| `updateTime` | Function | `shared/components/Livetime.tsx` | 8 |
| `setLocaleCookie` | Function | `components/LanguageSwitcher.tsx` | 13 |

## How to Explore

1. `gitnexus_context({name: "formatMonthYear"})` — see callers and callees
2. `gitnexus_query({query: "components"})` — find related execution flows
3. Read key files listed above for implementation details
