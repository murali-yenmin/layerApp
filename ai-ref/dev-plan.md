# LawVerge Development Plan

This document outlines the complete development roadmap for the LawVerge application. Each module will be developed in a phased, full-stack approach, covering everything from data modeling to final testing.

---

## 📌 **Development Phases**

Each module will be implemented across the following six standardized phases. Do not proceed to the next phase until the current one is marked as `✅ COMPLETED`.

- **Phase 1: Scoping & Data Modeling**
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
- **Phase 3: Frontend (React) - Component & UI Development**
- **Phase 4: Integration & Validation**
- **Phase 5: Role-Based Access Control (RBAC)**
- **Phase 6: Testing & Finalization**

---

## 📋 **Modules & Task Lists**

Here is the breakdown of all 22 project modules, presented in the optimized development order. Each module includes a standardized task list corresponding to the development phases.

---

### 1. 🔐 **Secure Login**
- **Phase 1: Scoping & Data Modeling**
  - [x] ✅ Define User entity and authentication requirements
  - [x] ✅ Design JWT structure and token refresh strategy
  - [x] ✅ Outline password policies and hashing mechanism
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement User entity and database schema
  - [ ] ⏳ Create authentication controller and service
  - [ ] ⏳ Implement JWT generation and validation logic
  - [ ] ⏳ Add password hashing (e.g., bcrypt)
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build Login form component
  - [ ] ⏳ Create UI for password reset/forgot password flow
  - [ ] ⏳ Implement UI state management (loading, error, success)
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect Login UI to the authentication API endpoint
  - [ ] ⏳ Implement client-side validation (`react-hook-form` + `yup/zod`)
  - [ ] ⏳ Handle and display API error messages
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Implement `AuthGuard` to protect routes
  - [ ] ⏳ Create a `RolesGuard` to manage permissions
  - [ ] ⏳ Redirect users based on their role after login
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write unit tests for authentication service
  - [ ] ⏳ Write UI tests for the Login form
  - [ ] ⏳ Perform E2E testing for the complete login flow

---

### 2. 👤 **Profiles Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define user profile attributes beyond the core User entity (e.g., bio, profile picture URL, contact details)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement API endpoints for users to view and update their own profiles
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a "My Profile" or "Account Settings" page
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect the profile page UI to the backend API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure users can only edit their own profile
  - [ ] ⏳ Define if Admins can edit other users' profiles
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for profile update functionality

---

### 3. 🗃️ **Masters Database**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define all master data entities (e.g., Court, Case Type, Document Type, Expense Type)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement generic or specific CRUD APIs for each master table
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a dedicated "System Settings" or "Masters" area in the UI
  - [ ] ⏳ Create forms and tables for managing each master data type
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the various Master CRUD APIs
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to this entire module to Admin users only
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for master data creation and validation

---

### 4. 💸 **Add New Expense Types**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define ExpenseType entity (this is a master table)
  - [ ] ⏳ Attributes: name, description
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement ExpenseType entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for managing expense types within the Masters/Settings area
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the ExpenseType CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to Admin and Manager roles
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for managing expense types

---

### 5. 🧑‍💼 **Staff Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Staff entity (related to User)
  - [ ] ⏳ Outline attributes: personal details, role, permissions, etc.
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Staff entity and CRUD API endpoints (Create, Read, Update, Delete)
  - [ ] ⏳ Add logic for inviting/onboarding new staff members
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a table/list view to display all staff
  - [ ] ⏳ Create forms for adding and editing staff members
  - [ ] ⏳ Design a modal for confirming deletions
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Staff CRUD API
  - [ ] ⏳ Implement client-side validation for staff forms
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to Admin and Manager roles
  - [ ] ⏳ Prevent lower-level roles from modifying or viewing sensitive staff data
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write unit tests for the Staff service
  - [ ] ⏳ Perform E2E testing for the staff management workflow

---

### 6. 👨‍⚖️ **Advocate Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Advocate entity (related to User)
  - [ ] ⏳ Attributes: specialization, bar association number, etc.
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Advocate entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for listing, adding, and editing advocates
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Advocate CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to Admin and Manager roles
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for advocate management logic

