# Washy - Multi-Tenant Business Management SaaS

Washy is a comprehensive, professional Multi-Tenant Business Management System (SaaS) built with Laravel. It is designed to provide businesses (Tenants) with a powerful dashboard to manage their customers, orders, payments, and online presence, while providing a SuperAdmin with full control over the entire platform.

## 🚀 Key Features

### 🏢 Multi-Tenancy Architecture
- **Tenant Isolation**: Each business operates in its own isolated environment with dedicated data.
- **Subdomain/Domain Support**: Powered by `stancl/tenancy` for seamless scaling.
- **Subscription Control**: SuperAdmin can manage tenant access and subscription status.

### 👑 SuperAdmin Dashboard (Central Control)
- **Tenant Management**: Create, update, and manage business accounts (Tenants).
- **Global User Management**: Control administrative access to the platform.
- **Global Settings**: Configure system-wide branding, SEO, and contact information.
- **Central CMS**: Manage the main landing page content (Slides, Services, Portfolios, Team Members, etc.).
- **System Backups**: Full system data export and import tools.

### 💼 Tenant Dashboard (Business Admin)
- **Order Management**: Complete workflow for creating and tracking orders.
- **Customer CRM**: Maintain a database of client information and history.
- **Product & Inventory**: Manage services or products offered by the business.
- **Financial Tools**:
  - Payment tracking and receipt generation.
  - Multi-currency support with favorite currency settings.
  - Customer balance management.
- **Whitelabel Branding**: Tenants can customize their own branding and landing page sections.
- **Digital Receipts**: Generate professional PDFs for orders and payments.

### 🌐 Frontend & CMS
- **Dynamic Landing Page**: A fully responsive landing page that adapts to either the central platform or specific tenant data.
- **Bilingual Support**: Full localization in **Arabic** and **English**.
- **Content Blocks**: Manageable sections for Services, Portfolio, Skills, Timelines, and Team.

### 🛠 Technical Excellence
- **Backup System**: Custom-built backup/restore functionality using `.washy` format for easy data migration.
- **Export/Import**: Support for Excel and PDF exports (mPDF, Laravel Excel).
- **Modern UI**: Clean, responsive dashboards for both SuperAdmin and Tenants.

---

## 💻 Tech Stack

- **Framework**: [Laravel 12.x](https://laravel.com)
- **PHP**: ^8.2
- **Database**: MySQL / SQLite
- **Multi-Tenancy**: [Tenancy for Laravel](https://tenancyforlaravel.com/)
- **Styling**: Tailwind CSS & Vanilla CSS
- **Frontend Tools**: Vite, Blade Components
- **PDF Generation**: [mPDF](https://github.com/carlos-meneses/laravel-mpdf)
- **Excel Support**: [Laravel Excel](https://laravel-excel.com/)
- **Translations**: [Spatie Laravel Translatable](https://github.com/spatie/laravel-translatable)

---

## 🛠 Installation

### Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js & NPM
- MySQL or SQLite

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd washy
   ```

2. **Install Dependencies**:
   ```bash
   composer install
   npm install
   ```

3. **Environment Setup**:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Database Configuration**:
   Create a database and update your `.env` file credentials.

5. **Migrations & Seeders**:
   ```bash
   php artisan migrate --seed
   ```

6. **Build Assets**:
   ```bash
   npm run build
   ```

7. **Run the Application**:
   ```bash
   php artisan serve
   ```

---

## 📦 Project Structure

- `app/Http/Controllers/SuperAdmin`: Logic for platform-wide management.
- `app/Http/Controllers/Admin`: Logic for tenant-specific business operations.
- `app/Models`: Core business entities and relationships.
- `routes/superadmin.php`: Dedicated routes for SuperAdmin.
- `routes/tenant.php`: Routes for tenant-specific subdomains.
- `resources/lang`: Translation files for Arabic and English.

---

## ⚖️ License

This project is licensed under the MIT License.
