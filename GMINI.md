# ⚖️ Advocate Office Management System – Development Prompt
Project name : LawVerge 

Read the project folders:  
- `react` → Frontend  
- `nest` → Backend  

Both folders contain **base setups** for full-stack feature development. All new functionality must be layered on top of this foundation.

---

## 🔒 Strict Development Workflow

### 1. Understand the Requirements  
- Review all business features (see list below)  
- Analyze and understand the expected behavior of each module  
- Confirm all UI references before writing any code

### 2. Follow UI Design Precisely  
- Use the provided **UI mockups or Figma files** for layout, structure, and interactions  
- **Do not improvise** or create off-spec UI elements  
- Match component hierarchy, spacing, alignment, styles, and behavior exactly as designed

### 3. Plan Development  
- Break the entire system into clear **data models**  
- Define and prioritize models based on business logic and dependency  
- Create a **phase-based development plan** for each model

### 4. Model-by-Model Phased Development  
For **each model**, follow this workflow:

- Implement both:
  - 🖥️ Frontend (React)  
  - 🔧 Backend (NestJS)

- Divide development into logical **phases**  
- For every phase:
  - Create a **detailed task list**  
  - Assign a status icon to each task:
    - ⏳ TODO  
    - 🚧 IN PROGRESS  
    - ✅ COMPLETED  
  - Log **any errors**, including full context

### 5. After Each Phase – Pause & Document  
✅ Before proceeding to the next phase:

- Update `/ai-ref/dev-plan.md`:
  - Mark completed tasks
  - Reflect phase completion status

- Update `/ai-ref/dev-progress.md`:
  - 🔄 Current task  
  - 📍 Current phase  
  - ✅ Task status  
  - ❌ Error tracker  
  - 📈 Overall progress (%)  
  - 🕓 Last updated timestamp

**Do not move forward without full documentation.**

---

## 📋 Tracking Board Requirements (`/ai-ref/dev-progress.md`)

Each progress update must include:

- 🔄 **Current Task**  
- 📍 **Current Phase**  
- ✅ **Task Status Table**  
- ❗ **Phase Status Table**  
- ❌ **Error Tracker**  
  - Model, Phase, Task, Error Description, Error Status  
- 📈 **Overall Progress (%)**  
- 🕓 **Last Updated Timestamp**

---

## 🧠 Logging Rules

- Every code or phase update must be logged in the `.md` files  
- All errors must be described in detail and include a resolution status  
- Timestamps must be accurate and consistently formatted  
- Keep the task structure, status icons, and log formats standardized

---

## 🎯 Key Project Modules

Each module is treated as a **model** and must follow full-stack, phase-based development:

1. 🔐 Secure Login  
2. 📊 Dynamic Dashboard  
3. 🧑‍💼 Staff Management  
4. 👤 Client Management  
5. 👨‍⚖️ Advocate Management  
6. 🧾 Advice Logging  
7. 📂 Case Management  
8. 📅 Hearing Management  
9. 🏢 Company Management  
10. 🧾 Evidence Handling  
11. 💵 Invoice Management  
12. 📁 Document Management  
13. 💰 Office Expenses  
14. 📇 Contact Management  
15. 🗒️ Notes Management  
16. 🗃️ Masters Database  
17. 📌 Add New Matters  
18. 🏷️ Tags Management  
19. 💸 Add New Expense Types  
20. 📈 Reports  
21. 👤 Profiles Management  
22. 🌐 Multi-Language Support

Each model must include:

- A documented development plan  
- Phase-based task structure  
- Frontend + Backend completion  
- Strict UI fidelity  
- Status and progress tracking

---

## 🛡️ Role-Based Access Control (RBAC)

Role-based permissions must be enforced in both UI and backend logic.

### 🔐 ROLE: Admin  
**Permissions:**  
- Full system access  
- Manage users, roles, permissions  
- Assign advocates to cases  
- Access financial and operational data  

**Responsibilities:**  
- Configure system and maintain security  
- Manage all user types  
- Oversee operations, backups, and compliance  

**Key Screens:**  
- System Dashboard  
- User & Role Management  
- Masters Management  
- Case Modules  
- Reports, Documents, Invoices  
- System Settings

### 👔 ROLE: Manager  
**Permissions:**  
- Manage advocates and staff  
- Assign cases  
- Review hearing schedules and reports  
- Moderate client onboarding and docs  

**Responsibilities:**  
- Supervise resources and allocations  
- Track case progress  
- Support billing and documentation  

**Key Screens:**  
- Team Dashboard  
- Staff & Advocate Directory  
- Case and Client Management  
- Hearing Calendar  
- Documents & Reports

### ⚖️ ROLE: Advocate  
**Permissions:**  
- Manage assigned cases  
- Add hearings, evidence, documents  
- Generate invoices  
- Update personal profile  