---

### 7. 🏢 **Company Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Company entity (related to Client)
  - [ ] ⏳ Attributes: name, address, registration details
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Company entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for managing company profiles
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Company CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Define permissions for who can add or edit company information
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for company management

---

### 8. 👤 **Client Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Client entity and its relationships (e.g., to Cases)
  - [ ] ⏳ Specify client attributes: contact info, company, etc.
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Client entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for listing, adding, and editing clients
  - [ ] ⏳ Create a client profile view
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Client CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure advocates/staff can only view clients associated with their cases
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for client creation and modification logic

---

### 9. 📂 **Case Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Case entity and its relationships (Client, Advocate, Hearings, etc.)
  - [ ] ⏳ Attributes: case number, status, description
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Case entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for listing, creating, and editing cases
  - [ ] ⏳ Design a detailed case view page
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Case CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Implement logic to assign cases to advocates/staff
  - [ ] ⏳ Restrict case visibility based on user assignment
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for case creation and assignment

---

### 10. 📌 **Add New Matters**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define the minimum required fields for a "quick add" matter/case
  - [ ] ⏳ This module will leverage the existing Case entity
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Create a simplified API endpoint for creating a case with minimal data
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Design and build a "quick add" modal or dedicated form
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect the quick add UI to the simplified API endpoint
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Define which roles (e.g., Manager, Advocate) can use this feature
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for the quick add workflow

---

### 11. 📅 **Hearing Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Hearing entity (related to Case)
  - [ ] ⏳ Attributes: date, court, judge, outcome
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Hearing entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI to schedule and view hearings within a case
  - [ ] ⏳ Create a calendar view for all hearings
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Hearing CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure only assigned users can manage hearings for a case
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for hearing scheduling

---

### 12. 🧾 **Evidence Handling**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Evidence entity (related to Case)
  - [ ] ⏳ Attributes: file path, description, type, upload date
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Evidence entity and CRUD API, including file upload logic
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for uploading and listing evidence for a case
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Evidence API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure only assigned users can manage evidence
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for evidence upload and retrieval

---

### 13. 📁 **Document Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Document entity (related to Case)
  - [ ] ⏳ Attributes: file path, document type, version history, description
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Document entity and CRUD API
  - [ ] ⏳ Integrate with a file storage solution (e.g., local, S3)
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for uploading, listing, and organizing documents within a case
  - [ ] ⏳ Create a document viewer/previewer component
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Document API, including file upload handling
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure document access is restricted based on case assignment
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for document upload, download, and access control

---

### 14. 🧾 **Advice Logging**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Advice entity (related to Client, Advocate)
  - [ ] ⏳ Attributes: advice text, date, category
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Advice entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for logging and viewing advice history for a client
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Advice CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure only relevant advocates/staff can view or add advice
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for advice logging

---

### 15. 🗒️ **Notes Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Note entity (related to Case, Client, etc.)
  - [ ] ⏳ Attributes: content, author, timestamp
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Note entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for adding, editing, and viewing notes within relevant contexts (e.g., a case timeline)
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Note CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure notes are only visible to users with access to the parent item (e.g., the case)
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for note creation and visibility

---

### 16. 🏷️ **Tags Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Tag entity (e.g., name, color)
  - [ ] ⏳ Plan for a polymorphic relationship to tag various items (Cases, Documents, etc.)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Tag entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for creating and managing tags
  - [ ] ⏳ Create a reusable component for applying tags to items
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Integrate the tagging component into other modules (Cases, Documents)
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Define permissions for who can create and manage tags
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for tag creation and application

---

### 17. 💵 **Invoice Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Invoice entity (related to Case, Client)
  - [ ] ⏳ Attributes: line items, total amount, due date, status (draft, sent, paid)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Invoice entity and CRUD API
  - [ ] ⏳ Add logic for auto-generating invoice numbers
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for creating, viewing, and filtering invoices
  - [ ] ⏳ Design an invoice template for viewing and printing/PDF generation
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Invoice CRUD API
  - [ ] ⏳ Implement validation for invoice forms
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict invoice creation/management to Admins, Managers, and assigned Advocates
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for invoice generation and status updates

