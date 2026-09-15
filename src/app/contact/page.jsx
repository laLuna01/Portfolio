"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PageIntro } from "@/components/ui/PageIntro";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { usePortfolio } from "@/i18n/usePortfolio";

export default function ContactPage() {
  const { content } = usePortfolio();
  const { contact, identity } = content;
  const newTabSuffix = content.accessibility.externalLinkSuffix;

  return (
    <main className="page-shell">
      <div className="container contact-page">
        <PageIntro
          eyebrow={contact.label}
          title={contact.title}
          description={contact.intro}
        />

        <div className="contact-layout">
          <WindowFrame title={contact.form.windowTitle} className="contact-window">
            <ContactForm content={contact.form} />
          </WindowFrame>

          <aside className="contact-channels" aria-labelledby="contact-channels-title">
            <div className="contact-channels__heading">
              <p className="interface-label">{contact.channels.label}</p>
              <h2 id="contact-channels-title">{contact.channels.title}</h2>
              <p>{contact.channels.description}</p>
            </div>

            <ul className="contact-channels__list">
              <li className="contact-channel card">
                <p className="contact-channel__meta">
                  <span>{contact.channels.email.number}</span>
                  <span>{contact.channels.email.label}</span>
                </p>
                <h3>{contact.channels.email.title}</h3>
                <a className="external-link" href={`mailto:${identity.email}`}>
                  <span>{contact.channels.email.action}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li className="contact-channel card">
                <p className="contact-channel__meta">
                  <span>{contact.channels.linkedin.number}</span>
                  <span>{contact.channels.linkedin.label}</span>
                </p>
                <h3>{contact.channels.linkedin.title}</h3>
                <ExternalLink href={identity.linkedin} newTabSuffix={newTabSuffix}>
                  {contact.channels.linkedin.action}
                </ExternalLink>
              </li>
              <li className="contact-channel card">
                <p className="contact-channel__meta">
                  <span>{contact.channels.github.number}</span>
                  <span>{contact.channels.github.label}</span>
                </p>
                <h3>{contact.channels.github.title}</h3>
                <ExternalLink href={identity.github} newTabSuffix={newTabSuffix}>
                  {contact.channels.github.action}
                </ExternalLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
