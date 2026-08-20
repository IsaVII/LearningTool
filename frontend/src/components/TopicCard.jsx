import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <Link
      to={topic.route}
      className="bg-surface border border-line rounded-lg p-6 no-underline text-inherit transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-accent"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="m-0 text-heading">{topic.title}</h3>
        <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
          {topic.difficulty}
        </span>
      </div>
      <p className="text-muted my-4">{topic.description}</p>
      <div className="flex gap-4 text-sm text-subtle">
        <span>⏱️ {topic.estimatedTime}</span>
      </div>
    </Link>
  );
}

export default TopicCard;
