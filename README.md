
# Portfolio Projects – Next.js App Router

This is a professional portfolio and blog site built with Next.js 14 (App Router), React 18, TypeScript 5, and Tailwind CSS v4. It showcases web and mobile app projects, supports MDX/Markdown content, and is optimized for remote work opportunities.

## Features

- **Modern Next.js 14 App Router**: File-based routing, server/client component boundaries
- **MDX & Markdown Blog**: Write posts in MDX or Markdown, with syntax highlighting
- **SEO Optimized**: Metadata, Open Graph, sitemap, robots.txt, JSON-LD schema
- **RSS Feed**: Auto-generated for blog updates
- **Dynamic OG Images**: Custom Open Graph images for sharing
- **Tailwind CSS v4**: Utility-first styling, dark mode, responsive design
- **Vercel Analytics & Speed Insights**: Performance monitoring
- **Geist Font**: Clean, modern typography
- **Mobile Apps Projects Section**: Portrait cards and image slider for mobile app screenshots
- **Image Slider Component**: Accessible, client-side slider for mobile projects
- **Asset Management**: Organized `public/` folder for images, icons, and project assets

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout, metadata, global components
│   ├── page.tsx           # Homepage (hero, featured projects)
│   ├── about/page.tsx     # About page (profile, skills, story)
│   ├── contact/page.tsx   # Contact page (info, social, CTA)
│   ├── projects/page.tsx  # Projects page (featured, other, mobile apps)
│   ├── not-found.tsx      # Custom 404 page
│   ├── global.css         # Global styles, custom utilities
│   ├── components/
│   │   ├── nav.tsx            # Navbar
│   │   ├── footer.tsx         # Footer
│   │   ├── profile-photo.tsx  # Profile photo with gradient border
│   │   ├── featured-projects.tsx # Featured projects section
│   │   ├── image-slider.tsx   # Mobile app image slider (client component)
│   │   └── mdx.tsx            # Custom MDX renderer
│   ├── og/route.tsx       # Dynamic Open Graph image API
│   ├── rss/route.ts       # RSS feed API
│   ├── robots.ts          # Robots.txt API
│   ├── sitemap.ts         # Sitemap API
├── public/
│   ├── images/            # Profile, project, mobile app screenshots
│   ├── projects/          # Project-specific assets
│   ├── icons/             # SVGs, favicons, icon assets
├── package.json           # Dependencies, scripts
├── tsconfig.json          # TypeScript config
├── postcss.config.js      # PostCSS/Tailwind config
├── next-env.d.ts          # Next.js TypeScript types
├── README.md              # Project documentation
```

## Getting Started

1. **Install dependencies**
	```bash
	pnpm install
	```
2. **Run in development mode**
	```bash
	pnpm dev
	```
3. **Build for production**
	```bash
	pnpm build
	pnpm start
	```
4. **Deploy to Vercel**
	- Connect your repo to [Vercel](https://vercel.com/)
	- Push your code and follow Vercel's deployment instructions

## Customization & Usage

- **Branding**: Update metadata in `app/layout.tsx` for your name, description, and Open Graph info
- **Homepage**: Edit `app/page.tsx` for hero section, featured projects, and call-to-action buttons
- **Projects**: Add/edit projects in `app/projects/page.tsx` and update images in `public/images/`
- **Mobile Apps**: Showcase mobile projects with portrait screenshots and slider in `app/projects/page.tsx` and `image-slider.tsx`
- **Blog**: Add MDX/Markdown posts in the blog folder (if enabled)
- **Assets**: Store images, icons, and project files in the `public/` folder for easy access
- **Styling**: Customize global styles in `app/global.css` and use Tailwind utility classes
- **SEO**: Metadata, sitemap, robots.txt, and OG images are auto-generated for best search visibility

## Advanced Features

- **MDX Support**: Write rich blog posts with React components using MDX
- **Dynamic OG Images**: API route in `app/og/route.tsx` generates custom Open Graph images
- **RSS Feed**: API route in `app/rss/route.ts` for blog syndication
- **Image Slider**: `app/components/image-slider.tsx` for mobile app screenshots (client-side, accessible)
- **404 Page**: Custom not-found page in `app/not-found.tsx`
- **Dark Mode**: Automatic via Tailwind and custom CSS

## Best Practices

- Use the `public/` folder for all static assets (images, icons, etc.)
- Keep components modular and reusable in `app/components/`
- Use TypeScript for type safety and maintainability
- Separate client/server components as needed (e.g., use `"use client"` for hooks)
- Follow Tailwind CSS conventions for responsive, accessible design
- Keep metadata and SEO up-to-date for portfolio visibility
- Document your work and keep this README updated for onboarding and handoff

## Credits

- Built by Muhammad Nazar Gunawan
- Inspired by Vercel's Next.js portfolio/blog starter

## License

MIT
