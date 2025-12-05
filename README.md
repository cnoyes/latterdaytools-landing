# Latter-day Tools - Landing Page

Professional portfolio landing page showcasing LDS data science projects.

## Overview

This is a Next.js application that serves as a portfolio showcase for various data science projects related to LDS data analysis. The landing page features project cards with detailed information about techniques, tech stacks, and live demos.

## Projects Showcased

### 1. Prophet Probability Tracker
- **URL**: https://prophet.latterdaytools.io
- **GitHub**: https://github.com/cnoyes/ldt-prophet
- **Description**: Statistical analysis using Monte Carlo simulation to estimate apostolic succession probabilities
- **Techniques**: Monte Carlo Simulation, Actuarial Modeling, Statistical Analysis, Data Visualization
- **Tech Stack**: Next.js, TypeScript, Recharts, R, Tailwind CSS

### 2. Temple Construction Tracker
- **URL**: https://temples.latterdaytools.io
- **GitHub**: https://github.com/cnoyes/ldt-temples
- **Description**: Interactive map visualization tracking temple construction progress worldwide
- **Techniques**: Geospatial Analysis, Interactive Mapping, Data Visualization, Time Series Analysis
- **Tech Stack**: R Shiny, Leaflet, ggplot2

### 3. General Conference Analytics
- **Status**: Coming Soon
- **Description**: NLP and text analytics on General Conference talks
- **Techniques**: Natural Language Processing, Text Analytics, Topic Modeling, Sentiment Analysis
- **Tech Stack**: Python, R, NLTK, Shiny

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Deployed on Vercel at:
- **Production**: https://latterdaytools.io
- **Vercel URL**: https://landing-one-chi.vercel.app

## Project Structure

```
landing/
├── app/
│   ├── page.tsx          # Main landing page with project cards
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json          # Dependencies
```

## Features

- Responsive grid layout
- Project cards with gradient headers
- Technique and tech stack badges
- Hover effects and transitions
- Professional color schemes
- Links to live demos and GitHub repos

## License

Not affiliated with The Church of Jesus Christ of Latter-day Saints.

## Author

Created as a portfolio showcase for data science projects.
