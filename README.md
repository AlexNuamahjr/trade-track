# trade-track

A full-stack Inventory and POS system for managing products, sales, and multi-store operations. Built with modern technologies, designed for scalability and real-world business use.

## 🚀 Features

- User Authentication & Roles
- Admin, Manager, Cashier roles
- JWT-based authentication & refresh tokens
- Inventory Management
- Add, update, delete products
- Stock tracking across multiple stores
- Sales & POS Module
- Process sales in real-time
- Generate receipts/invoices
- Handle discounts, returns, and refunds
- Reports & Analytics
- Sales reports (daily, weekly, monthly)
- Low-stock alerts
- Revenue dashboards
- Multi-Store Support
- Centralized database for all stores
- Store-specific sales & inventory tracking

## 🏗️ System Architecture

- The system follows a modular monolith (can later scale to microservices).
- Frontend: React (with Tailwind/Bootstrap for UI)
- Backend: Node.js (Express.js + TypeScript)
- Database: PostgreSQL with Prisma ORM
- Auth: JWT & bcrypt for secure authentication
- Deployment: Docker & CI/CD ready (future milestone)

## 📂 Project Structure

trade-track/
│── backend/        # Express.js + Prisma backend
│── frontend/       # React frontend
│── docs/           # Documentation & diagrams
│── scripts/        # Helper scripts
│── .env.example    # Example environment variables
│── docker-compose.yml
│── README.md

## ⚡ Tech Stack

- Backend: Node.js, Express.js, TypeScript, Zod (validation)
- Frontend: React, Tailwind CSS, Axios
- Database: PostgreSQL + Prisma ORM
- Authentication: JWT, bcrypt
- Dev Tools: ESLint, Prettier, Nodemon

## 🛠️ Getting Started

1️⃣ Clone the repo
```bash
git clone https://github.com/AlexNuamahjr/trade-track.git
cd trade-track
```

2️⃣ Backend Setup

- cd backend
- cp .env.example .env
- npm install
- npx prisma migrate dev
- npm run dev

3️⃣ Frontend Setup

- cd frontend
- npm install
- npm run dev

## 📈 Roadmap

- User authentication & roles
- Inventory CRUD operations
- Sales/POS module
- Reporting & dashboards
- Multi-store support

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
Steps:

- Fork the repo
- Create a feature branch (git checkout -b feature/new-feature)
- Commit changes (git commit -m 'Add new feature')
- Push branch (git push origin feature/new-feature)
- Open a Pull Request
