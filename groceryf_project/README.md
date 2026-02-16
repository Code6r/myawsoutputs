# FreshCart - Grocery E‑Commerce Frontend

## Tech Stack

- React + Vite + TypeScript  
- Tailwind CSS  
- React Router DOM  
- Axios  
- TanStack React Query  
- Zustand  
- React Hook Form + Zod  
- Framer Motion  
- Lucide React  
- Sonner

## Setup & Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and adjust API URL if needed
cp .env.example .env
# edit .env and ensure:
# VITE_API_URL=http://localhost:8080

# 3. Run dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

The app expects a backend running at `http://localhost:8080` with standard REST endpoints for auth, products, cart, and orders. Update `VITE_API_URL` if your backend runs on a different host or port.

