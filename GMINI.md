# ⚖️ Advocate Office Management System – Development Prompt

Read the project folders:  
- `react` → Frontend  
- `nest` → Backend  

Both folders contain **base setups** for full-stack feature development. All new functionality must be layered on top of this foundation.

---

## 🔒 Strict Development Workflow

### 1. Understand the Requirements  
- Review all business features (see list below)  
- Analyze and understand the expected behavior of each module  
- Confirm all UI references before writing code

### 2. Follow UI Design Precisely  
- Use provided **UI mockups or Figma files** for layout, structure, and interactions  
- Do **not improvise UI** without approval  
- Match component hierarchy, alignment, states, spacing, and styles as per design specs

---

### 3. Plan Development  
- Break the full system into logical **data models**
- Define and order models by priority and dependency
- Create **phase-based plans** per model

---

### 4. Model-by-Model Phased Development  
For **each model**, apply the following rules:

- Implement both:
  - 🖥️ Frontend (React)
  - 🔧 Backend (NestJS)
- Define phases for development
- For each phase:
  - Create a detailed **task list**
  - Assign one of the following **status icons**:
    - ⏳ TODO
    - 🚧 IN PROGRESS
    - ✅ COMPLETED
  - Log **any errors** with full context

---

### 5. After Each Phase:
✅ Pause development and update documentation:

- `/ai-ref/dev-plan.md`  
  - Update model phase plan
  - Mark tasks as complete
  - Reflect phase completion status

- `/ai-ref/dev-progress.md`  
  - Update:
    - Current task
    - Current phase
    - Task status
    - Error tracker
    - Overall progress percentage
    - Last edited timestamp

---

## 📋 Tracking Board Requirements (`/ai-ref/dev-progress.md`)

Include the following:

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

- Every code or phase update must be reflected in `.md` files
- Log errors in detail with a resolution status
- Always maintain accurate timestamps
- Stay consistent with task structure and format

---

## 🎯 Key Project Modules – Advocate Office Management System

Develop and manage these features:

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

---

📌 Each module must be treated as its own **model** with:
- A defined, documented development plan
- Phase-based task structure
- Frontend and backend completion
- Status tracking and progress logging
- UI matched strictly to provided designs

---

This prompt enforces a **disciplined, trackable, UI-aligned development cycle**. All engineers must adhere to this structure—no shortcuts, no missing logs, and no off-design implementations.
