# CloverMint Nonprofit Website

A modern, responsive website built with Next.js 14 and TailwindCSS for the CloverMint Nonprofit organization.

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Development Tools:**
  - PostCSS
  - Autoprefixer

## 📁 Project Structure

```
clovermint-nonprofit/
├── app/                    # Next.js 14 app directory
│   ├── blog/               # Blog section
│   ├── contact/            # Contact page
│   ├── partner/            # Partners section
│   ├── team/               # Team section
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── Logo.client.tsx     # Logo component
│   ├── Nav.client.tsx      # Navigation component
│   └── card.tsx            # Card component
├── public/                 # Static assets
└── [Configuration files]   # Various config files
```

## 🎯 Features

- **Modern Stack:** Built with Next.js 14 and TypeScript for robust type safety.
- **Responsive Design:** Fully responsive layout using TailwindCSS.
- **Component Structure:**
  - Custom Navigation Component
  - Logo Component
  - Reusable Card Component
- **Multiple Sections:**
  - Blog Section
  - Contact Page
  - Partner Section
  - Team Section

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run linting

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

## 🌟 Dependencies

### Main Dependencies

- `next`: ^14.0.4
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `lucide-react`: ^0.473.0

### Development Dependencies

- `typescript`: ^5.3.3
- `tailwindcss`: ^3.4.0
- `postcss`: ^8.4.32
- `autoprefixer`: ^10.4.16
- Various TypeScript types packages

## 🎨 Technical Highlights

### Dynamic Navigation with IntersectionObserver

The website features a sophisticated navigation system that dynamically adapts to the page content:

#### Color Adaptation System

- **Automatic Color Switching:** The navigation logo automatically changes color based on the background section currently in view.
- **Scroll-Based Updates:** Uses the IntersectionObserver API for efficient scroll detection.
- **Performance Optimized:** More efficient than traditional scroll event listeners.

#### Implementation Details

```typescript
const observerOptions = {
  threshold: [0, 0.05],
  rootMargin: '-1px 0px 0px 0px'
};

const observerCallback: IntersectionObserverCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const color = entry.target.getAttribute('data-logo-color');
      if (color) {
        setLogoColor(color); // Example state setter for logo color
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
document.querySelectorAll('.section').forEach(section => observer.observe(section));
```

#### Color Mapping

The navigation adapts to different sections with specific color combinations:

- **Light Cream Background (#EDEEC9)** → Logo: **#98C9A3**
- **Green Background (#98C8A3)** → Logo: **#EDEEC9**
- **Light Green Background (#DDE7C7)** → Logo: **#EDEEC9**
- **Dark Background (#333333)** → Logo: **#EDEEC9**

#### Route-Specific Styling

Special color handling for specific routes:

- **Blog Page (/blog)** → Green Logo: **#77BFA3**
- **Partner Page (/partner)** → Cream Logo: **#EDEEC9**

### Technical Benefits

- 🚀 **Optimized Performance**
- 📱 **Responsive Design**
- 🎯 **Precise Intersection Detection**
- 🧹 **Automatic Cleanup**
- ♻️ **Memory Efficient**

## 🔄 Version

Current Version: 0.1.0

