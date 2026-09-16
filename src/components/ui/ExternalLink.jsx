export function ExternalLink({ href, children, accessibleLabel, newTabSuffix }) {
  const labelText = accessibleLabel ?? (typeof children === "string" ? children : undefined);
  const label =
    labelText && newTabSuffix
      ? `${labelText} (${newTabSuffix})`
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