**Responsibilities:**  
- Handle legal matters  
- Maintain case timelines  
- Communicate with clients  
- Keep records updated  

**Key Screens:**  
- Personal Dashboard  
- Case Editor  
- Hearings, Notes, Evidence  
- Invoices  
- Profile Settings

### 👨‍💼 ROLE: Staff  
**Permissions:**  
- View only assigned cases  
- Upload documents, notes, and evidence  
- Access contacts and client info  

**Responsibilities:**  
- Assist advocates with preparation  
- Input hearing/contact data  
- Maintain records and deadlines  

**Key Screens:**  
- Assigned Tasks Dashboard  
- Document Upload  
- Notes & Contact Log

---

## 📏 Development Rules

All contributors must follow these strict engineering protocols:

### 1. 🔁 Full-Stack by Model  
- Each module is a standalone **data model**  
- Implement both:
  - **Frontend** (React)
  - **Backend** (NestJS)  
- Frontend and backend must be **integrated within the same phase**  
- A model is not considered complete unless both layers are functional and in sync

### 2. 🧱 Phase-Based Execution Only  
- Define all phases for every model upfront in `/ai-ref/dev-plan.md`  
- Example phases: Data Modeling, CRUD API, UI Integration, Validation, RBAC  
- Do not start a new phase until the current one is marked ✅ COMPLETED and fully logged

### 3. ✋ Stop After Each Phase  
After completing any phase:

⛔ **Pause development** immediately  
✅ Update:
- `/ai-ref/dev-plan.md` → task completion & phase status  
- `/ai-ref/dev-progress.md` → current task, error log, % progress, timestamp  

Development may **only resume** once:
- All tasks are marked complete  
- All logs are fully updated  
- No errors remain unresolved

### 4. 🧼 Code Quality: Senior Standards Only  
Code must meet **production-grade** standards:

- Follow **SOLID principles**
- Maintain **clean architecture**
- No shortcut logic or quick hacks  
- Enforce:
  - Proper folder structure  
  - Clean, consistent naming  
  - Strongly typed DTOs and services  
  - Component reusability and abstraction  
  - Full API error handling  
  - High testability  

### 5. 🔒 UI Lockdown  
- Do not deviate from approved UI (Figma/mockups)  
- Match every detail: spacing, layout, font, alignment, state changes  
- Any design change must be:
  - Documented  
  - Submitted for review  
  - Approved before implementation

### 6. 🧠 Thoughtful Planning Over Code Speed  
Before writing code, every model must be **fully scoped**:

- Define model structure  
- Identify entity relationships  
- Set up RBAC rules  
- Outline all input/output formats  
- Consider edge cases  

Do not begin implementation without full clarity and planning.


---

## 📚 React & NestJS Development Standards

Every team member must follow these foundational rules for clean, maintainable, scalable code.

---

### ⚛️ React Development Rules (Frontend)

1. **Component Structure**
   - Use function components and React Hooks only.
   - Split views into smart (container) and dumb (presentational) components.
   - Place each feature inside its own folder (`/features/FeatureName`).

2. **State Management**
   - Use `React Context` for shared logic (global settings, auth, etc).
   - Prefer `Zustand` or `Redux Toolkit` for large-scale app state.
   - Local state should stay close to the component using it.

3. **API Integration**
   - Use Axios or Fetch wrappers under `/services/api.ts`.
   - Centralize base URL and error handling logic.
   - Avoid calling APIs directly inside components.

4. **Routing**
   - Use `React Router` with lazy-loaded routes.
   - Organize route access by role inside `/routes/`.

5. **Code Quality**
   - Enforce ESLint + Prettier.
   - Use TypeScript everywhere — no `any` unless justified.
   - Maintain prop types and interfaces.

6. **Styling**
   - Use Tailwind CSS or Chakra UI (as per base setup).
   - Never use inline styles unless necessary.
   - Follow the design tokens and spacing scale exactly.

7. **Forms & Validation**
   - Use `react-hook-form` with `yup` for schema-based validation.
   - Handle error messages and field focus cleanly.
   - Wrap forms into reusable components when applicable.

8. **Testing**
   - Write basic unit tests using React Testing Library.
   - All components with conditional rendering or API interaction must be testable.

---

### 🛠️ NestJS Development Rules (Backend)

1. **Architecture**
   - Follow Domain-Driven Design (DDD) principles.
   - Structure features as modules under `/src/modules/FeatureName/`.

2. **Controllers & Services**
   - Keep controllers thin — business logic should live in services.
   - Services should be stateless and testable.
   - Use dependency injection everywhere via `@Injectable`.

