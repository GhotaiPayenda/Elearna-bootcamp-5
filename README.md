# TaskFlow — Task Management System

A complete, responsive, full-stack task management system built with **React + Tailwind CSS + Vite** on the frontend and **Node.js + Express + MySQL** on the backend. It includes secure admin authentication, a live dashboard, full task CRUD with filtering/sorting, and category management with safe task reassignment.

> The task manager lives in [`frontend/`](./frontend) and [`backend/`](./backend). The unrelated Vite landing page that already existed at the repository root has been left untouched.

---

## Features

### Admin authentication
- Email/password login with client and server validation.
- Passwords hashed with **bcrypt** (12 rounds); plain-text passwords are never stored.
- **JWT** authentication with protected API routes and protected React routes.
- Persistent session, logout, and automatic redirect to `/login` for unauthenticated users.

### Dashboard
- Live metrics from MySQL: total, pending, in progress, completed, overdue, completion percentage.
- Status distribution donut and priority breakdown.
- Recent tasks and upcoming deadlines.
- Dashboard refreshes when revisited or via the Refresh button.

### Tasks
- Create, view, edit, delete tasks with confirmation.
- Title, description, category, priority, status, deadline, created/updated timestamps.
- Priorities: **Low, Medium, High, Urgent**.
- Statuses: **Pending, In Progress, Completed**.
- Quick status updates directly from the task table.
- Search by title, plus combined filters for status, priority, category, and deadline.
- Sorting by newest, oldest, deadline, priority, and title.
- Pagination, loading skeletons, empty states, error states, and toast notifications.
- Responsive table on desktop and card layout on mobile.

### Categories
- Create, view, edit, and delete categories.
- Category name, description, created date, and live task count.
- Case-insensitive unique category names.
- Deleting a category assigned to tasks is blocked with HTTP `409` unless the admin explicitly:
  - reassigns the tasks to another category, or
  - moves the tasks to **Uncategorized**.

### Design
- Modern SaaS-style admin interface with a dark navy sidebar, indigo accents, rounded cards, subtle shadows, Lucide icons, and smooth hover states.
- Collapsible desktop sidebar and off-canvas mobile navigation drawer.
- Responsive layouts for desktop, laptop, tablet, and mobile.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, Vite, Tailwind CSS v4, React Router DOM, Axios, Lucide React |
| Backend | Node.js, Express, REST APIs, JWT, bcrypt, mysql2 |
| Database | MySQL 8 |

No additional database or alternative framework is used.

---

## Project Structure

```text
.
├── backend/
│   ├── config/              # Environment and MySQL pool
│   ├── controllers/         # Auth, tasks, categories, dashboard
│   ├── middleware/          # JWT auth, 404, centralized errors
│   ├── models/              # Parameterized SQL queries
│   ├── routes/              # /api route definitions
│   ├── scripts/             # Database init + admin creation
│   ├── utils/               # JWT, validation, async wrapper, HttpError
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── database/
│   └── schema.sql           # MySQL database, tables, keys, indexes
├── frontend/
│   ├── src/
│   │   ├── components/      # Sidebar, Navbar, tables, forms, modals, etc.
│   │   ├── hooks/           # Auth, toast, debounce
│   │   ├── layouts/         # DashboardLayout
│   │   ├── pages/           # Login, Dashboard, Tasks, Categories, NotFound
│   │   ├── services/        # Axios API services
│   │   └── utils/           # Formatting helpers and constants
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## Prerequisites

- **Node.js** 20 or newer (tested with Node 26).
- **npm** 10 or newer.
- **MySQL** 8.x running locally or remotely.
- A MySQL account that can create databases and tables.

---

## Installation

### 1. Create the database

From the repository root:

```bash
mysql -u root -p < database/schema.sql
```

Or use the backend initialization script, which also creates the schema automatically:

```bash
cd backend
npm install
```

Create `backend/.env` from the example:

```bash
copy .env.example .env        # Windows
# cp .env.example .env        # macOS / Linux
```

Edit `backend/.env` and set at minimum:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=task_management_system

JWT_SECRET=replace_with_a_long_random_secret
ADMIN_NAME=System Administrator
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=Admin@12345
```

Then initialize the database and initial admin:

```bash
npm run db:init
```

This is idempotent: it creates the database/tables if needed and creates the admin only when that email does not already exist.

Alternatively, create an admin later:

```bash
npm run create-admin -- --name "Jane Admin" --email "jane@example.com" --password "AStrongPassword123"
```

### 2. Start the backend

```bash
cd backend
npm install          # if not already installed
npm run dev
```

The API runs at **http://localhost:5000**.
Health check: **http://localhost:5000/api/health**

### 3. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**.

The Vite dev server proxies `/api` to `http://localhost:5000`. To point the frontend at a deployed API instead, create `frontend/.env` from `frontend/.env.example` and set:

```env
VITE_API_URL=https://your-api.example.com/api
```

### 4. Sign in

If you used the example admin values:

- **Email:** `admin@example.com`
- **Password:** `Admin@12345`

> Change the default credentials before deploying. Passwords are hashed with bcrypt and are never stored in plain text.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
| --- | --- |
| `PORT` | API port, default `5000` |
| `NODE_ENV` | `development` or `production` |
| `CLIENT_URL` | Allowed CORS origin(s), comma-separated |
| `DB_HOST` | MySQL host |
| `DB_PORT` | MySQL port, default `3306` |
| `DB_USER` | MySQL user |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | Database name, `task_management_system` |
| `JWT_SECRET` | Long random signing secret |
| `JWT_EXPIRES_IN` | JWT lifetime, default `7d` |
| `ADMIN_NAME` | Name used by `db:init` / admin setup |
| `ADMIN_EMAIL` | Initial admin email |
| `ADMIN_PASSWORD` | Initial admin plain password (hashed before insert) |

