# 👟 Replay Store - Premium Footwear E-commerce Platform

[![Laravel](https://img.shields.io/badge/Laravel-12.0-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)

Replay Store is a modern, high-performance e-commerce platform dedicated to premium footwear. Built with **Laravel 12**, it provides a seamless shopping experience for customers and a powerful management dashboard for administrators. The store specializes in various shoe categories, including Sneakers, Classic Shoes, and Flats, with a special focus on Plus Sizes.

---

## ✨ Features

### 🛍️ Customer-Facing Features
- **Dynamic Catalog**: Browse a wide range of shoes categorized by style and size.
- **Product Details**: High-quality image galleries, color selection, and size picking.
- **Advanced Filtering**: Quickly find products by category or special collections like "Best Sellers" and "Plus Sizes".
- **Product Reviews**: Customer-driven feedback system with administrative approval.
- **Seamless Checkout**: A streamlined one-page checkout process with governorate-based shipping calculation.
- **Mobile First Design**: Fully responsive UI/UX designed for the best shopping experience on any device.

### ⚙️ Administrative Dashboard
- **Product Management**: Full CRUD operations for products, including support for multiple images, variants (colors/sizes), and pricing.
- **Order Tracking**: Comprehensive management of orders with status updates (Pending, Delivered, Canceled).
- **Category & Collection Management**: Organize inventory into logical categories and highlight special collections.
- **Shipping Control**: Manage different governorates and their respective shipping costs.
- **Review Moderation**: Advanced panel to approve or remove customer reviews to maintain quality.
- **Discount System**: Create and manage promotional discounts to boost sales.

---

## 🛠️ Technology Stack

- **Backend**: [Laravel 12](https://laravel.com) (PHP 8.2+)
- **Frontend**: [Tailwind CSS](https://tailwindcss.com) & [Alpine.js](https://alpinejs.dev)
- **Asset Bundling**: [Vite](https://vitejs.dev)
- **Database**: SQLite (Development) / MySQL (Production)
- **Authentication**: Laravel Breeze

---

## 🚀 Installation & Setup

Follow these steps to get the project running locally:

### 1. Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js & NPM

### 2. Clone the Repository
```bash
git clone <repository-url>
cd replay-store
```

### 3. Install Dependencies
```bash
composer install
npm install
```

### 4. Environment Configuration
Copy the `.env.example` to `.env` and configure your database settings:
```bash
cp .env.example .env
php artisan key:generate
```

### 5. Run Migrations & Seeders
```bash
php artisan migrate --seed
```

### 6. Compile Assets & Start Server
```bash
npm run dev
# In a separate terminal
php artisan serve
```

---

## 📂 Project Structure Highlights

- **`app/Models`**: Houses 11 core models including `Product`, `Order`, `Governorate`, and `Discount`.
- **`resources/views`**: Clean Blade templates structured into components and layouts.
- **`routes/web.php`**: Organized routes with separation between public user routes and authenticated admin dashboard routes.

---

