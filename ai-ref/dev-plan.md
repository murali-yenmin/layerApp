# ⚖️ Advocate Office Management System – Full Development Plan

This document outlines the complete development plan, breaking the project into logical models and phases as required by `GMINI.MD`.

---

##  Models & Development Order
1.  **User, Auth, & Profiles** (Secure Login, Profiles Management)
2.  **Role & Permission Management**
3.  **Staff Management**
4.  **Client Management**
5.  **Advocate Management**
6.  **Company Management**
7.  **Case & Matter Management** (Case Management, Add New Matters)
8.  **Hearing Management**
9.  **Evidence Handling**
10. **Document Management**
11. **Invoice Management**
12. **Expense Management** (Office Expenses, Add New Expense Types)
13. **Advice Logging**
14. **Contact Management**
15. **Notes Management**
16. **Tags Management**
17. **Masters Database**
18. **Reports**
19. **Multi-Language Support**
20. **Dynamic Dashboard**

---

## Phase-Based Development Plan

### Model 1: User, Auth, & Profiles
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
  - [ ] ⏳ Task: Implement E2E tests for auth flows

### Model 2: Role & Permission Management
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

### Model 3: Staff Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Staff schema
  - [ ] ⏳ Task: Implement Staff CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Staff list view
  - [ ] ⏳ Task: Create Add/Edit Staff forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 4: Client Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Client schema
  - [ ] ⏳ Task: Implement Client CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Client list view
  - [ ] ⏳ Task: Create Add/Edit Client forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 5: Advocate Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Advocate schema
  - [ ] ⏳ Task: Implement Advocate CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Advocate list view
  - [ ] ⏳ Task: Create Add/Edit Advocate forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 6: Company Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Company schema
  - [ ] ⏳ Task: Implement Company CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Company list view
  - [ ] ⏳ Task: Create Add/Edit Company forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 7: Case & Matter Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Case/Matter schema with relations
  - [ ] ⏳ Task: Implement Case/Matter CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Case/Matter list view
  - [ ] ⏳ Task: Create Add/Edit Case/Matter forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 8: Hearing Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Hearing schema with relations
  - [ ] ⏳ Task: Implement Hearing CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Hearing list/calendar view
  - [ ] ⏳ Task: Create Add/Edit Hearing forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 9: Evidence Handling
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Evidence schema with file references
  - [ ] ⏳ Task: Implement Evidence CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Evidence list view for cases
  - [ ] ⏳ Task: Create Evidence upload/edit forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 10: Document Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Document schema with file storage logic
  - [ ] ⏳ Task: Implement Document CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Document repository view
  - [ ] ⏳ Task: Create Document upload/management forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 11: Invoice Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Invoice & LineItem schemas
  - [ ] ⏳ Task: Implement Invoice CRUD and PDF generation
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Invoice list view
  - [ ] ⏳ Task: Create Invoice creation/editing form
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 12: Expense Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Expense & ExpenseType schemas
  - [ ] ⏳ Task: Implement CRUD endpoints for both
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Expense list view
  - [ ] ⏳ Task: Create Add/Edit Expense forms
  - [ ] ⏳ Task: Create ExpenseType management UI
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 13: Advice Logging
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define AdviceLog schema
  - [ ] ⏳ Task: Implement AdviceLog CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create AdviceLog list view
  - [ ] ⏳ Task: Create Add/Edit AdviceLog forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 14: Contact Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Contact schema
  - [ ] ⏳ Task: Implement Contact CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Contact list view
  - [ ] ⏳ Task: Create Add/Edit Contact forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 15: Notes Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Note schema with polymorphic relations
  - [ ] ⏳ Task: Implement Note CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Notes view component for related items
  - [ ] ⏳ Task: Create Add/Edit Note forms
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 16: Tags Management
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define Tag schema with polymorphic relations
  - [ ] ⏳ Task: Implement Tag CRUD endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create Tag management UI
  - [ ] ⏳ Task: Create component to add/remove tags on items
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 17: Masters Database
- **Phase 1: Backend**
  - [ ] ⏳ Task: Define schemas for all master data (e.g., Court, CaseType)
  - [ ] ⏳ Task: Implement CRUD endpoints for all masters
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create a unified Master data management interface
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 18: Reports
- **Phase 1: Backend**
  - [ ] ⏳ Task: Implement data aggregation pipelines for various reports
  - [ ] ⏳ Task: Create report-generation endpoints
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Create a report selection/filter UI
  - [ ] ⏳ Task: Create components to display report data
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect UI to backend endpoints

### Model 19: Multi-Language Support
- **Phase 1: Backend**
  - [ ] ⏳ Task: Set up i18n library and language packs
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Integrate i18n library (e.g., react-i18next)
  - [ ] ⏳ Task: Create language switcher component
- **Phase 3: Integration**
  - [ ] ⏳ Task: Ensure language preference is stored and respected

### Model 20: Dynamic Dashboard
- **Phase 1: Backend**
  - [ ] ⏳ Task: Create endpoints to serve aggregated data for widgets
- **Phase 2: Frontend**
  - [ ] ⏳ Task: Design and build dashboard grid layout
  - [ ] ⏳ Task: Create individual dashboard widgets
- **Phase 3: Integration**
  - [ ] ⏳ Task: Connect dashboard widgets to backend endpoints
