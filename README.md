# Anas Ahmed — Machine Learning Engineer Portfolio

A modern, high-performance, developer-focused personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, showcasing machine learning engineering projects, deep learning models, and certifications.

---

## ✨ Features

- **⚡ Lightning-Fast Performance**: Built with Vite and React 19 for instant page loads and seamless section transitions.
- **⌘ Command Palette (`⌘K`)**: Quick search modal allowing keyboard navigation to any section or social link.
- **🕒 Real-Time Clock & Status**: Live digital clock with an animated pulsing status indicator.
- **🎵 Ambient Music Player**: Embedded audio generator for relaxing background coding vibes.
- **🌗 Dark / Light Mode**: Full theme customization with automatic system preference detection.
- **📱 Responsive Layout**: Optimized for all devices from 320px mobile screens to ultra-wide desktop displays.
- **📊 Interactive Engagement**: Live reaction button ("Show Some Love") and codebase activity breakdown.
- **📁 Data-Driven**: All bio, experience, skills, projects, and social links are centrally managed in `src/data/portfolio.js`.

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Deployment**: GitHub Pages (`gh-pages` / GitHub Actions)

---

## 💻 Full Guide: Running the Portfolio Locally

Follow these detailed steps to set up, run, and develop the portfolio project on your local environment.

### 1. Prerequisites

Make sure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes bundled with Node.js)
- **Git**: ([Download Git](https://git-scm.com/))

Verify your environment version in your terminal:
```bash
node -v
npm -v
```

---

### 2. Step-by-Step Setup Instructions

#### Step 1: Open Terminal / Command Prompt
Open your terminal (PowerShell, Command Prompt, or Terminal on macOS/Linux).

#### Step 2: Navigate to your workspace directory
```bash
cd c:/Users/asus/Desktop/Yahya
```
*(Or clone your repo from GitHub)*:
```bash
git clone https://github.com/anasahmedx5/anasahmedx5.github.io.git
cd anasahmedx5.github.io
```

#### Step 3: Install Project Dependencies
Run `npm install` to download all required packages (`react`, `vite`, `tailwindcss`, `framer-motion`, `lucide-react`, etc.):
```bash
npm install
```

#### Step 4: Launch the Local Development Server
Run the local dev server:
```bash
npm run dev
```

You will see output similar to this:
```text
  VITE v8.2.1  ready in 488 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

#### Step 5: Open in Your Browser
Open your web browser (Chrome, Firefox, Edge, Safari) and go to:
👉 **[http://localhost:5173/](http://localhost:5173/)**

---

### 3. Available Terminal Commands

| Script | Terminal Command | Description |
|---|---|---|
| **Development** | `npm run dev` | Starts Vite dev server with hot module replacement (HMR) at `http://localhost:5173/` |
| **Build** | `npm run build` | Compiles production assets into the `dist/` directory |
| **Preview** | `npm run preview` | Runs a local static server to preview the production `dist/` build |
| **Deploy** | `npm run deploy` | Compiles the project and deploys it directly to **GitHub Pages** |

---

## ⚙️ Customizing Content

To update Anas's bio, social handles, projects, skills, or experience:

1. Open **`src/data/portfolio.js`**
2. Update the fields inside `portfolioData`:
   - `personal.name`, `personal.role`, `personal.email`
   - `socialLinks.github`, `socialLinks.linkedin`
   - `projects` (add/remove project cards)
   - `skills` (add/remove technology badges)
3. Save the file. The browser will update instantly via Vite HMR!

---

## 🚀 Deployment to GitHub Pages

To deploy your portfolio live:

```bash
npm run deploy
```

Or commit and push your changes to GitHub — the automated workflow at `.github/workflows/deploy.yml` will handle building and deploying automatically!

---

## 👤 Author

**Anas Ahmed**
- **GitHub**: [@anasahmedx5](https://github.com/anasahmedx5)
- **LinkedIn**: [Anas Ahmed](https://www.linkedin.com/in/anasahmedx5/)
- **Email**: [anasfekrywork@outlook.com](mailto:anasfekrywork@outlook.com)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
