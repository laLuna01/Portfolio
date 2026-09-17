function ControlIcon({ type }) {
  if (type === "minimize") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges">
        <path d="M3 11h10v2H3z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "maximize") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges">
        <path d="M3 3h10v10H3V3Zm2 2v6h6V5H5Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M3 2h2v2h2v2h2V4h2V2h2v3h-2v2H9v2h2v2h2v3h-2v-2H9v-2H7v2H5v2H3v-3h2V9h2V7H5V5H3V2Z" fill="currentColor" />
    </svg>
  );
}

export function WindowControls() {
  return (
    <span className="window-controls" aria-hidden="true">
      <i className="window-control window-control--minimize">
        <ControlIcon type="minimize" />
      </i>
      <i className="window-control window-control--maximize">
        <ControlIcon type="maximize" />
      </i>
      <i className="window-control window-control--close">
        <ControlIcon type="close" />
      </i>
    </span>
  );
}