---

### 18. 💰 **Office Expenses**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Expense entity
  - [ ] ⏳ Attributes: expense type, amount, date, description, receipt attachment
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Expense entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for logging, viewing, and categorizing office expenses
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Expense CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to Admin and Manager roles
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for expense tracking and reporting

---

### 19. 📇 **Contact Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Contact entity
  - [ ] ⏳ Attributes: name, email, phone, company, relationship (e.g., witness, opposing counsel)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Contact entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a central contact directory with search and filter capabilities
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Contact CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Define permissions for viewing or managing contacts
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for contact creation and search functionality

---

### 20. 📈 **Reports**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define requirements for key reports (e.g., financial summaries, case load reports)
  - [ ] ⏳ Design the data aggregation strategies
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement services and endpoints to generate report data
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a reports dashboard with filters (e.g., by date range, advocate)
  - [ ] ⏳ Create data visualization components (charts, graphs, tables)
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect the UI to the reporting endpoints
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to specific reports based on user role
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests to validate the accuracy of report data

---

### 21. 🌐 **Multi-Language Support**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Plan internationalization (i18n) strategy (e.g., `react-i18next`, `nestjs-i18n`)
  - [ ] ⏳ Identify all user-facing strings for translation
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Integrate i18n library for backend-generated messages (e.g., error messages)
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Integrate i18n library and wrap the application
  - [ ] ⏳ Create translation files (e.g., `en.json`, `es.json`)
  - [ ] ⏳ Build a language switcher component
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Replace all hardcoded UI strings with translation keys
  - [ ] ⏳ Store user language preference in their profile or local storage
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ N/A
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests to verify that language switching works correctly across the app

---

### 22. 📊 **Dynamic Dashboard**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define data points and widgets for each user role (Admin, Manager, Advocate, Staff)
  - [ ] ⏳ Design API endpoints to supply dashboard data
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Create a dashboard service to aggregate data (e.g., case counts, upcoming hearings)
  - [ ] ⏳ Implement role-specific data retrieval logic
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build dashboard layout component
  - [ ] ⏳ Create reusable chart and summary card components
  - [ ] ⏳ Design role-specific dashboard views
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Fetch and display dynamic data from the dashboard API
  - [ ] ⏳ Implement loading skeletons and error states for widgets
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure the dashboard API returns data appropriate for the user's role
  - [ ] ⏳ Conditionally render dashboard widgets based on user permissions
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Test dashboard data aggregation logic
  - [ ] ⏳ Test UI components with mock data

---

### 11. 💵 **Invoice Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Invoice entity (related to Case, Client)
  - [ ] ⏳ Attributes: line items, total amount, due date, status (draft, sent, paid)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Invoice entity and CRUD API
  - [ ] ⏳ Add logic for auto-generating invoice numbers
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for creating, viewing, and filtering invoices
  - [ ] ⏳ Design an invoice template for viewing and printing/PDF generation
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Invoice CRUD API
  - [ ] ⏳ Implement validation for invoice forms
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict invoice creation/management to Admins, Managers, and assigned Advocates
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for invoice generation and status updates

---

### 12. 📁 **Document Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Document entity (related to Case)
  - [ ] ⏳ Attributes: file path, document type, version history, description
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Document entity and CRUD API
  - [ ] ⏳ Integrate with a file storage solution (e.g., local, S3)
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for uploading, listing, and organizing documents within a case
  - [ ] ⏳ Create a document viewer/previewer component
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Document API, including file upload handling
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure document access is restricted based on case assignment
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for document upload, download, and access control

---

### 13. 💰 **Office Expenses**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Expense entity
  - [ ] ⏳ Attributes: expense type, amount, date, description, receipt attachment
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Expense entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for logging, viewing, and categorizing office expenses
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Expense CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to Admin and Manager roles
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for expense tracking and reporting

---

