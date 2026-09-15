export function ExternalLink({ href, children }) {
  const label = typeof children === "string" ? `${children} (opens in a new tab)` : "Opens in a new tab";

  return (
    <a
      className="external-link"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