### Frontend (`frontend/.env`)

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Optional full API base URL. Leave blank to use the Vite `/api` proxy. |

---

## API Reference

All task, category, and dashboard endpoints require:

```http
Authorization: Bearer <jwt-token>
```

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/auth/login` | Sign in with email/password, returns JWT + admin |
| `GET` | `/api/auth/me` | Return the authenticated admin |

### Tasks

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/tasks` | List/filter/search/sort tasks (paginated) |
| `GET` | `/api/tasks/:id` | Get one task |
| `POST` | `/api/tasks` | Create a task |
| `PUT` | `/api/tasks/:id` | Update a task |
| `PATCH` | `/api/tasks/:id/status` | Quick status update |
| `DELETE` | `/api/tasks/:id` | Delete a task |

### Categories

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/categories` | List categories with task counts |
| `GET` | `/api/categories/:id` | Get one category |
| `POST` | `/api/categories` | Create a category |
| `PUT` | `/api/categories/:id` | Update a category |
| `DELETE` | `/api/categories/:id` | Delete category, with optional reassignment |

### Dashboard

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/dashboard/stats` | Counts, completion %, status/priority overview |
| `GET` | `/api/dashboard/recent-tasks` | Latest tasks |
| `GET` | `/api/dashboard/upcoming-tasks` | Nearest incomplete deadlines |

### Task query parameters

`GET /api/tasks` supports:

| Parameter | Values / behavior |
| --- | --- |
| `search` | Matches task title (partial) |
| `status` | `Pending`, `In Progress`, `Completed` |
| `priority` | `Low`, `Medium`, `High`, `Urgent` |
| `categoryId` | Category ID, or `uncategorized` |
| `deadline` | `overdue`, `today`, `week`, `month` |
| `deadlineFrom` | `YYYY-MM-DD` |
| `deadlineTo` | `YYYY-MM-DD` |
| `sort` | `newest`, `oldest`, `deadline_asc`, `deadline_desc`, `priority`, `title_asc` |
| `page` | Page number, default `1` |
| `limit` | Page size, default `10`, max `100` |

All filters combine with `AND`.

### Category deletion

`DELETE /api/categories/:id` with tasks assigned:

```json
{ "strategy": "reassign", "reassignTo": 2 }
```

or move tasks to Uncategorized:

```json
{ "strategy": "uncategorize" }
```

Without a strategy, the API returns `409 Conflict` and leaves the category and tasks untouched.

---

## Database

Database: `task_management_system`

- `admins` — unique email, bcrypt password hash, timestamps.
- `categories` — unique name, description, timestamps.
- `tasks` — title, description, nullable category FK, priority/status enums, deadline, timestamps.
- Foreign key `tasks.category_id → categories.id` with `ON DELETE SET NULL ON UPDATE CASCADE`.
- Indexes on task status, priority, deadline, category, creation date, and title.
- Unique indexes on admin emails and category names.

Schema file: [`database/schema.sql`](./database/schema.sql).

---

## Security Notes

- Passwords are hashed with bcrypt; plain-text passwords are never persisted.
- JWT tokens are signed with `JWT_SECRET` and verified by middleware on every protected API route.
- All management endpoints are protected; the frontend uses a protected-route wrapper and redirects unauthenticated users to login.
- SQL uses `mysql2` prepared statements and parameterized values. Dynamic sort/order choices are whitelisted.
- Inputs are validated on the backend (required fields, lengths, enums, IDs, dates).
- Errors are centralized; internal errors are not exposed in production.
- Database credentials and JWT secrets are kept in environment variables; `.env` files are gitignored.
- CORS is restricted to `CLIENT_URL` origins.

For production, also use HTTPS, rotate `JWT_SECRET`, change default admin credentials, and consider rate limiting on the login endpoint.

---

## Available Scripts

### Backend (`backend/`)

| Command | Description |
| --- | --- |
| `npm run dev` | Start API with Node watch mode |
| `npm start` | Start API normally |
| `npm run db:init` | Create database, tables, and initial admin |
| `npm run create-admin -- --name ... --email ... --password ...` | Create an admin account |

### Frontend (`frontend/`)

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |

---

## Troubleshooting

**`Failed to connect to MySQL`**
- Verify MySQL is running and `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` are correct in `backend/.env`.
- If MySQL uses a non-default port, set `DB_PORT` accordingly.

**`ER_ACCESS_DENIED_ERROR`**
- The database user/password in `backend/.env` is incorrect. Fix it and restart the backend.

**`Cannot connect to API` / requests fail**
- Confirm the backend is running on port `5000` and the frontend proxy target in `frontend/vite.config.js` matches.
- If using a deployed frontend, set `VITE_API_URL` and make sure the backend `CLIENT_URL` includes the frontend origin.

**Login fails with the initial admin**
- Confirm `npm run db:init` completed and created the admin for the email in `.env`.
- Passwords are case-sensitive. Use `npm run create-admin` to create another admin if needed.

**Port already in use**
- Change `PORT` in `backend/.env` and update the Vite proxy target, or stop the process using the port.
