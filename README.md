# Upliance Dashboard

A React-based web application featuring user authentication, a dynamic dashboard with Chart.js visualizations, and various utility components like a counter and text editor. Built with Tailwind CSS for styling and Framer Motion for smooth animations, this project is designed to be hosted on Netlify.

## Features

- **User Authentication**: Register and login with mock authentication using localStorage.
- **Dashboard**: Displays random data in a bar chart using Chart.js, accessible only when logged in.
- **Dynamic Navbar**:
  - Shows "Log Out" when logged in and "Sign Up" when logged out.
  - Includes a Dashboard link when authenticated.
- **Components**:
  - **Counter**: Increment, decrement, and reset a counter with a dynamic background color.
  - **Text Editor**: Rich text editing with Jodit Editor and live preview.
  - **Feature Cards**: Animated cards showcasing key features.
  - **Landing Page**: Hero section with an image and call-to-action buttons.
- **Animations**: Smooth transitions and effects using Framer Motion across all components.
- **Unsaved Changes Warning**: Browser prompt when leaving forms with unsaved data.
- **Responsive Design**: Styled with Tailwind CSS for a consistent look across devices.

## Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (v8 or higher recommended)

## Installation

### Clone the Repository
```sh
git clone https://github.com/SaiPrakash-voldemort/UplianceAiAssignment.git
cd upliance-dashboard
```

### Install Dependencies
```sh
npm install
```

### Run Locally
```sh
npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173).

## Project Structure
```
upliance-dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── uplianceai.webp
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── Dashboard.jsx
│   │   ├── FeatureCards.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── NavBar.jsx
│   │   ├── Register.jsx
│   │   └── TextEditor.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── NavBar.css
├── tailwind.config.js
├── package.json
└── README.md
```

## Dependencies

The project uses the following dependencies:

- **React**: ^18.2.0
- **React Router DOM**: For navigation (`react-router-dom`)
- **Framer Motion**: For animations (`framer-motion`)
- **Chart.js & React ChartJS 2**: For dashboard charts (`chart.js`, `react-chartjs-2`)
- **Jodit React**: For text editor (`jodit-react`)
- **HTML React Parser**: For rendering editor content (`html-react-parser`)
- **Tailwind CSS**: For styling (`tailwindcss`)

### Install Dependencies
```sh
npm install react-router-dom framer-motion chart.js react-chartjs-2 jodit-react html-react-parser tailwindcss
```

## Usage

- **Register**: Go to `/signup`, fill out the form, and submit to create an account (stored in localStorage).
- **Login**: Go to `/login`, enter credentials, and redirect to `/dashboard` on success.
- **Dashboard**: View random data in a bar chart; logout to return to login.
- **Counter**: Increment/decrement a counter with a changing background.
- **Text Editor**: Write and preview rich text content.
- **Landing Page**: Explore features and external links.

---

This project is designed to be easily deployed and provides a feature-rich dashboard experience with smooth animations and an intuitive UI. 🚀

