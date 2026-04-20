---
name: ui
description: "Skill for the Ui area of qngvin. 9 symbols across 1 files."
---

# Ui

9 symbols | 1 files | Cohesion: 89%

## When to Use

- Working with code in `components/`
- Understanding how DottedGlowBackground, resize, regenDots work
- Modifying ui-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `components/ui/dotted-glow-background.tsx` | DottedGlowBackground, resize, regenDots, regenThrottled, handleResize (+4) |

## Entry Points

Start here when exploring this area:

- **`DottedGlowBackground`** (Function) — `components/ui/dotted-glow-background.tsx:44`
- **`resize`** (Function) — `components/ui/dotted-glow-background.tsx:163`
- **`regenDots`** (Function) — `components/ui/dotted-glow-background.tsx:179`
- **`regenThrottled`** (Function) — `components/ui/dotted-glow-background.tsx:199`
- **`handleResize`** (Function) — `components/ui/dotted-glow-background.tsx:267`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `DottedGlowBackground` | Function | `components/ui/dotted-glow-background.tsx` | 44 |
| `resize` | Function | `components/ui/dotted-glow-background.tsx` | 163 |
| `regenDots` | Function | `components/ui/dotted-glow-background.tsx` | 179 |
| `regenThrottled` | Function | `components/ui/dotted-glow-background.tsx` | 199 |
| `handleResize` | Function | `components/ui/dotted-glow-background.tsx` | 267 |
| `resolveCssVariable` | Function | `components/ui/dotted-glow-background.tsx` | 68 |
| `detectDarkMode` | Function | `components/ui/dotted-glow-background.tsx` | 85 |
| `compute` | Function | `components/ui/dotted-glow-background.tsx` | 99 |
| `handleMql` | Function | `components/ui/dotted-glow-background.tsx` | 126 |

## Execution Flows

| Flow | Type | Steps |
|------|------|-------|
| `DottedGlowBackground → DetectDarkMode` | cross_community | 3 |
| `DottedGlowBackground → ResolveCssVariable` | cross_community | 3 |
| `HandleResize → RegenDots` | intra_community | 3 |
| `HandleMql → DetectDarkMode` | intra_community | 3 |
| `HandleMql → ResolveCssVariable` | intra_community | 3 |

## How to Explore

1. `gitnexus_context({name: "DottedGlowBackground"})` — see callers and callees
2. `gitnexus_query({query: "ui"})` — find related execution flows
3. Read key files listed above for implementation details
