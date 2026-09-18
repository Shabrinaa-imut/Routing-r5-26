export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export const BlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2024-03-15",
    category: "website",
    excerpt: "Learn the basics of Next.js and start building your first app.",
    content: `
      Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.

      Key Features of Next.js:
      - Server-Side Rendering (SSR)
      - Static Site Generation (SSG)
      - File-based Routing
      - API Routes

      In this tutorial, we'll walk through the process of setting up a Next.js project and creating your first pages.
    `
  },
  {
    id: 2,
    title: "CSS Tips and Tricks",
    slug: "css-tips-and-tricks",
    date: "2024-03-20",
    category: "website",
    excerpt: "Improve your CSS skills with these handy tips and tricks.",
    content: `
      CSS is gaining powers with recent web evolution. And it is very clever with tricks that were long existing or that have emerged.
        1. Draw a triangle using border
        2. Interchange background of an element
        3. Center an element
        4. Pill 💊 shape button
        5. Easily add beautiful loading indicator to your website
        6. Easy dark or light mode
        7. Truncate overflowing text with an ellipsis(...)
        8. Truncate long text to a number of lines
        9. Stop overworking yourself writing top, right, bottom, left
        10. Serve optimized images
    `
  },
  {
    id: 3,
    title: "Mobile Dev Tips and Tricks",
    slug: "mobile-dev-tips-and-tricks",
    date: "2024-05-29",
    category: "mobile",
    excerpt: "Essential tips and best practices for modern mobile application development.",
    content: `
      Mobile development requires specific approaches for performance and UX optimization.
        1. Optimize image assets for different screen densities
        2. Handle network state changes cleanly
        3. Design touch-friendly targets
        4. Optimize battery and memory consumption
        5. Implement smooth animations
    `
  },
  {
    id: 4,
    title: "Modern Web Development Trends",
    slug: "modern-web-development-trends",
    date: "2024-05-25",
    category: "website",
    excerpt: "Explore the latest trends, technologies, and tools in web development.",
    content: `
      The web development landscape evolves rapidly. Staying updated with modern standards is crucial for building fast applications.
        1. React Server Components
        2. Edge Computing and Serverless Architecture
        3. Progressive Web Apps (PWA)
        4. Modern CSS features like Subgrid and Container Queries
    `
  }
];