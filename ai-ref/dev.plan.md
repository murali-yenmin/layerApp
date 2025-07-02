# ⚖️ Law Practice SaaS - Legal Advocate & Counsel Manager - Development Plan

## 🧱 Tech Stack

### 🔹 Frontend
* React (TypeScript)
* SCSS / Tailwind (optional)
* Webpack
* React Router
* i18n (react-i18next)
* JWT Auth, 2FA
* Light/Dark Themes
* RTL / LTR Mode
* CMS-enabled Landing Page

### 🔹 Backend
* NestJS (TypeScript)
* MongoDB with Mongoose
* JWT Auth + Refresh Token
* Role-based Access Control (RBAC)
* i18n support
* Stripe / PayPal / Flutterwave / Bank Transfer Integration
* Dynamic Email Templates
* Global Settings & Preferences
* 2-Factor Authentication (OTP / Email)

## 📁 Folder Structure

### Frontend (`/frontend`)
```
/frontend
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── modules/
  │   │   ├── auth/
  │   │   ├── dashboard/
  │   │   ├── clients/
  │   │   ├── cases/
  │   │   ├── settings/
  │   ├── layouts/
  │   ├── services/
  │   ├── store/
  │   ├── i18n/
  │   ├── themes/
  │   └── App.tsx
  └── .env
```

### Backend (`/backend`)
```
/backend
  ├── src/
  │   ├── modules/
  │   │   ├── auth/
  │   │   ├── users/
  │   │   ├── clients/
  │   │   ├── cases/
  │   │   ├── subscriptions/
  │   │   ├── settings/
  │   ├── common/
  │   ├── config/
  │   ├── database/
  │   ├── i18n/
  │   └── main.ts
  └── .env
```

## 🧩 Core Features

### 🔐 Authentication & Security
* JWT + Refresh Token Auth
* 2FA via Email/OTP
* Impersonation Feature (Admin)

### 🧑‍⚖️ Legal Management
* Client Management
* Advocate Management
* Advice Tracking
* Case Management
* Case Hearing Scheduler
* Evidence & Document Management
* Case Stage Flow
* Court, Judge, Police Station, Practice Area Management
* Matter & Tag Classification

### 💼 Administration & SaaS Tools
* User Management
* Roles & Permissions
* Company Settings
* Application Settings
* Account Settings
* Email Notification Settings (Toggle)
* Subscription Plan Management
* Transaction Logs
* Coupon & History Management
* CMS-enabled Landing Page
* SEO Configuration
* Google Recaptcha Toggle
* Register Page Enable/Disable
* Email Verification Toggle
* Dynamic Email Templates
* Pricing Plan Section Enable/Disable

### 🎨 UI Settings
* Theme Mode: Light / Dark
* Multi-Theme Colors
* Font Family Selection
* RTL / LTR Toggle

## 🛠️ Phase-Based Development Plan

### ✅ Phase 1: Authentication & Roles
* JWT + Refresh Token Auth
* Register/Login with Email Verification
* 2FA Implementation
* Role & Permission Model
* Protected Routes (Frontend/Backend)
* Impersonate User Feature

### ✅ Phase 2: Dashboard & User Management
* Admin Dashboard with Stats
* User CRUD Module
* Role-Based Navigation
* Client Management CRUD

### ✅ Phase 3: Case Core Modules
* Case CRUD with Multi-stages
* Hearing Scheduler
* Evidence Upload/Preview
* Case Document Management
* Practice Area, Court, Judge Master Data
* Matter & Tags

### ✅ Phase 4: Subscription & Payments
* Stripe, PayPal, Flutterwave, Bank Transfer
* Subscription Plans
* Coupon Generator
* Transaction Logs
* Admin approval for Bank Transfers

### ✅ Phase 5: CMS, SEO & Global Settings
* Dynamic Landing Page Builder (EditorJS / Drag & Drop)
* Enable/Disable Landing and Register Page
* SEO Configuration
* Email Template Management
* Notification Toggles
* Google Recaptcha Toggle
* Global Settings Management Panel

### ✅ Phase 6: UI & Theming
* Light / Dark Mode
* Multi-Color Theme Switcher
* RTL / LTR Toggle
* Font Family Changer
