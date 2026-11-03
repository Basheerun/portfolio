# Shaik Kathhamma Basheerun — Portfolio

A modern, high-performance developer portfolio showcasing full-stack applications, intelligent systems, and interactive UI engineering.

## Live Site
- **URL**: https://portfolio-basheerun.vercel.app/

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion & AOS (Animate On Scroll)
- **Fluid Cursor Effects**: WebGL (React Bits SplashCursor)
- **Email Service**: EmailJS (`@emailjs/browser`)

## Run Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/Basheerun/portfolio.git
cd portfolio
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

To enable contact form submissions via EmailJS, create a `.env.local` file in the project root with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are omitted, the contact form automatically falls back to pre-filled direct email client links.)*

## Credits

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
