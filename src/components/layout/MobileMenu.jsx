"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WindowControls } from "@/components/ui/WindowControls";
import LanguageSwitch from "./LanguageSwitch";

export default function MobileMenu({ links, pathname, content }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="mobile-menu__trigger" type="button" aria-label="Open navigation menu">
          <Menu aria-hidden="true" size={22} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu__overlay" />
        <Dialog.Content className="mobile-menu__panel" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
          <Dialog.Close asChild>
            <button className="mobile-menu__close" type="button" aria-label="Close navigation menu">
              <X aria-hidden="true" size={22} />
            </button>
          </Dialog.Close>

          <nav className="mobile-menu__links" aria-label="Primary navigation">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Dialog.Close key={link.key} asChild>
                  <Link
                    className={`header-link${active ? " header-link--active" : ""}`}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                  >
                    {content.nav[link.key]}
                  </Link>
                </Dialog.Close>
              );
            })}
          </nav>

          <div className="mobile-menu__utilities">
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
