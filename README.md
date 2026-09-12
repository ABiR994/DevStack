<div align="center">

# 🧱 Dev Stack

### Build your ideal development stack, one technology at a time.

A responsive technology explorer built with React, TypeScript, and Tailwind CSS.
Browse popular frontend, backend, database, and tooling options, then add the ones you like to your own personal stack.

<br />

<a href="https://dev-stack-nu.vercel.app/">
  <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
</a>
<a href="https://github.com/ABiR994/DevStack">
  <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
</a>

<br />
<br />

<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/DaisyUI-5-1AD1A5?style=flat-square" alt="DaisyUI" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/React_Toastify-Notifications-FF6B6B?style=flat-square" alt="React Toastify" />

</div>

---

## 📖 About the Project

**Dev Stack** helps developers explore modern web technologies without digging through scattered blog posts and docs. Every technology (frontend, backend, database, language, styling, DevOps, or tooling) is shown as a clean card with its rating, difficulty level, and a short description.

Instead of just browsing, users can build something: clicking **Add to Stack** collects a technology into a personal "Your Stack" panel, so by the end of a session they've put together a concrete list of tools for their next project.

---

## 🔗 Links

- **Live Site:** [dev-stack-nu.vercel.app](https://dev-stack-nu.vercel.app/)
- **Repository:** [github.com/ABiR994/DevStack](https://github.com/ABiR994/DevStack)

---

## ✨ Key Features

### 🧭 Explore Technologies
A responsive grid of technology cards (1 column on mobile, 2 on tablet, 3 on desktop) each showing an icon, category badge, difficulty level, star rating, and description pulled from a local JSON file.

### 🧰 Build Your Stack
Add any technology to a personal "Your Stack" sidebar with one click. Duplicate adds are blocked with a warning toast, added cards flip to a disabled "✓ Added to Stack" state, and items can be removed individually or all at once.

### 🔔 Instant Feedback
Every stack action (add, duplicate attempt, remove, remove all) triggers a **React-Toastify** notification, so the interface never leaves the user guessing whether something worked.

### 📱 Fully Responsive
The navbar collapses into a hamburger menu with a centered logo on mobile, the hero and footer reflow into stacked, centered layouts, and the technology grid adapts its column count at each breakpoint.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| ⚛️ React | Component-based UI |
| 🔷 TypeScript | Type-safe props, state, and data models |
| 🎨 Tailwind CSS v4 | Utility-first styling |
| 🌼 DaisyUI | Loading spinner |
| ⚡ Vite | Dev server and build tool |
| 🔔 React-Toastify | Toast notifications for stack actions |
| 🖼️ React Icons | Hamburger menu, close, and star icons |
| 📄 JSON | Technology data source |

---

## 📂 Project Structure

```text
dev-stack/
├── public/
│   └── technologies.json      # technology data
│
├── src/
│   ├── assets/                 # logo and hero section images
│   ├── components/
│   │   ├── Navbar.tsx           # navbar(desktop) and hamburger menu(mobile)
│   │   ├── Hero.tsx             # hero section with a stack image and buttons
│   │   ├── Technologies.tsx     # fetches data, owns stack state, renders grid + sidebar
│   │   ├── TechCard.tsx         # single technology card
│   │   ├── YourStack.tsx        # sidebar: selected stack, remove or remove all
│   │   └── Footer.tsx           # footer section with logo and links
│   ├── types/
│   │   └── technology.ts        # Technology, TechCategory, TechDifficulty types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                # Tailwind + DaisyUI imports + shared brand gradient
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/ABiR994/DevStack.git
cd DevStack
npm install
npm run dev
```

Open the local URL shown in your terminal.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🧠 React Concepts

### 1. What is JSX, and why is it used in React?
JSX lets you write HTML-like markup directly inside JavaScript/TypeScript files. It's used because it makes component structure easy to read and keeps the UI and the logic that drives it in one place, instead of switching between separate template and script files.

### 2. What is the difference between props and state?
Props are data passed into a component from its parent — the component receiving them can't change them. State is data a component manages itself and can update over time. In this project, `TechCard` receives `technology`, `isAdded`, and `onAdd` as props from `Technologies`, while `Technologies` itself holds the `stack` array in its own state.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a component hold a value that can change and re-render the UI when it does. I used it in `Technologies.tsx` to track the fetched `technologies` list, the `stack` of selected items, and the `isLoading` flag, and in `Navbar.tsx` to track whether the mobile menu is open.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects — code that reaches outside the component, like a network request — after the component renders. Fetching is asynchronous and shouldn't run during render itself, so I used `useEffect` with an empty dependency array in `Technologies.tsx` to fetch `technologies.json` exactly once when the component first mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the `key` to tell items apart between renders, so it knows which items were added, removed, or reordered instead of re-rendering the entire list from scratch. Without a stable key, React can mix up which DOM node belongs to which piece of data. I used each technology's `id` as the key for `TechCard` and `YourStack` list items.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. I used it in `YourStack.tsx` to show a dashed "Your stack is empty." placeholder when there are no items, and the actual list of stack items once there are:

```tsx
{isEmpty ? (
  <div className="rounded-lg border border-dashed border-gray-200 py-8 text-center text-sm text-gray-400">
    Your stack is empty.
  </div>
) : (
  <ul className="flex flex-col gap-3">
    {stack.map((technology) => (
      <li key={technology.id}>...</li>
    ))}
  </ul>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data down to a child as props. To send something back up, the parent passes a function down as a prop, and the child calls that function when something happens. In this project, `Technologies` passes `onAdd={handleAddToStack}` down to each `TechCard`; when the user clicks "Add to Stack", the card calls `onAdd(technology)`, which runs `handleAddToStack` back in the parent and updates the `stack` state there.

---

## 👨‍💻 Author

**Salem Nur Abir**

<a href="https://github.com/ABiR994">
  <img src="https://img.shields.io/badge/GitHub-ABiR994-181717?style=for-the-badge&logo=github" alt="GitHub" />
</a>
