# 🏍️ Rental Motor Surabaya RMR 2

> *Sewa Motor Surabaya Terpercaya 24 Jam – Unit Terawat & Fast Response*

Website profesional untuk bisnis sewa motor di Surabaya dengan rating Google 4.8/5.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS + Framer Motion
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Deployment**: Docker + Nginx

## 📁 Project Structure

```
rmr2-rental-motor/
├── docker/
│   └── nginx/
│       └── default.conf
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── Dockerfile
├── backend/
│   ├── src/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🛠️ Requirements

- Docker & Docker Compose
- Node.js 18+ (for local development)
- RAM minimal 2GB

## 🐳 Docker Deployment

### 1. Clone Repository

```bash
git clone https://github.com/yourrepo/rmr2-rental-motor.git
cd rmr2-rental-motor
```

### 2. Build & Run

```bash
docker-compose up -d --build
```

### 3. Access Website

```
http://localhost
```

### 4. View Logs

```bash
docker-compose logs -f
```

### 5. Stop Services

```bash
docker-compose down
```

## 💻 Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Access at `http://localhost:3000`

### Backend

```bash
cd backend
npm install
npm run dev
```

API available at `http://localhost:3001`

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/motors` | Get all motorcycles |
| GET | `/api/motors/:category` | Get motors by category |
| GET | `/api/testimonials` | Get all testimonials |

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Dark Background | `#0a0a0a` | Main background |
| Dark Gray | `#1a1a1a` | Card backgrounds |
| Orange Accent | `#ff6b35` | Primary CTA |
| Neon Green | `#00ff88` | Secondary accent |

### Typography

- **Primary Font**: Inter
- **Headings**: Bold 600-700
- **Body**: Regular 400

## 📱 Features

- ✅ Mobile-first responsive design
- ✅ Dark mode default
- ✅ Sticky WhatsApp CTA
- ✅ SEO optimized (Meta, OG, Schema)
- ✅ Micro-animations with Framer Motion
- ✅ Fast loading (< 1.5s)

## 📍 Business Info

**Address:** Jl. Kedung Tarukan Wetan No.2B, Mojo, Kec. Gubeng, Surabaya, Jawa Timur 60132

**WhatsApp:**
- +62 895-1810-4096
- 0838-3093-9338

**Social Media:** @rentalmotorsurabaya_19

## 📄 License

© 2025 Rental Motor Surabaya RMR 2. All rights reserved.
