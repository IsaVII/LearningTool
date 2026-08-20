function PracticeTopicCard({ title, description }) {
  return (
    <div className="bg-surface-alt border-l-4 border-accent p-6 rounded transition-all duration-300 hover:bg-surface-alt-hover hover:translate-x-1">
      <h4 className="m-0 mb-2 text-heading">{title}</h4>
      <p className="m-0 text-sm text-muted">{description}</p>
    </div>
  );
}

export default PracticeTopicCard;
