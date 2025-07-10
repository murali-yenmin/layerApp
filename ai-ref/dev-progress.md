# LawVerge Development Progress

This document tracks the real-time progress of the LawVerge application development. It is updated after the completion of each phase.

---

### 📈 **Overall Progress**  

| 🔢 Metric                  | 📍 Value     |
|---------------------------|----------------|
| Total Modules             | 22             |
| Modules Completed         | 0              |
| Total Tasks               | ~130+          |
| Tasks Completed           | 0              |
| **Overall Completion**    | **0%**         |

---

### 🔄 **Current Task** 

| 🔧 Item     | 📌 Value        |
|------------|----------------|
| Module     | Not Started    |
| Phase      | Not Started    |
| Task       | Not Started    |


---

### 🕓 **Last Updated**

YYYY-MM-DD HH:MM:SS

---

## 📋 **Module Progress**

**Legend:** ⏳ (TODO) | 🚧 (In Progress) | ✅ (Completed) | ❌ (Error)

---

### 1. 🔐 **Secure Login**
**Module Status:** ⏳ TODO

| 🧱 Phase                                   | ✅ Task                                                                 | 📌 Status      | 📝 Notes / Errors |
|-------------------------------------------|---------------------------------------------------------------------------|:--------------:|-------------------|
| **Phase 1: Scoping & Data Modeling**      | Define User entity and authentication requirements                        | ⏳ TODO        | -                 |
|                                           | Design JWT structure and token refresh strategy                           | ⏳ TODO        | -                 |
|                                           | Outline password policies and hashing mechanism                           | ⏳ TODO        | -                 |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement User entity and database schema                              | ⏳ TODO        | -                 |
|                                           | Create authentication controller and service                              | ⏳ TODO        | -                 |
|                                           | Implement JWT generation and validation logic                             | ⏳ TODO        | -                 |
|                                           | Add password hashing (e.g., bcrypt)                                       | ⏳ TODO        | -                 |
| **Phase 3: Frontend (React) – UI Development** | Build Login form component                                           | ⏳ TODO        | -                 |
|                                           | Create UI for password reset/forgot password flow                         | ⏳ TODO        | -                 |
|                                           | Implement UI state management (loading, error, success)                   | ⏳ TODO        | -                 |
| **Phase 4: Integration & Validation**     | Connect Login UI to the authentication API                                | ⏳ TODO        | -                 |
|                                           | Implement client-side validation (`react-hook-form` + `yup/zod`)          | ⏳ TODO        | -                 |
|                                           | Handle and display API error messages                                     | ⏳ TODO        | -                 |
| **Phase 5: Role-Based Access Control (RBAC)** | Implement `AuthGuard` to protect routes                               | ⏳ TODO        | -                 |
|                                           | Create a `RolesGuard` to manage permissions                               | ⏳ TODO        | -                 |
|                                           | Redirect users based on their role after login                            | ⏳ TODO        | -                 |
| **Phase 6: Testing & Finalization**       | Write unit tests for authentication service                               | ⏳ TODO        | -                 |
|                                           | Write UI tests for the Login form                                         | ⏳ TODO        | -                 |
|                                           | Perform E2E testing for the complete login flow                           | ⏳ TODO        | -                 |


---

### 2. 👤 **Profiles Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define user profile attributes beyond the core User entity (e.g., bio, profile picture URL, contact details) | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement API endpoints for users to view and update their own profiles | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build a "My Profile" or "Account Settings" page | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect the profile page UI to the backend API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure users can only edit their own profile | ⏳ TODO | - |
| | Define if Admins can edit other users' profiles | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for profile update functionality | ⏳ TODO | - |

---

### 3. 🗃️ **Masters Database**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define all master data entities (e.g., Court, Case Type, Document Type, Expense Type) | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement generic or specific CRUD APIs for each master table | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build a dedicated "System Settings" or "Masters" area in the UI | ⏳ TODO | - |
| | Create forms and tables for managing each master data type | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the various Master CRUD APIs | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Restrict access to this entire module to Admin users only | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for master data creation and validation | ⏳ TODO | - |

---

### 4. 💸 **Add New Expense Types**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define ExpenseType entity (this is a master table) | ⏳ TODO | - |
| | Attributes: name, description | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement ExpenseType entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for managing expense types within the Masters/Settings area | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the ExpenseType CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Restrict access to Admin and Manager roles | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for managing expense types | ⏳ TODO | - |

---

