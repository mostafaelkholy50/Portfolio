<p align="center">
  <h1 align="center">🏋️ Core</h1>
  <p align="center"><strong>Multi-Tenant Gym Management System</strong></p>
</p>

## 📌 Overview
**Core** is a modern, comprehensive Multi-Tenant management system specifically designed for gym chains and fitness centers. 

Built around a robust architecture using `stancl/tenancy`, it empowers a **SuperAdmin** to effortlessly spawn and manage multiple independent gym branches from a central hub. Every newly registered gym (Tenant) receives its own completely isolated database and a dedicated subdomain (e.g., `gym1.core.test`), ensuring absolute data sovereignty, top-tier security, and limitless scalability.

---

## 🛠 Tech Stack
- **Framework:** Laravel 12
- **Multi-Tenancy Engine:** `stancl/tenancy` (Database-per-tenant isolation & subdomain routing)
- **Frontend & UI:** Laravel Blade, Tailwind CSS
- **Real-Time WebSockets:** Laravel Reverb & Laravel Echo
- **Asset Bundler:** Vite & Node.js

---

## 🏗 System Architecture & Key Features

The platform is strictly divided into two powerful domains:

### 1. 🌐 Central Hub (SuperAdmin)
Operates on the root domain (`core.test`) and provides full control over the ecosystem.
- **Tenant Lifecycle Management:** Instantly create, activate, pause, or remove gym branches. Launching a new gym automatically provisions a secure database and executes all necessary migrations on the fly.
- **Global Support Center:** A real-time, WebSocket-powered chat module allowing central administration to instantly assist gym owners and resolve operational issues without page refreshes.
- **Profile Configuration:** Easy management of SuperAdmin credentials and personal details.

### 2. 🏢 Gym Dashboard (Tenant)
Operates independently on dedicated subdomains (`{tenant}.core.test`). Data is completely siloed; no gym has knowledge or access to another.
- **Membership Plans & Packages:** Configure diverse subscription tiers (e.g., "1 Month CrossFit", "12 Sessions Yoga") tailored to specific business needs.
- **Coach Directory:** Register and manage fitness instructors and trainers, seamlessly linking them to activities.
- **Client & Subscription CRM:** Comprehensive client profiles. Assign, renew, or track detailed subscription histories effortlessly.
- **Swift Attendance / Point of Sale:** A highly optimized interface designed for front-desk staff. Quickly process member entries and automatically deduct sessions from their active subscription balances. 
- **Live Support Interface:** Direct, real-time messaging pipeline to communicate seamlessly with the SuperAdmin for technical support.
- **Tenant Profile & Settings:** Manage local gym settings and security credentials.

---

## 🚀 Local Development Setup

To boot up the application locally, you must run both the asset compiler and the WebSocket server to utilize all real-time features.

### Prerequisites
1. Install system dependencies:
   ```bash
   composer install
   npm install
   ```
2. **Database Configuration:**
   Ensure the database user configured in your `.env` has privileges to dynamically create new databases (required by the tenant engine). Then, run core migrations:
   ```bash
   php artisan migrate
   ```

### Running the Services

Keep the following terminal operations running concurrently:

**1. Frontend Asset Compilation:**
Processes Blade directives and Tailwind CSS classes in real-time.
```bash
npm run dev
```

**2. WebSocket (Reverb) Server:**
Required for the live Customer Care Chat. *(Note: If this is offline, support requests will fail to initialize.)*
```bash
php artisan reverb:start
```

---

## 💻 Helpful Artisan Commands

When developing in a multi-tenant environment, tenant-aware commands are highly useful:
- `php artisan tenants:migrate`  
  *Executes and propagates migrations across **all** isolated tenant databases synchronously.*
- `php artisan tenants:run shell`  
  *Boots an interactive terminal to test and interact specifically within the isolated context of a selected tenant.* 

---
<p align="center">Built with ⚡ using Laravel & Tailwind CSS.</p>