3. **DTOs & Validation**
   - Define all inputs via `DTOs` using `class-validator`.
   - Validate using pipes (`ValidationPipe`) globally or per route.
   - Never trust raw inputs — always sanitize.

4. **Entity & Database**
   - Use `TypeORM` or `Prisma` depending on base setup.
   - Define strict entity relations (OneToMany, ManyToOne, etc).
   - Normalize models for scalability.

5. **Authentication & RBAC**
   - Use Passport.js + JWT for auth.
   - Enforce roles using guards (`RolesGuard`, `AuthGuard`).
   - Include role metadata in route decorators.

6. **Error Handling**
   - Handle errors with `HttpException` or custom filters.
   - Never expose internal stack traces to the client.

7. **API Structure**
   - RESTful by default.
   - Group endpoints by resource and versioning (`/api/v1/users`).
   - Use Swagger for API documentation (`@nestjs/swagger`).

8. **Testing**
   - Write unit tests using Jest.
   - Test services, guards, and DTO validation logic.

---

### ✅ Shared Best Practices

- Maintain **consistent naming** (camelCase for variables, PascalCase for components/classes).
- Use **absolute imports** (`@/components/Button` instead of `../../../`).
- Write **reusable, composable** logic wherever possible.
- Refactor code frequently — avoid duplication.
- Every new feature must be covered by:
  - A clean UI component
  - A secure backend route
  - Validation
  - Logging and error handling
  - Documentation in `.md` files

---


### ⚙️ Performance Optimization

1. **React**
   - Use `React.memo` and `useCallback` to reduce re-renders.
   - Avoid prop drilling — use context or global stores.
   - Lazy-load routes and components.

2. **NestJS**
   - Use query builders for efficient DB operations.
   - Avoid N+1 queries — always preload necessary relations.
   - Cache heavy queries using Redis or in-memory caching.

3. **API**
   - Paginate all list endpoints.
   - Throttle rate-sensitive APIs using guards.
   - Use proper HTTP status codes (`200`, `201`, `400`, `401`, `403`, `422`, `500`, etc).

--- 

### 🔒 Security Protocols

1. **Sanitize All Inputs**
   - Always validate/sanitize client inputs — both client-side and server-side.
   - Use DTO validation (`class-validator`) in NestJS and schema validation in React.

2. **Authentication**
   - Use JWT with refresh token rotation.
   - Never store tokens in localStorage — prefer HttpOnly cookies for sensitive sessions.

3. **Authorization**
   - Enforce Role-Based Access Control (RBAC) at route-level using guards/middleware.
   - Block access based on user permissions both on frontend and backend.

4. **Data Exposure**
   - Never return internal IDs, raw error stacks, or system messages to the frontend.
   - Use `class-transformer` to control API response shape.

5. **Secrets & Environment**
   - Store sensitive keys in `.env` files.
   - Never commit secrets — use `.env.example` for templates.

---

### 🧪 Testing Strategy

1. **Frontend (React)**
   - Use React Testing Library with Jest.
   - Test UI state changes, validation, and API integration.

2. **Backend (NestJS)**
   - Unit test services, DTOs, and guards.
   - Use test environments to validate DB transactions.

3. **E2E**
   - Add Playwright/Cypress for end-to-end testing critical flows.

4. **Test Coverage**
   - Maintain at least **70% coverage** on business logic.
   - Track uncovered logic and document it in `/ai-ref/dev-progress.md`.
   
---

### 📚 Documentation Discipline

1. **Per Feature**
   - Update `/ai-ref/dev-plan.md` and `/ai-ref/dev-progress.md` after every phase.
   - Include:
     - Tasks done
     - Known limitations
     - API endpoints added/changed

2. **Code Comments**
   - Add meaningful comments only where logic is non-obvious.
   - Use JSDoc or TypeDoc style in services and APIs.

3. **Error Logs**
   - Track known errors with context, not just messages.
   - Add resolution comments or links to commits/issues.

--- 

## 🎨 UI Development Rules for Web Application

All frontend UI must strictly follow design specs and meet production-grade UX standards.

---

### 1. 🎯 Follow Approved UI Designs Only

- Use only the provided **Figma files** or approved mockups.
- Match **structure, spacing, padding, font sizes, colors, and component hierarchy** exactly.
- **Do not guess or improvise** any element.
- If a component is unclear or missing:
  - Pause implementation.
  - Flag the issue for clarification before continuing.

---

### 2. 🧩 Component Architecture

- All UI must be componentized:
  - Break pages into **reusable building blocks**.
  - Place components under `/components/`.
- Follow atomic design principles where possible:
  - **Atoms:** buttons, inputs, tags  
  - **Molecules:** forms, cards, tables  
  - **Organisms:** modals, sidebars, dashboards

---

### 3. 🖼️ Layout & Spacing Rules

