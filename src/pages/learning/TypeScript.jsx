import ContentCard from "../../components/ContentCard";
import typescriptContent from "../../data/typescriptContent.json";

function TypeScript() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{typescriptContent.title}</h1>

      <ContentCard>
        <span className="inline-block bg-accent/15 text-accent text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 mb-4">
          Coming Soon
        </span>

        <h2 className="text-3xl text-heading mt-4 mb-4">
          {typescriptContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-6">
          {typescriptContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          What&apos;s planned
        </h3>
        <ul className="text-muted leading-relaxed pl-6 list-disc">
          {typescriptContent.plannedTopics.map((item) => (
            <li key={item} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </ContentCard>
    </>
  );
}

export default TypeScript;
