# Assessment Auth & Dashboard App

A modern, modular Vue 3 app featuring reusable authentication layouts, configurable components, and a dashboard UI. Built with Vite, Vue Router, and Bootstrap 5.

> **Note:**
> - The current pages are static and not fully responsive yet.
> - The tables screen/page is not yet implemented.

## Features
- Modular, reusable, and configurable Vue components
- Centralized color and style management
- Social login icons using original SVGs
- Auth layout and form layouts with slots and props
- Dashboard with stat cards and responsive design

## Navigation & Flow
- **Sign Up Page:** Click **Sign In** at the bottom to go to the Sign In page.
- **Sign In Page:** Click **Sign In** to go to the Dashboard.
- **Dashboard:** Click the profile dropdown (top right) and select **Logout** to return to the Sign Up page.

## Project Structure
- `src/components/` — Reusable UI components (AuthLayout, AuthFormLayout, SocialIcons, PasswordField, Divider, DashboardCard, etc.)
- `src/assets/` — Images, SVGs, and color variables
- `src/SignIn.vue`, `src/SignUp.vue` — Auth pages using reusable components
- `src/Dashboard.vue` — Main dashboard page

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/ashleyirasusta/Redesign.git
   cd Redesign
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the development server**
   ```sh
   npm run dev
   ```
   The app will be available at the local address shown in your terminal (usually http://localhost:5173 or similar).

4. **Build for production**
   ```sh
   npm run build
   ```

## Usage & Customization
- **Colors:** Edit `src/assets/colors.js` and `colors.module.css` for your theme.
- **Branding:** Pass `logo`, `backgroundImage`, and `footerLinks` props to `AuthLayout` for custom branding.
- **Reusable Components:** Use and extend components in `src/components/` for new features/pages.
