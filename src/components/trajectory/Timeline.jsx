export function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.company}-${item.role}`} className="timeline__item">
          <article className="timeline__entry">
            <p className="timeline__period">{item.period}</p>
            <h3 className="timeline__company">{item.company}</h3>
            <p className="timeline__role">{item.role}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}
