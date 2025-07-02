# ⚖️ Law Practice SaaS - Legal Advocate & Counsel Manager

A full-featured SaaS platform for legal advocates and law firms, developed using **React + NestJS** stack.

---

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

---

## 🚀 Project Setup Status

✅ Basic frontend setup completed (React, Webpack, TypeScript, Router, SCSS)
✅ Basic backend setup completed (NestJS, MongoDB, Mongoose, project structure)

**Prompt to Continue Development:**

> Continue development of the Law Practice SaaS platform from the existing basic frontend and backend setup. Ensure all new modules follow modular architecture, use consistent naming conventions, and follow phase-wise implementation starting from authentication and roles.

---

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

---

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

---

## 📦 Example .env Files

### Frontend (`/client/.env`)

```
REACT_APP_API_BASE_URL=http://localhost:3000/api
REACT_APP_RECAPTCHA_SITE_KEY=your-site-key
REACT_APP_THEME_MODE=dark
REACT_APP_LANGUAGE=en
REACT_APP_ENABLE_REGISTER=true
REACT_APP_ENABLE_LANDING_PAGE=true
```

### Backend (`/server/.env`)

```
PORT=3000
DB_URI=mongodb://localhost:27017/lawdesk
JWT_SECRET=supersecretkey
JWT_EXPIRATION=3600s
REFRESH_TOKEN_SECRET=refreshsupersecret
REFRESH_TOKEN_EXPIRATION=7d
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
STRIPE_KEY=your_stripe_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
FLUTTERWAVE_SECRET_KEY=your_flutterwave_secret
RECAPTCHA_SECRET_KEY=your-recaptcha-secret
MULTI_LANGUAGE=true
DEFAULT_LANGUAGE=en
ENABLE_EMAIL_VERIFICATION=true
ENABLE_2FA=true
```

---

## 📊 Task Tracking Board

Project Summary

🟢 Active Phase: Phase 2 – Dashboard & User Management (➡️ ACTIVE)

🗓️ Last Updated: 2025-07-02

📈 Overall Progress: 13 / 40 tasks completed (32.5%)

Prompt: Update this board regularly during development to reflect task changes.

### Status Legend

* ⭕ TODO: Not started
* ➡️ IN PROGRESS: Currently working on
* ✅ COMPLETED: Task finished successfully
* ❌ ERROR: Task blocked or failed
* ⚠️ REVIEW: Needs review or testing

### Phase Status Legend

* ➡️ ACTIVE: Currently working on this phase
* ⚪ PENDING: Phase not started
* ✅ COMPLETED: All tasks in phase completed
* ❌ BLOCKED: Phase has blocking errors

---

## 🌐 i18n: Multi Language Support

* React: `react-i18next` setup
* NestJS: `nestjs-i18n` with translation JSONs
* Auto-detect language by user preference or browser

---

## 💳 Payment Integrations

* Stripe
* PayPal
* Flutterwave
* Bank Transfer (manual approval by Admin)
* Subscriptions + Expiry Control
* Coupon System

---

## 📘 README & Documentation

* Setup guide (frontend & backend)
* Deployment (Docker, Vercel, Heroku)
* Admin credentials & onboarding
* Module-wise API Docs (Swagger)

---

## 🔐 Optional Enhancements

* Notifications (Toast, Email, SMS)
* Audit Log for Admin Actions
* Calendar View for Hearings
* Drag & Drop CMS Pages
* Backup & Restore Database
