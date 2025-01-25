function Priority({ priority }) {
  const priorityClass =
    priority === "High"
      ? "priority-high"
      : priority === "Medium"
      ? "priority-medium"
      : priority === "Low"
      ? "priority-low"
      : "";

  const dotClass =
    priority === "High"
      ? "dot-high"
      : priority === "Medium"
      ? "dot-medium"
      : priority === "Low"
      ? "dot-low"
      : "";

  return (
    <div className={priorityClass}>
      <div className={dotClass}></div>
      <span className="priority-text">{priority}</span>
    </div>
  );
}

export default Priority;
