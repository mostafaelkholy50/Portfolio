# Atelier Jany - Workshop Management System

[![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.2+-777BB4?style=for-the-badge&logo=php)](https://php.net)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

**Atelier Jany** is a professional, modern management system specifically designed for tailoring workshops and ateliers. It streamlines the entire workflow from client onboarding and measurement tracking to order management and payment processing.

---

## 🚀 Key Features

### 📋 Order Management
- **Full Lifecycle Tracking**: Manage orders from initial deposit to final delivery.
- **Status Toggles**: Easily switch between order states (Pending, In Progress, Completed).
- **Design Uploads**: Attach design sketches or reference images to each order.

### 📏 Dynamic Measurement System
- **Category-Specific Metrics**: Define default measurements for different item types (e.g., Dresses vs. Suits).
- **Auto-loading Forms**: When an order category is selected, the system automatically fetches and displays the relevant measurement fields using a JSON-driven API.
- **Measurement History**: Keep track of client measurements for future orders.

### 👤 Client CRM
- **Detailed Profiles**: Store client contact information and personal details.
- **Order History**: View all past and current orders for any specific client at a glance.

### 📊 Dashboard & Analytics
- **At-a-glance Overview**: Monitor active orders, total revenue, and upcoming deliveries.
- **User-Friendly Interface**: Clean, intuitive dashboard built for efficiency.

---

## 🛠️ Tech Stack

- **Backend**: [Laravel 12](https://laravel.com) (latest features and stability)
- **Frontend**: Blade Templates, [Tailwind CSS](https://tailwindcss.com), and [Vite](https://vitejs.dev)
- **Authentication**: [Laravel Breeze](https://laravel.com/docs/breeze)
- **Database**: Eloquent ORM with support for MySQL/PostgreSQL/SQLite
- **API**: Lightweight internal JSON API for dynamic UI updates

---

## ⚙️ Installation & Setup

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js & NPM
- Database (MySQL, SQLite, etc.)

### Quick Setup
The project includes a streamlined setup script:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd atelier-jany
   ```

2. **Run the one-step setup**:
   ```bash
   composer run setup
   ```
   *This command handles: `composer install`, `.env` creation, `key:generate`, `migrate`, `npm install`, and `npm run build`.*

### Manual Installation
If you prefer manual steps:
```bash
composer install
cp .env.example .env
php artisan key:generate
# Configure your .env database settings
php artisan migrate
npm install
npm run dev
```

---

## 📁 Project Structure

- `app/Models/Order.php`: Core order logic with JSON casting for measurements.
- `app/Models/ItemCategory.php`: Defines the measurement templates for different garments.
- `app/Models/Client.php`: Manages client relationships.
- `resources/views/`: Modern Blade layouts styled with Tailwind CSS.
- `routes/web.php`: Clean, resource-based routing for all modules.

---
