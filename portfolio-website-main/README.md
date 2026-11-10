# Project Summary

**Name:** printrocket-portfolio
**Description:** Personal portfolio website for Gavendra Singh (Founder & CEO of PrintRocket).
**Architecture:** A static, single-page website built with HTML and CSS, bundled using Vite.

This project serves as a personal portfolio showcasing skills, experience, and services offered by Gavendra Singh. It features a modern, responsive design with custom CSS styling and animations.

## Tech Stack & Tools

*   **Frontend Core:** HTML5, CSS3 (Vanilla). No JavaScript frameworks (like React or Vue) are used.
*   **Build Tool / Dev Server:** [Vite](https://vitejs.dev/) (v5.2.0).
    *   Start development server: `npm run dev`
    *   Build for production: `npm run build`
    *   Preview production build: `npm run preview`
*   **Styling:** 
    *   Custom CSS (`style.css` and embedded styles in `index.html`).
    *   Utilizes CSS variables for theming (e.g., `--brown`, `--amber`, `--cream`).
    *   Google Fonts (Outfit).
    *   Font Awesome (v6.5.1) for icons.
*   **Utility Scripts:**
    *   `replace_cards.py`: A Python script used to programmatically update specific sections (the pricing/service cards) within `index.html` without manual editing.

## Project Structure

*   `index.html`: The main entry point and structural markup of the portfolio.
*   `style.css`: Contains additional or specific stylesheet definitions.
*   `package.json` & `package-lock.json`: NPM dependencies and Vite script configurations.
*   `replace_cards.py`: Automation script for modifying HTML content.
*   `img1.jpeg`, `logo.png`, `photo.png`: Static image assets used in the design.
*   `.env`: Environment variables configuration file.

## AI Agent Instructions

When working on this project, keep the following in mind:
1.  **Framework:** Stick to vanilla HTML/CSS. Do not introduce React, Vue, or TailwindCSS unless explicitly requested by the user.
2.  **Design Aesthetic:** Maintain the current premium, dynamic aesthetic (e.g., rich colors like brown/amber/cream, gradients, glassmorphism, micro-animations, and smooth transitions).
3.  **Automation:** If updating the "Startup Idea Validation" or "Mentorship" cards, consider using or updating the `replace_cards.py` script.
4.  **Running Locally:** Use `npm run dev` to start the Vite development server.
