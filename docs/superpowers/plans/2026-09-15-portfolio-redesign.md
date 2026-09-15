# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing portfolio as a responsive, bilingual, light/dark professional Fullstack portfolio with a restrained retro-computing identity.

**Architecture:** Keep Next.js App Router and centralize all editable copy in a bilingual content module consumed through a client-side language provider. Build a small shared UI system around CSS tokens, window frames, navigation, cards, and form states; each route then composes those focused primitives without duplicating layout or content logic.

**Tech Stack:** Next.js 15, React 18, JavaScript/JSX, Tailwind CSS 3, CSS custom properties, Radix Dialog, Lucide React, Vitest, Testing Library, jsdom.

**Spec:** `docs/superpowers/specs/2026-09-15-portfolio-redesign-design.md`

## Global Constraints

- Keep the routes `/`, `/trajectory`, `/skills`, `/projects`, and `/contact`; do not add localized routes.
- Do not add a footer, theme toggle, project detail pages, blog, CMS, or functional window controls.
- Never invent professional facts, impact metrics, or project results; migrate existing facts as draft content and keep them easy for Luana to replace.
- Use automatic `prefers-color-scheme` themes and automatic `prefers-reduced-motion` behavior.
- PT/EN must work on every route, persist in `localStorage`, update `<html lang>`, and default to browser language with Portuguese fallback.
- Use sans-serif for reading and monospace only for interface labels, metadata, navigation, and terminal content.
- Decorative window controls must be absent from the accessibility tree and keyboard order.
- Build mobile-first; the home window stack must not overlap on mobile.
- Implement motion with CSS and remove Framer Motion, Swiper, and react-countup.
- The assistant must not commit. At every commit checkpoint, pause and ask Luana to run the listed commit commands.
- Never stage or commit `.superpowers/` or agent instruction files.

---

## Target File Structure

```text
src/
  app/
    contact/page.jsx
    projects/page.jsx
    skills/page.jsx
    trajectory/page.jsx
    globals.css
    layout.jsx
    page.jsx
  components/
    contact/ContactForm.jsx
    home/DesktopScene.jsx
    layout/Header.jsx
    layout/LanguageSwitch.jsx
    layout/MobileMenu.jsx
    projects/ProjectCard.jsx
    skills/SkillGroup.jsx
    trajectory/Timeline.jsx
    ui/ExternalLink.jsx
    ui/PageIntro.jsx
    ui/WindowControls.jsx
    ui/WindowFrame.jsx
  content/portfolio.js
  i18n/LanguageProvider.jsx
  i18n/usePortfolio.js
  services/contact.js
  test/setup.js
vitest.config.mjs
```

Every feature directory owns its route-specific view components. `components/ui` contains only reusable presentation primitives. `content` owns facts and translations; `i18n` owns selection and persistence; `services` owns external communication.

### Task 1: Establish the test harness and bilingual content contract

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.mjs`
- Create: `src/test/setup.js`
- Create: `src/content/portfolio.js`
- Create: `src/content/portfolio.test.js`
- Create: `src/i18n/LanguageProvider.jsx`
- Create: `src/i18n/usePortfolio.js`
- Create: `src/i18n/LanguageProvider.test.jsx`

**Interfaces:**
- Produces: `portfolioContent.pt`, `portfolioContent.en`, `supportedLanguages`, `LanguageProvider`, and `usePortfolio()` returning `{ language, setLanguage, content }`.
- Consumes: existing professional facts and links from the current pages.

- [ ] **Step 1: Install and configure the test runner**

Run:

```bash
npm install --save-dev vitest jsdom @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Add scripts to `package.json`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

Create `vitest.config.mjs`:

```js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.js"],
  },
  resolve: { alias: { "@": new URL("./src", import.meta.url).pathname } },
});
```

Create `src/test/setup.js`:

```js
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
  localStorage.clear();
});
```

