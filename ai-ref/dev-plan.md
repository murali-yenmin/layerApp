# ⚖️ Advocate Office Management System – Full Development Plan

This document outlines the complete development plan, breaking the project into logical models and phases as required by `GMINI.MD`.

---

##  Models & Development Order
1.  **Frontend Core Setup**
2.  **Reusable UI Components**
3.  **User, Auth, & Profiles** (Secure Login, Profiles Management)
4.  **Role & Permission Management**
5.  **Staff Management**
6.  **Client Management**
7.  **Advocate Management**
8.  **Company Management**
9.  **Case & Matter Management** (Case Management, Add New Matters)
10. **Hearing Management**
11. **Evidence Handling**
12. **Document Management**
13. **Invoice Management**
14. **Expense Management** (Office Expenses, Add New Expense Types)
15. **Advice Logging**
16. **Contact Management**
17. **Notes Management**
18. **Tags Management**
19. **Masters Database**
20. **Reports**
21. **Multi-Language Support**
22. **Dynamic Dashboard**

---

## Phase-Based Development Plan

### Model 1: Frontend Core Setup
- **Phase 1: Core**
  - [x] ✅ Task: Add Axios, Redux Toolkit, and API helper

### Model 2: Reusable UI Components
- **Phase 1: Setup & Basic Components**
  - [ ] ⏳ Task: Install react-hook-form, yup, @hookform/resolvers
  - [ ] ⏳ Task: Install react-table, react-select
  - [ ] ⏳ Task: Create base Button component (react/src/components/Button.tsx)
  - [ ] ⏳ Task: Create base InputField component (react/src/components/InputField.tsx)
  - [ ] ⏳ Task: Create base SelectField component (react/src/components/SelectField.tsx)
- **Phase 2: Form & Table Components**
  - [ ] ⏳ Task: Create ReusableForm component with react-hook-form and yup integration
  - [ ] ⏳ Task: Create ReusableTable component with react-table integration
  - [ ] ⏳ Task: Create Checkbox component
  - [ ] ⏳ Task: Create RadioButton component
- **Phase 3: Advanced Components & Integration**
  - [ ] ⏳ Task: Create DatePicker component
  - [ ] ⏳ Task: Create Modal component
  - [ ] ⏳ Task: Create Alert/Toast notification component

### Model 3: User, Auth, & Profiles
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define User & Profile schemas
  - [ ] ⏳ Task: Implement registration & JWT login endpoints
  - [ ] ⏳ Task: Implement profile CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Login & Registration pages
  - [ ] ⏳ Task: Create Profile view & edit pages
  - [ ] ⏳ Task: Implement auth state management
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints
  - [x] ✅ Task: Implement E2E tests for auth flows

### Model 3: Role & Permission Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Role & Permission schemas
  - [ ] ⏳ Task: Implement Role CRUD endpoints (Admin only)
  - [ ] ⏳ Task: Create middleware/guards for role-based access
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Role management UI (list, add, edit)
  - [ ] ⏳ Task: Implement UI logic to show/hide elements based on user role
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect role management UI to backend
  - [ ] ⏳ Task: Apply role-based restrictions across all relevant modules

### Model 4: Staff Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Staff schema
  - [ ] ⏳ Task: Implement Staff CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Staff list view
  - [ ] ⏳ Task: Create Add/Edit Staff forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 5: Client Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Client schema
  - [ ] ⏳ Task: Implement Client CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Client list view
  - [ ] ⏳ Task: Create Add/Edit Client forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 6: Advocate Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Advocate schema
  - [ ] ⏳ Task: Implement Advocate CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Advocate list view
  - [ ] ⏳ Task: Create Add/Edit Advocate forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 7: Company Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Company schema
  - [ ] ⏳ Task: Implement Company CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Company list view
  - [ ] ⏳ Task: Create Add/Edit Company forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 8: Case & Matter Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Case/Matter schema with relations
  - [ ] ⏳ Task: Implement Case/Matter CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Case/Matter list view
  - [ ] ⏳ Task: Create Add/Edit Case/Matter forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 9: Hearing Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Hearing schema with relations
  - [ ] ⏳ Task: Implement Hearing CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Hearing list/calendar view
  - [ ] ⏳ Task: Create Add/Edit Hearing forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 10: Evidence Handling
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Evidence schema with file references
  - [ ] ⏳ Task: Implement Evidence CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Evidence list view for cases
  - [ ] ⏳ Task: Create Evidence upload/edit forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 11: Document Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Document schema with file storage logic
  - [ ] ⏳ Task: Implement Document CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Document repository view
  - [ ] ⏳ Task: Create Document upload/management forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 12: Invoice Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Invoice & LineItem schemas
  - [ ] ⏳ Task: Implement Invoice CRUD and PDF generation
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Invoice list view
  - [ ] ⏳ Task: Create Invoice creation/editing form
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 13: Expense Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Expense & ExpenseType schemas
  - [ ] ⏳ Task: Implement CRUD endpoints for both
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Expense list view
  - [ ] ⏳ Task: Create Add/Edit Expense forms
  - [ ] ⏳ Task: Create ExpenseType management UI
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 14: Advice Logging
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define AdviceLog schema
  - [ ] ⏳ Task: Implement AdviceLog CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create AdviceLog list view
  - [ ] ⏳ Task: Create Add/Edit AdviceLog forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 15: Contact Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Contact schema
  - [ ] ⏳ Task: Implement Contact CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Contact list view
  - [ ] ⏳ Task: Create Add/Edit Contact forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 16: Notes Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Note schema with polymorphic relations
  - [ ] ⏳ Task: Implement Note CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Notes view component for related items
  - [ ] ⏳ Task: Create Add/Edit Note forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 17: Tags Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Tag schema with polymorphic relations
  - [ ] ⏳ Task: Implement Tag CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Tag management UI
  - [ ] ⏳ Task: Create component to add/remove tags on items
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 18: Masters Database
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define schemas for all master data (e.g., Court, CaseType)
  - [ ] ⏳ Task: Implement CRUD endpoints for all masters
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create a unified Master data management interface
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 19: Reports
- **Phase 1: Backend**
  - [ ] ⏳ Task: Implement data aggregation pipelines for various reports
  - [ ] ⏳ Task: Create report-generation endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create a report selection/filter UI
  - [ ] ⏳ Task: Create components to display report data
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 20: Multi-Language Support
- **Phase 1: Backend**
  - [ ] ⏳ Task: Set up i18n library and language packs
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Integrate i18n library (e.g., react-i18next)
  - [ ] ⏳ Task: Create language switcher component
- **Phase 3: Integration**
  - [ ] ⏳ Task: Ensure language preference is stored and respected

### Model 21: Dynamic Dashboard
- **Phase 1: Backend**
  - [ ] ⏳ Task: Create endpoints to serve aggregated data for widgets
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Design and build dashboard grid layout
  - [ ] ⏳ Task: Create individual dashboard widgets
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect dashboard widgets to backend endpoints
