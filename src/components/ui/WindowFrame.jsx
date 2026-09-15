import { WindowControls } from "./WindowControls";

export function WindowFrame({ title, variant = "light", className = "", children }) {
  return (
    <section
      className={`window-frame window-frame--${variant} ${className}`.trim()}
      aria-label={title}
    >
      <header className="window-frame__bar">
        <span>{title}</span>
        <WindowControls />
      </header>
      <div className="window-frame__content">{children}</div>
    </section>
  );
}