- [ ] **Step 2: Write failing tests for the content contract**

Test that both locales expose matching top-level keys and that every project action has a URL only when enabled:

```js
import { describe, expect, it } from "vitest";
import { portfolioContent } from "./portfolio";

describe("portfolioContent", () => {
  it("keeps both locales structurally aligned", () => {
    expect(Object.keys(portfolioContent.en)).toEqual(Object.keys(portfolioContent.pt));
    expect(portfolioContent.en.projects.items).toHaveLength(
      portfolioContent.pt.projects.items.length,
    );
  });

  it("contains no numeric marketing metrics", () => {
    expect(portfolioContent.pt.home).not.toHaveProperty("stats");
    expect(portfolioContent.en.home).not.toHaveProperty("stats");
  });
});
```

- [ ] **Step 3: Run the content test and verify the failure**

Run: `npm test -- src/content/portfolio.test.js`

Expected: FAIL because `portfolioContent` does not exist.

- [ ] **Step 4: Create the bilingual content module**

Define one stable schema and migrate only facts already present in the repository:

```js
const shared = {
  identity: {
    name: "Luana Matos",
    github: "https://github.com/laLuna01",
    linkedin: "https://www.linkedin.com/in/luana-sousa-matos-a00462232/",
    email: "luana.smatos01@gmail.com",
    resumeUrl: "https://docs.google.com/document/d/1NLy-xrDUSmtQUOJsvggYuGZ5m_hkEi2xgxiOvyWz9cQ/export?format=pdf",
  },
};

export const supportedLanguages = ["pt", "en"];

export const portfolioContent = {
  pt: {
    ...shared,
    nav: { trajectory: "Trajetória", skills: "Skills", projects: "Projetos", contact: "Contato", resume: "CV" },
    home: { role: "Desenvolvedora Fullstack", greeting: "Olá, sou Luana Matos.", summary: "Conteúdo profissional em revisão." },
    trajectory: { title: "Trajetória", personal: "Conteúdo pessoal em revisão.", experience: [], education: [], certifications: [] },
    skills: { title: "Skills", groups: [] },
    projects: { title: "Projetos", items: [] },
    contact: { title: "Contato", intro: "Vamos conversar.", fields: { name: "Nome", email: "E-mail", subject: "Assunto", message: "Mensagem", submit: "Enviar" } },
  },
  en: {
    ...shared,
    nav: { trajectory: "Journey", skills: "Skills", projects: "Projects", contact: "Contact", resume: "CV" },
    home: { role: "Fullstack Developer", greeting: "Hi, I’m Luana Matos.", summary: "Professional content under review." },
    trajectory: { title: "Journey", personal: "Personal content under review.", experience: [], education: [], certifications: [] },
    skills: { title: "Skills", groups: [] },
    projects: { title: "Projects", items: [] },
    contact: { title: "Contact", intro: "Let’s talk.", fields: { name: "Name", email: "Email", subject: "Subject", message: "Message", submit: "Send" } },
  },
};
```

During implementation, fill the arrays by moving current repository entries into this module without expanding their claims. Translate wording, not facts.

- [ ] **Step 5: Write failing language-provider tests**

```jsx
function Probe() {
  const { language, setLanguage, content } = usePortfolio();
  return <><span>{language}</span><span>{content.nav.contact}</span><button onClick={() => setLanguage("en")}>EN</button></>;
}

it("switches language and persists the selection", async () => {
  const user = userEvent.setup();
  render(<LanguageProvider><Probe /></LanguageProvider>);
  await user.click(screen.getByRole("button", { name: "EN" }));
  expect(screen.getByText("Contact")).toBeInTheDocument();
  expect(localStorage.getItem("portfolio-language")).toBe("en");
  expect(document.documentElement.lang).toBe("en");
});
```

- [ ] **Step 6: Implement the provider minimally**

Use Portuguese for server render, then resolve stored/browser preference after mount:

```jsx
"use client";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("pt");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-language");
    const detected = navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";
    setLanguageState(supportedLanguages.includes(stored) ? stored : detected);
  }, []);

  const setLanguage = (next) => {
    if (!supportedLanguages.includes(next)) return;
    localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
    setLanguageState(next);
  };

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, content: portfolioContent[language] }}>{children}</LanguageContext.Provider>;
}
```

- [ ] **Step 7: Run the focused and full test suites**

Run: `npm test -- src/content/portfolio.test.js src/i18n/LanguageProvider.test.jsx`

Expected: PASS.

- [ ] **Step 8: Ask Luana to commit this checkpoint**

Ask Luana to run:

```bash
git add package.json package-lock.json vitest.config.mjs src/test src/content src/i18n
git commit -m "feat: add bilingual content foundation"
```

### Task 2: Build the visual foundation and shared window primitives

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.jsx`
- Create: `src/components/ui/WindowControls.jsx`
- Create: `src/components/ui/WindowFrame.jsx`
- Create: `src/components/ui/PageIntro.jsx`
- Create: `src/components/ui/ExternalLink.jsx`
- Create: `src/components/ui/WindowFrame.test.jsx`

**Interfaces:**
- Consumes: `LanguageProvider` from Task 1.
- Produces: `WindowFrame({ title, variant, className, children })`, `WindowControls()`, `PageIntro({ eyebrow, title, description })`, and `ExternalLink({ href, children })`.

- [ ] **Step 1: Write the failing window accessibility test**

```jsx
it("renders a semantic region while hiding decorative controls", () => {
  render(<WindowFrame title="terminal">content</WindowFrame>);
  expect(screen.getByRole("region", { name: "terminal" })).toBeInTheDocument();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm test -- src/components/ui/WindowFrame.test.jsx`

Expected: FAIL because `WindowFrame` does not exist.

- [ ] **Step 3: Implement the primitives**

```jsx
export function WindowControls() {
  return <span className="window-controls" aria-hidden="true"><i>−</i><i>□</i><i>×</i></span>;
}

export function WindowFrame({ title, variant = "light", className = "", children }) {
  return <section className={`window-frame window-frame--${variant} ${className}`} aria-label={title}>
    <header className="window-frame__bar"><span>{title}</span><WindowControls /></header>
    <div className="window-frame__content">{children}</div>
  </section>;
}
```

Implement `ExternalLink` with `target="_blank"`, `rel="noreferrer noopener"`, visible external-arrow text, and an accessible label.

- [ ] **Step 4: Replace global styling with named design tokens**

Define light defaults and dark overrides:

```css
:root {
  --page: #f5f7ff;
  --surface: #eef1ff;
  --surface-strong: #e3e8fb;
  --ink: #17275b;
  --muted: #5e6986;
  --line: #7185c5;
  --accent: #6559cf;
  --shadow: #c9d2ef;
}

@media (prefers-color-scheme: dark) {
  :root {
    --page: #090c17;
    --surface: #13182a;
    --surface-strong: #191f35;
    --ink: #e7ebff;
    --muted: #aab3ce;
    --line: #52699e;
    --accent: #9bacf4;
    --shadow: #050710;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
```

Add mobile-first container, focus, typography, window, button, field, and card rules. Avoid arbitrary one-off colors in page components.

- [ ] **Step 5: Update the root layout**

Use a readable sans font plus JetBrains Mono, wrap the application in `LanguageProvider`, remove transition wrappers, set Portuguese fallback metadata, and keep `<html lang="pt">`.

- [ ] **Step 6: Run tests and production build**

Run: `npm test -- src/components/ui/WindowFrame.test.jsx && npm run build`

Expected: PASS and successful production build.

- [ ] **Step 7: Ask Luana to commit this checkpoint**

```bash
git add src/app/globals.css src/app/layout.jsx src/components/ui src/test
git commit -m "feat: add retro editorial design system"
```

### Task 3: Replace desktop and mobile navigation

**Files:**
- Create: `src/components/layout/Header.jsx`
- Create: `src/components/layout/LanguageSwitch.jsx`
- Create: `src/components/layout/MobileMenu.jsx`
- Create: `src/components/layout/Header.test.jsx`
- Modify: `src/app/layout.jsx`
- Delete later in Task 9: `src/components/Header.jsx`, `src/components/Nav.jsx`, `src/components/MobileNav.jsx`

**Interfaces:**
- Consumes: `usePortfolio()`, Radix Dialog primitives, `WindowControls`.
- Produces: `Header()` shared by the root layout.

- [ ] **Step 1: Write failing navigation tests**

Mock `usePathname()` and assert that the current link has `aria-current="page"`, language buttons expose pressed state, and the mobile menu opens and closes by keyboard.

```jsx
it("marks the active route", () => {
  usePathname.mockReturnValue("/projects");
  render(<LanguageProvider><Header /></LanguageProvider>);
  expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute("aria-current", "page");
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm test -- src/components/layout/Header.test.jsx`

Expected: FAIL because the new header does not exist.

- [ ] **Step 3: Implement one shared navigation model**

Define route keys once inside `Header.jsx`:

```js
const links = [
  { key: "trajectory", href: "/trajectory" },
  { key: "skills", href: "/skills" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
];
```

Render the approved desktop order: text signature, navigation, folder/CV, language selector, decorative controls. Reuse the same `links` in `MobileMenu` through props so desktop and mobile cannot drift.

- [ ] **Step 4: Implement the accessible mobile panel**

Use Radix Dialog/Sheet behavior for focus trapping, `Escape`, overlay click, close button, and restored trigger focus. Hide desktop navigation below the desktop breakpoint and show mobile trigger.

- [ ] **Step 5: Run navigation and language tests**

Run: `npm test -- src/components/layout/Header.test.jsx src/i18n/LanguageProvider.test.jsx`

Expected: PASS.

- [ ] **Step 6: Ask Luana to commit this checkpoint**

```bash
git add src/app/layout.jsx src/components/layout
git commit -m "feat: rebuild responsive portfolio navigation"
```

### Task 4: Build the concise home and layered desktop scene

**Files:**
- Modify: `src/app/page.jsx`
- Create: `src/components/home/DesktopScene.jsx`
- Create: `src/components/home/DesktopScene.test.jsx`

**Interfaces:**
- Consumes: `usePortfolio()`, `WindowFrame`, `ExternalLink`.
- Produces: responsive home presentation and `DesktopScene()`.

- [ ] **Step 1: Write the failing home test**

Assert the presentation and professional links exist while old stats and photo do not:

```jsx
it("keeps the home focused on introduction and links", () => {
  render(<LanguageProvider><Home /></LanguageProvider>);
  expect(screen.getByRole("heading", { name: /Luana Matos/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /GitHub/i })).toBeInTheDocument();
  expect(screen.queryByText(/commits feitos/i)).not.toBeInTheDocument();
  expect(screen.queryByRole("img", { name: /profile/i })).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm test -- src/components/home/DesktopScene.test.jsx`

Expected: FAIL against the old photo-and-stats home.

- [ ] **Step 3: Implement the home structure**

Render a two-column desktop layout and one-column mobile layout. The left column contains role, name, summary, GitHub, LinkedIn, and email. The right column renders `DesktopScene`.

- [ ] **Step 4: Implement the approved layered scene**

Compose three `WindowFrame` instances in this DOM order: terminal, explorer, status. CSS overlaps them only above the desktop breakpoint. Terminal text must come from content keys or neutral commands such as `whoami`; it must not display invented metrics.

- [ ] **Step 5: Run the focused tests and inspect both themes**

Run: `npm test -- src/components/home/DesktopScene.test.jsx`

Then run `npm run dev` and inspect `/` at 390×844 and 1440×900 in both system themes. Confirm no horizontal overflow and no overlap on mobile.

- [ ] **Step 6: Ask Luana to commit this checkpoint**

```bash
git add src/app/page.jsx src/components/home
git commit -m "feat: redesign portfolio home"
```

### Task 5: Build the trajectory page

**Files:**
- Create: `src/app/trajectory/page.jsx`
- Create: `src/components/trajectory/Timeline.jsx`
- Create: `src/components/trajectory/Timeline.test.jsx`
- Modify: `src/content/portfolio.js`

**Interfaces:**
- Consumes: `usePortfolio()`, `PageIntro`, `WindowFrame`, and `content.trajectory`.
- Produces: vertical `Timeline({ items })` and the `/trajectory` route.

- [ ] **Step 1: Write failing timeline tests**

```jsx
it("renders experience in source order", () => {
  const items = [{ company: "A", role: "One", period: "2024" }, { company: "B", role: "Two", period: "2023" }];
  render(<Timeline items={items} />);
  expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("A");
  expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("B");
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm test -- src/components/trajectory/Timeline.test.jsx`

Expected: FAIL because `Timeline` does not exist.

- [ ] **Step 3: Implement the route and components**

Use semantic sections for personal summary, experience, education, and certifications. Use an ordered list for the vertical timeline and regular lists for education/certifications. Do not introduce tabs or nested scroll areas.

- [ ] **Step 4: Migrate existing trajectory facts**

Move the current Enfermix, ICV Brasil, FIAP, ETEC, HarvardX, FreeCodeCamp/Microsoft, and Alura entries into the PT/EN content arrays. Do not add responsibilities or outcomes that are absent from the current repository.

- [ ] **Step 5: Run tests and inspect responsive layout**

Run: `npm test -- src/components/trajectory/Timeline.test.jsx`

Inspect `/trajectory` at 390×844 and 1440×900. Confirm chronological order and lack of inner scrolling.

- [ ] **Step 6: Ask Luana to commit this checkpoint**

```bash
git add src/app/trajectory src/components/trajectory src/content/portfolio.js
git commit -m "feat: add professional trajectory page"
```

### Task 6: Build grouped skills and project grid

**Files:**
- Create: `src/app/skills/page.jsx`
- Create: `src/components/skills/SkillGroup.jsx`
- Create: `src/components/skills/SkillGroup.test.jsx`
- Create: `src/app/projects/page.jsx`
- Create: `src/components/projects/ProjectCard.jsx`
- Create: `src/components/projects/ProjectCard.test.jsx`
- Modify: `src/content/portfolio.js`

**Interfaces:**
- Consumes: `usePortfolio()`, `PageIntro`, `WindowFrame`, `ExternalLink`.
- Produces: `SkillGroup({ group })`, `ProjectCard({ project })`, `/skills`, and `/projects`.

- [ ] **Step 1: Write failing behavior tests**

```jsx
it("always names a technology in text", () => {
  render(<SkillGroup group={{ title: "Backend", description: "Services", items: ["Java", "Spring Boot"] }} />);
  expect(screen.getByText("Java")).toBeVisible();
  expect(screen.getByText("Spring Boot")).toBeVisible();
});

it("omits unavailable project actions", () => {
  render(<ProjectCard project={{ title: "GetCards", description: "Automation", tags: ["C#"], github: "https://github.com/laLuna01/GetCards_CP", live: "" }} />);
  expect(screen.getByRole("link", { name: /repository/i })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /demo/i })).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run tests and verify they fail**

Run: `npm test -- src/components/skills/SkillGroup.test.jsx src/components/projects/ProjectCard.test.jsx`

Expected: FAIL because both components are absent.

- [ ] **Step 3: Implement grouped skills**

Render five semantic groups: Frontend, Backend, Data, Infrastructure, and Tools. Every technology has visible text; icons are optional and `aria-hidden`.

- [ ] **Step 4: Implement project cards and grid**

Render all project cards in a responsive CSS grid. Preserve the current EcoVolt, GetCards, Nike Page, and Salesforce++ data and available links. Use current thumbnails only when validated by `next/image`; provide descriptive alt text from the content module.

- [ ] **Step 5: Run tests and inspect routes**

Run: `npm test -- src/components/skills/SkillGroup.test.jsx src/components/projects/ProjectCard.test.jsx`

Inspect both routes at mobile and desktop widths; confirm no carousel behavior and all actions are keyboard reachable.

- [ ] **Step 6: Ask Luana to commit this checkpoint**

```bash
git add src/app/skills src/app/projects src/components/skills src/components/projects src/content/portfolio.js
git commit -m "feat: add skills and projects pages"
```

### Task 7: Build the contact adapter, form states, and contact page

**Files:**
- Create: `src/services/contact.js`
- Create: `src/services/contact.test.js`
- Create: `src/components/contact/ContactForm.jsx`
- Create: `src/components/contact/ContactForm.test.jsx`
- Modify: `src/app/contact/page.jsx`

**Interfaces:**
- Produces: `submitContact(payload, fetchImpl = fetch)` resolving response JSON or throwing a user-safe error.
- Consumes: `usePortfolio()`, content field labels, and the existing FormSubmit token.

- [ ] **Step 1: Write failing adapter tests**

```js
it("throws when FormSubmit rejects the request", async () => {
  const fetchImpl = vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) });
  await expect(submitContact({ name: "Luana", email: "a@b.com", subject: "Hi", message: "Hello" }, fetchImpl)).rejects.toThrow("CONTACT_SUBMIT_FAILED");
});
```

- [ ] **Step 2: Implement the isolated adapter**

```js
const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/464254e377754e214be6601234604e28";

export async function submitContact(payload, fetchImpl = fetch) {
  const response = await fetchImpl(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("CONTACT_SUBMIT_FAILED");
  return response.json();
}
```

- [ ] **Step 3: Write failing form interaction tests**

Test invalid email, disabled submit while pending, success announcement after resolution, error announcement after rejection, and preserved field values after failure.

- [ ] **Step 4: Implement form state as an explicit state machine**

Use `status` values `idle`, `submitting`, `success`, and `error`. Validate with native required/email constraints plus explicit accessible messages. Clear fields only after confirmed success. Render status inside `role="status"` or `role="alert"` as appropriate.

- [ ] **Step 5: Compose the contact page**

Place the form beside direct email, LinkedIn, and GitHub links. Remove telephone and street/location details from the current page.

- [ ] **Step 6: Run focused tests**

Run: `npm test -- src/services/contact.test.js src/components/contact/ContactForm.test.jsx`

Expected: PASS for validation, submitting, success, and error paths.

- [ ] **Step 7: Ask Luana to commit this checkpoint**

```bash
git add src/services src/components/contact src/app/contact/page.jsx
git commit -m "feat: rebuild accessible contact experience"
```

### Task 8: Remove legacy implementation, counters, intro bars, and unused dependencies

**Files:**
- Delete: `src/app/services/page.jsx`
- Delete: `src/app/resume/page.jsx`
- Delete: `src/app/work/page.jsx`
- Delete: `src/components/Header.jsx`
- Delete: `src/components/Nav.jsx`
- Delete: `src/components/MobileNav.jsx`
- Delete: `src/components/PageTransition.jsx`
- Delete: `src/components/Photo.jsx`
- Delete: `src/components/Social.jsx`
- Delete: `src/components/StairTransition.jsx`
- Delete: `src/components/Stairs.jsx`
- Delete: `src/components/Stats.jsx`
- Delete: `src/components/WorkSliderButtons.jsx`
- Delete unused files under: `src/components/ui/`
- Delete: `public/assets/photo.png`
- Delete: `public/assets/resume/resume.png`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `README.md`
- Modify: `src/app/layout.jsx`

**Interfaces:**
- Consumes: all completed routes and their import graph.
- Produces: a clean dependency graph with no references to deleted legacy code.

- [ ] **Step 1: Prove new routes no longer import legacy components**

Run:

```bash
rg "Photo|Stats|Swiper|StairTransition|PageTransition|react-countup|framer-motion" src
```

Expected before cleanup: matches only in legacy files that will be deleted.

- [ ] **Step 2: Delete legacy routes, components, and unused assets**

Use exact paths listed above. This removes the old repository/commit counters and the six-bar stair intro in full. Preserve project thumbnails because the new project grid consumes them.

- [ ] **Step 3: Remove unused packages**

Run:

```bash
npm uninstall framer-motion react-countup swiper
```

`react-countup` belongs exclusively to the deleted stats feature; `framer-motion` powers the deleted bar/page transitions; `swiper` powers the deleted carousel. After checking imports, also uninstall any Radix or icon package with zero remaining usage.

- [ ] **Step 4: Update metadata and project documentation**

Set specific title/description metadata without claims beyond “Luana Matos — Desenvolvedora Fullstack”. Replace the generated README with setup commands, content-file location, theme behavior, language behavior, test commands, and contact endpoint notes.

- [ ] **Step 5: Verify no legacy references remain**

Run:

```bash
rg "Photo|Stats|Swiper|StairTransition|PageTransition|react-countup|framer-motion|/services|/resume|/work" src package.json README.md
```

Expected: no matches.

- [ ] **Step 6: Run all automated checks**

Run: `npm test && npm run lint && npm run build`

Expected: all commands exit 0.

- [ ] **Step 7: Ask Luana to commit this checkpoint**

```bash
git add package.json package-lock.json README.md src public/assets
git commit -m "refactor: remove legacy portfolio implementation"
```

### Task 9: Final responsive, theme, accessibility, and content audit

**Files:**
- Modify only files with defects found by the checks below.
- Test: all `*.test.js` and `*.test.jsx` files.

**Interfaces:**
- Consumes: the complete portfolio.
- Produces: release-ready behavior matching every design-spec criterion.

- [ ] **Step 1: Run the full automated suite from a clean dev server**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all exit 0 with no warnings caused by project code.

- [ ] **Step 2: Capture desktop and mobile route screenshots**

Run the production server and capture all five routes at 1440×900 and 390×844 using Chromium. Repeat with light and dark emulation. Inspect every capture for overflow, clipped controls, low contrast, accidental inner scroll, and overlap.

- [ ] **Step 3: Perform keyboard and screen-reader semantics audit**

For every route: tab through controls in visual order, open/close the mobile menu with keyboard, confirm focus restoration, submit invalid contact fields, and confirm status announcements. Inspect the accessibility tree to verify decorative window controls are absent.

- [ ] **Step 4: Verify preferences and persistence**

Confirm system theme changes update the UI without a toggle. Confirm reduced-motion mode removes cursor blinking and entrance movement. Change PT/EN, navigate across all routes, reload, and confirm the selected language persists and `<html lang>` is correct.

- [ ] **Step 5: Verify content integrity and external links**

Compare every displayed company, course, technology, project, URL, and date to `src/content/portfolio.js` and the original repository content. Confirm there are no fabricated metrics and no empty external-action buttons.

- [ ] **Step 6: Re-run checks after any audit fixes**

Run: `npm test && npm run lint && npm run build && git diff --check`

Expected: all exit 0.

- [ ] **Step 7: Ask Luana to commit the final audit checkpoint**

Provide an exact `git add` list containing only files changed during the audit, then ask Luana to run:

```bash
git commit -m "fix: complete portfolio release audit"
```

Do not include `.superpowers/` or agent instruction files.
