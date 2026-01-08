export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "growffinity",
    title: "Growffinity",
    description:
      "A CRM for WooCommerce that connects directly to your store's customers, orders, and revenue data. Built with a React dashboard, Node.js/Express API, PostgreSQL database, and a WordPress plugin — designed to stay lightning fast and scalable as your store grows.",
    tags: ["React", "Node.js", "PostgreSQL", "Next.js", "WordPress", "Stripe"],
    image: "/projects/growffinity.png",
    liveUrl: "https://growffinity.com/",
    featured: true,
  },
  {
    id: "ezkratom",
    title: "EZ Kratom",
    description:
      "A WordPress/WooCommerce e-commerce website featuring multiple products, subscriptions, custom features and plugins, and deep integrations with shipping software.",
    tags: ["WordPress", "WooCommerce", "Divi", "E-commerce"],
    image: "/projects/ezkratom.png",
    liveUrl: "https://ezkratom.com/",
    featured: true,
  },
  {
    id: "bozarth-construction",
    title: "Bozarth Construction",
    description:
      "A clean, professional WordPress website for a construction company, built with the Divi theme and hosted on Siteground.",
    tags: ["WordPress", "Divi", "Siteground"],
    image: "/projects/bozarth-construction.png",
    liveUrl: "https://bozarthconstruction.org/",
    featured: false,
  },
  {
    id: "peck-heating",
    title: "Peck Heating & Air Conditioning",
    description:
      "A WordPress website for an HVAC company, built with the Enfold theme and hosted on HostGator.",
    tags: ["WordPress", "Enfold", "HostGator"],
    image: "/projects/peck-heating.png",
    liveUrl: "https://peckheatingandair.com/",
    featured: false,
  },
];
