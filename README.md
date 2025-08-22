# Job Task App

## Short Project Description

A simple Next.js 15 application using App Router with basic authentication via
NextAuth.js. Features include a public landing page, product list and details,
and a protected dashboard for adding products. Products are stored in a mock
JSON database.

## Setup & Installation Instructions

1. Clone the repository: `git clone <your-repo-url>`
2. Navigate to the directory: `cd job-task`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open http://localhost:3000 in your browser.

Note: Use username "admin" and password "password" for login (hardcoded for
demo).

## Route Summary

- `/`: Landing page (public)
- `/login`: Login page
- `/products`: Product list (public)
- `/products/[id]`: Product details (public)
- `/dashboard/add-product`: Add product (protected, requires login)
