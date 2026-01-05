# SQA Engineer Portfolio

A modern, responsive portfolio website for a Software Quality Assurance Engineer built with Next.js, Tailwind CSS, and JavaScript.

## Features

- 🎨 Modern and professional design
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 (App Router)
- 💅 Styled with Tailwind CSS
- 📊 Projects section with JSON data source
- 🎯 Filterable project categories
- 📧 Contact form
- ⚡ Fast and optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/      # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout
│   └── page.js          # Home page
├── data/
│   └── projects.json    # Projects data
├── public/              # Static assets
└── package.json
```

## Customizing Projects

Edit the `data/projects.json` file to add, remove, or modify projects. Each project should have:

- `id`: Unique identifier
- `title`: Project title
- `description`: Project description
- `technologies`: Array of technologies used
- `category`: Project category (used for filtering)
- `image`: Image path (optional)
- `github`: GitHub repository URL (optional)
- `live`: Live demo URL (optional)

## Customization

- Update personal information in the components (Hero, About, Contact)
- Modify colors in `tailwind.config.js`
- Add/remove skills in `app/components/Skills.js`
- Update social media links in `app/components/Contact.js` and `app/components/Footer.js`

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS 3
- JavaScript

## License

MIT

