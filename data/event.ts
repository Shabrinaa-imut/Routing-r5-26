export interface EventItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  type: string;
  date: string;
  location: string;
  description: string;
}

export const arrayEvents: EventItem[] = [
  {
    id: 1,
    title: "Next.js 15 Masterclass",
    slug: "nextjs-15-masterclass",
    category: "tech",
    type: "paid",
    date: "2026-10-15",
    location: "Online (Zoom)",
    description: "Pelajari App Router, Server Actions, dan optimalisasi performa Next.js."
  },
  {
    id: 2,
    title: "UI/UX Design System Workshop",
    slug: "uiux-design-system-workshop",
    category: "design",
    type: "free",
    date: "2026-10-20",
    location: "Jakarta Convention Center",
    description: "Panduan praktis membangun Design System yang scalable di Figma."
  },
  {
    id: 3,
    title: "Tailwind CSS Animation Tips",
    slug: "tailwind-css-animation-tips",
    category: "tech",
    type: "free",
    date: "2026-11-05",
    location: "Online (Zoom)",
    description: "Trik membuat animasi interaktif dan smooth dengan Tailwind CSS."
  }
];

