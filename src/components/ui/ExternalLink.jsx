export function ExternalLink({ href, children, newTabSuffix }) {
  const label =
    typeof children === "string" && newTabSuffix
      ? `${children} (${newTabSuffix})`
      : undefined;

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
