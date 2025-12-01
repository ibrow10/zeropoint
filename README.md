# Founder Labs Landing Page

A modern, responsive landing page for Founder Labs Belfast built with React, Vite, and Tailwind CSS. Features a dynamic hero section with background video support and smooth animations.

## Features

- **Background Video Hero**: Dynamic video background with overlay for optimal text readability
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI Components**: Custom UI components built with shadcn/ui patterns
- **Form Handling**: Contact form with validation and honeypot protection

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd /Users/ian/CascadeProjects/founder-labs-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Adding Background Video

To use the background video feature in the hero section, add your video files to the `public/` directory:

- `public/hero-background.mp4` - Primary video format
- `public/hero-background.webm` - Fallback format for better compression

The video should be optimized for web (compressed, reasonable file size) and ideally loop seamlessly.

## Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx           # Main application component
├── main.jsx          # React entry point
└── index.css         # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Colors & Styling
The design uses a black background with white grid overlay. Modify the Tailwind classes in `App.jsx` to customize colors and styling.

### Content
Update the content directly in `App.jsx`:
- Hero phrases in the `phrases` array
- Company information throughout the component
- Form fields and validation

### Components
All UI components are in `src/components/ui/` and can be customized or extended as needed.

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist/` folder will contain the optimized production build ready for deployment to any static hosting service.

## License

This project is private and proprietary to Founder Labs Belfast.