import { WindowFrame } from "@/components/ui/WindowFrame";

export function DesktopScene({ name, role }) {
  return (
    <section
      className="relative flex flex-col gap-5 md:block md:min-h-[32rem]"
      aria-label="Desktop workspace"
    >
      <WindowFrame
        title="terminal.exe"
        variant="dark"
        className="min-h-[17rem] w-full md:absolute md:left-0 md:top-0 md:min-h-[23rem] md:w-[84%]"
      >
        <div className="space-y-3 font-mono text-sm leading-relaxed text-[var(--ink)]">
          <p className="m-0">
            <span aria-hidden="true" className="text-[var(--accent)]">$ </span>
            whoami
          </p>
          <p className="m-0 pl-4">{name}</p>
          <p className="m-0">
            <span aria-hidden="true" className="text-[var(--accent)]">$ </span>
            role
          </p>
          <p className="m-0 pl-4">{role}</p>
          <p className="m-0 text-[var(--accent)]">
            <span aria-hidden="true">$ </span>
            <span
              aria-hidden="true"
              className="inline-block h-[1em] w-2 align-[-0.12em] bg-current animate-pulse"
            />
          </p>
        </div>
      </WindowFrame>

      <WindowFrame
        title="explorer"
        className="w-full [&_.window-controls]:hidden md:absolute md:right-0 md:top-36 md:z-10 md:w-[54%] md:[&_.window-controls]:inline-flex"
      >
        <div className="font-mono text-sm leading-relaxed text-[var(--muted)]">
          <p className="m-0 font-bold text-[var(--ink)]">~/portfolio</p>
          <ul className="m-0 mt-3 grid list-none gap-1 p-0" aria-label="Portfolio files">
            <li>├── introduction.md</li>
            <li>├── trajectory/</li>
            <li>├── projects/</li>
            <li>└── contact/</li>
          </ul>
        </div>
      </WindowFrame>

      <WindowFrame
        title="status"
        className="w-full [&_.window-controls]:hidden md:absolute md:bottom-0 md:left-[10%] md:z-20 md:w-[42%] md:[&_.window-controls]:inline-flex"
      >
        <p className="m-0 font-mono text-sm text-[var(--muted)]">system: ready</p>
      </WindowFrame>
    </section>
  );
}
