# Trade-Track – Inventory & POS System

- Inventra is a multi-store inventory and point-of-sale (POS) system built with modern technologies. It helps businesses efficiently manage stock, sales, and reporting across multiple store branches.
- This project is organized as a Yarn monorepo with separate apps and shared packages.

## 🚀 Features

- Manage multiple stores with centralized inventory control
- POS system with sales tracking and invoicing
- Role-based authentication (Admin, Store Manager, Staff)
- Real-time stock updates and low-stock alerts
- Reporting & analytics (daily/weekly/monthly sales, expenses, profit)
- Background workers for tasks like email notifications & scheduled reports (future)

## 📂 Project Structure-

 trade-track/
│── apps/
│   ├── backend/      # Express.js + Prisma + PostgreSQL API
│   ├── frontend/     # React frontend
│   └── worker/       # Background jobs & scheduled tasks
│
│── packages/
│   └── shared/       # Shared utils, constants, types
│
├── package.json      # Root Yarn workspace config
├── yarn.lock

## ⚙️ Tech Stack

- Backend → Node.js, Express.js, Prisma, PostgreSQL
- Frontend → React, Tailwind CSS
- Worker → Node.js (BullMQ for background jobs)
- Shared → TypeScript utilities & common logic
- Package Manager → Yarn Workspaces (Monorepo)

## 🛠️ Getting Started

## Clone the Repository
```bash
git clone https://github.com/AlexNuamahjr/trade-track.git
cd trade-track
```

## Install Dependencies

- yarn install

## Setup Environment Variables

## Backend (API)

- yarn workspace backend dev

## Frontend (UI)

- yarn workspace frontend dev

## Worker (Background Jobs)

- yarn workspace worker dev

## 📦 Monorepo Commands

- Install all dependencies:

## Add a dependency to a specific workspace

- yarn workspace backend add express

## Run scripts for a workspace

- yarn workspace backend app

## 🤝 Contributing

- Contributions are welcome! Please fork the repo and submit a pull request.

## 📜 License

- This project is licensed under the MIT License.