### 5. 🧑‍💼 **Staff Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Staff entity (related to User) | ⏳ TODO | - |
| | Outline attributes: personal details, role, permissions, etc. | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Staff entity and CRUD API endpoints (Create, Read, Update, Delete) | ⏳ TODO | - |
| | Add logic for inviting/onboarding new staff members | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build a table/list view to display all staff | ⏳ TODO | - |
| | Create forms for adding and editing staff members | ⏳ TODO | - |
| | Design a modal for confirming deletions | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Staff CRUD API | ⏳ TODO | - |
| | Implement client-side validation for staff forms | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Restrict access to Admin and Manager roles | ⏳ TODO | - |
| | Prevent lower-level roles from modifying or viewing sensitive staff data | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write unit tests for the Staff service | ⏳ TODO | - |
| | Perform E2E testing for the staff management workflow | ⏳ TODO | - |

---

### 6. 👨‍⚖️ **Advocate Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Advocate entity (related to User) | ⏳ TODO | - |
| | Attributes: specialization, bar association number, etc. | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Advocate entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for listing, adding, and editing advocates | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Advocate CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Restrict access to Admin and Manager roles | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for advocate management logic | ⏳ TODO | - |

---

### 7. 🏢 **Company Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Company entity (related to Client) | ⏳ TODO | - |
| | Attributes: name, address, registration details | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Company entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for managing company profiles | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Company CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Define permissions for who can add or edit company information | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for company management | ⏳ TODO | - |

---

### 8. 👤 **Client Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Client entity and its relationships (e.g., to Cases) | ⏳ TODO | - |
| | Specify client attributes: contact info, company, etc. | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Client entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for listing, adding, and editing clients | ⏳ TODO | - |
| | Create a client profile view | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Client CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure advocates/staff can only view clients associated with their cases | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for client creation and modification logic | ⏳ TODO | - |

---

### 9. 📂 **Case Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Case entity and its relationships (Client, Advocate, Hearings, etc.) | ⏳ TODO | - |
| | Attributes: case number, status, description | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Case entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for listing, creating, and editing cases | ⏳ TODO | - |
| | Design a detailed case view page | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Case CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Implement logic to assign cases to advocates/staff | ⏳ TODO | - |
| | Restrict case visibility based on user assignment | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for case creation and assignment | ⏳ TODO | - |

---

### 10. 📌 **Add New Matters**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define the minimum required fields for a "quick add" matter/case | ⏳ TODO | - |
| | This module will leverage the existing Case entity | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Create a simplified API endpoint for creating a case with minimal data | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Design and build a "quick add" modal or dedicated form | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect the quick add UI to the simplified API endpoint | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Define which roles (e.g., Manager, Advocate) can use this feature | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for the quick add workflow | ⏳ TODO | - |

---

### 11. 📅 **Hearing Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Hearing entity (related to Case) | ⏳ TODO | - |
| | Attributes: date, court, judge, outcome | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Hearing entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI to schedule and view hearings within a case | ⏳ TODO | - |
| | Create a calendar view for all hearings | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Hearing CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure only assigned users can manage hearings for a case | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for hearing scheduling | ⏳ TODO | - |

---

### 12. 🧾 **Evidence Handling**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Evidence entity (related to Case) | ⏳ TODO | - |
| | Attributes: file path, description, type, upload date | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Evidence entity and CRUD API, including file upload logic | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for uploading and listing evidence for a case | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Evidence API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure only assigned users can manage evidence | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for evidence upload and retrieval | ⏳ TODO | - |

---

### 13. 📁 **Document Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Document entity (related to Case) | ⏳ TODO | - |
| | Attributes: file path, document type, version history, description | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Document entity and CRUD API | ⏳ TODO | - |
| | Integrate with a file storage solution (e.g., local, S3) | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for uploading, listing, and organizing documents within a case | ⏳ TODO | - |
| | Create a document viewer/previewer component | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Document API, including file upload handling | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure document access is restricted based on case assignment | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for document upload, download, and access control | ⏳ TODO | - |

---

### 14. 🧾 **Advice Logging**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Advice entity (related to Client, Advocate) | ⏳ TODO | - |
| | Attributes: advice text, date, category | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Advice entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for logging and viewing advice history for a client | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Advice CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure only relevant advocates/staff can view or add advice | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for advice logging | ⏳ TODO | - |

---

### 15. 🗒️ **Notes Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Note entity (related to Case, Client, etc.) | ⏳ TODO | - |
| | Attributes: content, author, timestamp | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Note entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for adding, editing, and viewing notes within relevant contexts (e.g., a case timeline) | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Note CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure notes are only visible to users with access to the parent item (e.g., the case) | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for note creation and visibility | ⏳ TODO | - |

---

