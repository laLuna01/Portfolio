"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WindowControls } from "@/components/ui/WindowControls";
import { usePortfolio } from "@/i18n/usePortfolio";
import LanguageSwitch from "./LanguageSwitch";
import MobileMenu from "./MobileMenu";

const links = [
  { key: "trajectory", href: "/trajectory" },
  { key: "skills", href: "/skills" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { content } = usePortfolio();

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link className="site-header__signature" href="/">
          Luana Matos.exe
        </Link>

        <div className="site-header__desktop">
          <nav className="site-header__links" aria-label={content.accessibility.primaryNavigation}>
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.key}
                  className={`header-link${active ? " header-link--active" : ""}`}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                >
                  {content.nav[link.key]}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__utilities">
            <Link
              className="header-resume-link"
              href={content.identity.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="header-resume-link__folder" aria-hidden="true">▰</span>
              {content.nav.resume}
            </Link>
            <LanguageSwitch />
            <WindowControls />
          </div>
        </div>

        <div className="site-header__mobile">
          <MobileMenu links={links} pathname={pathname} content={content} />
        </div>
      </div>
    </header>
  );
}