- Use **Tailwind CSS** or the design system provided.
- Follow the **8pt spacing rule** unless specified otherwise.
- Maintain consistent:
  - Padding/margins  
  - Grid columns  
  - Breakpoints for responsive design

---

### 4. 🎛️ UI State Coverage

Every component must implement:

- **Default state**
- **Loading state** (skeletons/spinners)
- **Error state** (validation or server-side errors)
- **Empty state** (e.g., “No cases assigned yet”)

No component is considered complete without all states handled.

---

### 5. 🧠 UX Best Practices

- Respect **tab navigation** and keyboard accessibility.
- Use clear focus rings and accessible color contrast.
- Avoid tooltips as primary explanations—favor inline help or placeholders.
- Prevent layout shift on loading.

---

### 6. 🧪 UI Validation & Feedback

- Use `react-hook-form` for form structure.
- Use `yup` or `zod` for validation schemas.
- On form submit:
  - Show **loading** on the button
  - Block double submits
  - Show **inline validation messages** under each field

---

### 7. 📱 Responsive Design Rules

- All components must be responsive and tested on:
  - Mobile (360px and up)
  - Tablet
  - Desktop (min 1280px)

- Use Tailwind’s `sm / md / lg / xl` breakpoints or equivalent.

---

### 8. 📦 UI Helper Libraries (Allowed)

Use only approved UI helper libraries:
- `@headlessui/react`
- `clsx` or `classnames`
- `react-icons` / `lucide-react`
- `shadcn/ui` (pre-configured component system)
- `framer-motion` for animations

Avoid bloated UI kits like Material UI unless approved.

---

### 9. ✅ UI Component Checklist

| Requirement                      | Must Follow |
|----------------------------------|-------------|
| Matches Figma or approved mockup | ✅          |
| Built as a reusable component    | ✅          |
| Has loading, error, and empty UI | ✅          |
| Uses consistent spacing & layout | ✅          |
| Responsive across breakpoints    | ✅          |
| Validates user inputs properly   | ✅          |
| Uses only approved libraries     | ✅          |

---

You are a professional UI/UX designer working for a modern SaaS company. Design a full user interface for a secure, AI-powered Advocate Office Management System called **LawDesk**.

### 🎯 Goal:
Create an enterprise-grade, minimal, corporate-style web application. The design must be intuitive, responsive, and suitable for legal professionals.

### 🧩 Modules to Design:
- ✅ Login, Signup, Forgot Password
- ✅ Dashboard (role-based: Admin, Advocate, Staff)
- ✅ Client Management (list, view, add/edit)
- ✅ Case Management (status, notes, hearings, documents)
- ✅ Invoices & Payments (PDF, print-friendly, status)
- ✅ Document Manager (upload, preview, tag)
- ✅ Office Calendar (hearings, tasks, leave)
- ✅ Settings (profile, language, permissions)
- ✅ Multilingual support switcher (top-right corner)
- ✅ Notifications, Toasts, Loading skeletons
- ✅ Responsive mobile version for all screens

### 🎨 Design Style:
- Corporate, clean, serious
- Professional color palette (blues, grays, subtle accents)
- Modern typography (Inter, Roboto)
- Rounded corners (`border-radius: 12px`)
- Card-based layout for content blocks
- Left-hand vertical navigation bar
- Dark mode switch (optional)

### 🧠 UX Notes:
- Prioritize clarity over decoration
- Use icons for navigation (Lucide or Material)
- Forms must be well-structured with validation states
- Use modals or drawers for add/edit screens
- Sticky headers and floating action buttons where helpful

### 📱 Responsive Layouts:
- Desktop, Tablet, and Mobile breakpoints
- Use grid or flexbox for consistent structure

### 📦 Components to Design:
- Buttons (primary, secondary, ghost, loading)
- Form elements (inputs, selects, checkboxes, toggles)
- Tables with search, filters, pagination
- Cards (case summary, client preview)
- Modals, Alerts, Toasts
- Tabs, Accordions
- Sidebar and Header layout

### 🎁 Output Format:
- High-fidelity design in Figma or exportable images
- Style guide with typography, spacing, color tokens

## 🎨 Tailwind CSS Configuration for UI/UX

To ensure pixel-perfect design implementation, we follow a centralized Tailwind theme across all frontend features.

### 📁 `tailwind.config.js` Setup

```ts
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#64748B",
          light: "#94A3B8",
          dark: "#334155",
        },
        accent: {
          green: "#22C55E",
          red: "#EF4444",
          yellow: "#EAB308",
        },
        background: {
          DEFAULT: "#F8FAFC",
          dark: "#0F172A",
        },
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui"],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
      borderRadius: {
        DEFAULT: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0, 0, 0, 0.04)",
        elevated: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