### 14. 📇 **Contact Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Contact entity
  - [ ] ⏳ Attributes: name, email, phone, company, relationship (e.g., witness, opposing counsel)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Contact entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a central contact directory with search and filter capabilities
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Contact CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Define permissions for viewing or managing contacts
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for contact creation and search functionality

---

### 15. 🗒️ **Notes Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Note entity (related to Case, Client, etc.)
  - [ ] ⏳ Attributes: content, author, timestamp
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Note entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for adding, editing, and viewing notes within relevant contexts (e.g., a case timeline)
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the Note CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure notes are only visible to users with access to the parent item (e.g., the case)
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for note creation and visibility

---

### 16. 🗃️ **Masters Database**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define all master data entities (e.g., Court, Case Type, Document Type, Expense Type)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement generic or specific CRUD APIs for each master table
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a dedicated "System Settings" or "Masters" area in the UI
  - [ ] ⏳ Create forms and tables for managing each master data type
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the various Master CRUD APIs
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to this entire module to Admin users only
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for master data creation and validation

---

### 17. 📌 **Add New Matters**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define the minimum required fields for a "quick add" matter/case
  - [ ] ⏳ This module will leverage the existing Case entity
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Create a simplified API endpoint for creating a case with minimal data
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Design and build a "quick add" modal or dedicated form
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect the quick add UI to the simplified API endpoint
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Define which roles (e.g., Manager, Advocate) can use this feature
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for the quick add workflow

---

### 18. 🏷️ **Tags Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define Tag entity (e.g., name, color)
  - [ ] ⏳ Plan for a polymorphic relationship to tag various items (Cases, Documents, etc.)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement Tag entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for creating and managing tags
  - [ ] ⏳ Create a reusable component for applying tags to items
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Integrate the tagging component into other modules (Cases, Documents)
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Define permissions for who can create and manage tags
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for tag creation and application

---

### 19. 💸 **Add New Expense Types**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define ExpenseType entity (this is a master table)
  - [ ] ⏳ Attributes: name, description
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement ExpenseType entity and CRUD API
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build UI for managing expense types within the Masters/Settings area
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect UI to the ExpenseType CRUD API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to Admin and Manager roles
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for managing expense types

---

### 20. 📈 **Reports**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define requirements for key reports (e.g., financial summaries, case load reports)
  - [ ] ⏳ Design the data aggregation strategies
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement services and endpoints to generate report data
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a reports dashboard with filters (e.g., by date range, advocate)
  - [ ] ⏳ Create data visualization components (charts, graphs, tables)
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect the UI to the reporting endpoints
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Restrict access to specific reports based on user role
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests to validate the accuracy of report data

---

### 21. 👤 **Profiles Management**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Define user profile attributes beyond the core User entity (e.g., bio, profile picture URL, contact details)
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Implement API endpoints for users to view and update their own profiles
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Build a "My Profile" or "Account Settings" page
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Connect the profile page UI to the backend API
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ Ensure users can only edit their own profile
  - [ ] ⏳ Define if Admins can edit other users' profiles
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests for profile update functionality

---

### 22. 🌐 **Multi-Language Support**
- **Phase 1: Scoping & Data Modeling**
  - [ ] ⏳ Plan internationalization (i18n) strategy (e.g., `react-i18next`, `nestjs-i18n`)
  - [ ] ⏳ Identify all user-facing strings for translation
- **Phase 2: Backend (NestJS) - CRUD & Business Logic**
  - [ ] ⏳ Integrate i18n library for backend-generated messages (e.g., error messages)
- **Phase 3: Frontend (React) - Component & UI Development**
  - [ ] ⏳ Integrate i18n library and wrap the application
  - [ ] ⏳ Create translation files (e.g., `en.json`, `es.json`)
  - [ ] ⏳ Build a language switcher component
- **Phase 4: Integration & Validation**
  - [ ] ⏳ Replace all hardcoded UI strings with translation keys
  - [ ] ⏳ Store user language preference in their profile or local storage
- **Phase 5: Role-Based Access Control (RBAC)**
  - [ ] ⏳ N/A
- **Phase 6: Testing & Finalization**
  - [ ] ⏳ Write tests to verify that language switching works correctly across the app

---
