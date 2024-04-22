import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "About us",
      href: "/about",
    },
    {
      title: "Page 1",
      href: "/page1",
    },
    {
      title: "Page 2",
      href: "/page2",
    },
    {
      title: "Page 3",
      href: "/page3",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "API",
          href: "/docs/api",
          items: [],
        },
        {
          title: "Contact",
          href: "/docs/contact",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Sub Pages",
      items: [
        {
          title: "Page 1",
          href: "/docs/components/page1",
          items: [],
        },
        {
          title: "Page 2",
          href: "/docs/components/page2",
          items: [],
        },
        {
          title: "Page 2",
          href: "/docs/components/page3",
          items: [],
        },
      ],
    },
  ],
}