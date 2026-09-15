import { WindowFrame } from "@/components/ui/WindowFrame";

export function SkillGroup({ group }) {
  return (
    <WindowFrame title={group.label ?? group.title} className="skill-group">
      <div className="skill-group__heading">
        <p className="skill-group__index" aria-hidden="true">
          {group.number}
        </p>
        <div>
          <h2 className="skill-group__title">{group.title}</h2>
          <p className="skill-group__description">{group.description}</p>
        </div>
      </div>

      <ul className="skill-group__items">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </WindowFrame>
  );
}
