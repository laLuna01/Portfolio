export function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="page-intro">
      {eyebrow ? <p className="page-intro__eyebrow">{eyebrow}</p> : null}
      <h1 className="page-intro__title">{title}</h1>
      {description ? <p className="page-intro__description">{description}</p> : null}
    </header>
  );
}