### 16. 🏷️ **Tags Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Tag entity (e.g., name, color) | ⏳ TODO | - |
| | Plan for a polymorphic relationship to tag various items (Cases, Documents, etc.) | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Tag entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for creating and managing tags | ⏳ TODO | - |
| | Create a reusable component for applying tags to items | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Integrate the tagging component into other modules (Cases, Documents) | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Define permissions for who can create and manage tags | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for tag creation and application | ⏳ TODO | - |

---

### 17. 💵 **Invoice Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Invoice entity (related to Case, Client) | ⏳ TODO | - |
| | Attributes: line items, total amount, due date, status (draft, sent, paid) | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Invoice entity and CRUD API | ⏳ TODO | - |
| | Add logic for auto-generating invoice numbers | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for creating, viewing, and filtering invoices | ⏳ TODO | - |
| | Design an invoice template for viewing and printing/PDF generation | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Invoice CRUD API | ⏳ TODO | - |
| | Implement validation for invoice forms | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Restrict invoice creation/management to Admins, Managers, and assigned Advocates | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for invoice generation and status updates | ⏳ TODO | - |

---

### 18. 💰 **Office Expenses**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Expense entity | ⏳ TODO | - |
| | Attributes: expense type, amount, date, description, receipt attachment | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Expense entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build UI for logging, viewing, and categorizing office expenses | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Expense CRUD API | ⏳ TODO | - |
| **Phase 5: Role-based Access Control (RBAC)** | Restrict access to Admin and Manager roles | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for expense tracking and reporting | ⏳ TODO | - |

---

### 19. 📇 **Contact Management**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define Contact entity | ⏳ TODO | - |
| | Attributes: name, email, phone, company, relationship (e.g., witness, opposing counsel) | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement Contact entity and CRUD API | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build a central contact directory with search and filter capabilities | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect UI to the Contact CRUD API | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Define permissions for viewing or managing contacts | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests for contact creation and search functionality | ⏳ TODO | - |

---

### 20. 📈 **Reports**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define requirements for key reports (e.g., financial summaries, case load reports) | ⏳ TODO | - |
| | Design the data aggregation strategies | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Implement services and endpoints to generate report data | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build a reports dashboard with filters (e.g., by date range, advocate) | ⏳ TODO | - |
| | Create data visualization components (charts, graphs, tables) | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Connect the UI to the reporting endpoints | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Restrict access to specific reports based on user role | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests to validate the accuracy of report data | ⏳ TODO | - |

---

### 21. 🌐 **Multi-Language Support**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Plan internationalization (i18n) strategy (e.g., `react-i18next`, `nestjs-i18n`) | ⏳ TODO | - |
| | Identify all user-facing strings for translation | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Integrate i18n library for backend-generated messages (e.g., error messages) | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Integrate i18n library and wrap the application | ⏳ TODO | - |
| | Create translation files (e.g., `en.json`, `es.json`) | ⏳ TODO | - |
| | Build a language switcher component | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Replace all hardcoded UI strings with translation keys | ⏳ TODO | - |
| | Store user language preference in their profile or local storage | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | N/A | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Write tests to verify that language switching works correctly across the app | ⏳ TODO | - |

---

### 22. 📊 **Dynamic Dashboard**
**Module Status:** ⏳ TODO

| 🧱 Phase | ✅ Task | 📌 Status | 📝 Notes / Errors |
| :--- | :--- | :---: | :--- |
| **Phase 1: Scoping & Data Modeling** | Define data points and widgets for each user role (Admin, Manager, Advocate, Staff) | ⏳ TODO | - |
| | Design API endpoints to supply dashboard data | ⏳ TODO | - |
| **Phase 2: Backend (NestJS) – CRUD & Logic** | Create a dashboard service to aggregate data (e.g., case counts, upcoming hearings) | ⏳ TODO | - |
| | Implement role-specific data retrieval logic | ⏳ TODO | - |
| **Phase 3: Frontend (React) – UI Development** | Build dashboard layout component | ⏳ TODO | - |
| | Create reusable chart and summary card components | ⏳ TODO | - |
| | Design role-specific dashboard views | ⏳ TODO | - |
| **Phase 4: Integration & Validation** | Fetch and display dynamic data from the dashboard API | ⏳ TODO | - |
| | Implement loading skeletons and error states for widgets | ⏳ TODO | - |
| **Phase 5: Role-Based Access Control (RBAC)** | Ensure the dashboard API returns data appropriate for the user's role | ⏳ TODO | - |
| | Conditionally render dashboard widgets based on user permissions | ⏳ TODO | - |
| **Phase 6: Testing & Finalization** | Test dashboard data aggregation logic | ⏳ TODO | - |
| | Test UI components with mock data | ⏳ TODO | - |

