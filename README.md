# Component Library Showcase

A **reusable web component library** — a mini design system with consistent colors, typography, spacing, and UI components built with **React + Vite + TypeScript**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the showcase.

## Build

```bash
npm run build
```

## Components

| Component | Description |
|-----------|-------------|
| **Button** | Variants: Primary, Secondary, Outline, Ghost, Danger. Sizes: sm, md, lg. States: loading, disabled, icon-only |
| **Input** | Text, email, password. States: default, focus, error, disabled. Sizes: sm, md, lg |
| **Dropdown** | Single select with placeholder, disabled state |
| **Checkbox** | Unchecked, checked, indeterminate, disabled |
| **Radio** | Radio group with options |
| **Table** | Header + body, striped, compact, sticky header |
| **Card** | Default, bordered, elevated. Optional header/footer |
| **Badge** | Primary, Success, Warning, Error, Neutral. Sizes: sm, md |
| **Alert** | Info, Success, Warning, Error. Optional dismiss |
| **Modal** | Overlay, title, body, footer. Close via button, overlay, Escape |
| **Tabs** | Horizontal tabs with panels |
| **Tooltip** | Top, bottom, left, right |
| **ScrollArea** | Custom scrollbar, configurable max height |
| **Calendar** | One month view, current day highlighted, selectable |
| **Spinner** | Loading spinner. Sizes: sm, md, lg |
| **Pagination** | Previous, page numbers, Next. Disabled states |

## Foundation

- **Colors**: Primary, Secondary, Success, Warning, Error, Neutral (CSS variables)
- **Typography**: Instrument Serif (headings), DM Sans (body). Sizes: xs, sm, base, lg, xl, 2xl, 3xl
- **Spacing**: 4, 8, 12, 16, 24, 32, 48px
- **Border radius**: sm (4px), md (8px), lg (16px)
- **Dark mode**: Supported via `data-theme="dark"` on root

## Project Structure

```
src/
  components/
    Button/
    Input/
    Dropdown/
    Checkbox/
    Radio/
    Table/
    Card/
    Badge/
    Alert/
    Modal/
    Tabs/
    Tooltip/
    ScrollArea/
    Calendar/
    Spinner/
    Pagination/
  styles/
    foundation.css   # Design tokens
    global.css
  App.tsx            # Showcase page
  main.tsx
```

## Tech Stack

- React 18
- Vite 5
- TypeScript
- CSS Modules

## Accessibility

- Keyboard focusable elements with visible focus styles
- Labels associated with inputs
- ARIA attributes for dropdown, modal, tabs
- Escape to close modal
