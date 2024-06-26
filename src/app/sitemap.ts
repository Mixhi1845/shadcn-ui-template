import { siteConfig } from "@/config/site";

export default async function sitemap() {
    let routes = [''].map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }));
  
    return [...routes];
  }