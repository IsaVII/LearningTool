import ContentCard from "../../components/ContentCard";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import reduxContent from "../../data/reduxContent.json";

function Redux() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{reduxContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {reduxContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {reduxContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reduxContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {reduxContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reduxContent.toolkit.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {reduxContent.toolkit.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reduxContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {reduxContent.gettingStarted.steps.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">Practice Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {reduxContent.practiceTopics.map((topic) => (
            <PracticeTopicCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </ContentCard>
    </>
  );
}

export default Redux;
