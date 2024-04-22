import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const t = useTranslations("SiteHeader");
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          {t("discover")}
        </Link>
        <Link
          href="/docs/components"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          {t("shop")}
        </Link>
        <Link
          href="/themes"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          {t("about")}
        </Link>
        <Link
          href="/examples"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          {t("newsletter")}
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
