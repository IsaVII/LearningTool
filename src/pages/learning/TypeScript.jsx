import BasicTypesDemo from "../../components/typescript-demos/BasicTypesDemo";
import ContentCard from "../../components/ContentCard";
import FunctionTypingDemo from "../../components/typescript-demos/FunctionTypingDemo";
import GenericsDemo from "../../components/typescript-demos/GenericsDemo";
import InterfaceDemo from "../../components/typescript-demos/InterfaceDemo";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import StepByStepExample from "../../components/StepByStepExample";
import TypeCheckingDemo from "../../components/typescript-demos/TypeCheckingDemo";
import typescriptContent from "../../data/learning/typescriptContent.json";
import UnionIntersectionDemo from "../../components/typescript-demos/UnionIntersectionDemo";

// Maps each practice topic (by title, from typescriptContent.json) to a
// live, interactive demo. Keeping this separate from the JSON data means
// the content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Basic Types & Inference": BasicTypesDemo,
  "Interfaces & Type Aliases": InterfaceDemo,
  "Typing Functions": FunctionTypingDemo,
  Generics: GenericsDemo,
  "Union & Intersection Types": UnionIntersectionDemo,
};

function TypeScript() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{typescriptContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {typescriptContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {typescriptContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {typescriptContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {typescriptContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {typescriptContent.typeChecking.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {typescriptContent.typeChecking.description}
        </p>
        <TypeCheckingDemo />

        {typescriptContent.fullExample && (
          <>
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {typescriptContent.fullExample.heading}
            </h3>
            <StepByStepExample
              title={typescriptContent.fullExample.title}
              description={typescriptContent.fullExample.description}
              code={typescriptContent.fullExample.code}
              steps={typescriptContent.fullExample.steps}
            />
          </>
        )}

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {typescriptContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {typescriptContent.gettingStarted.steps.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">Practice Topics</h3>
        <p className="text-muted text-sm mb-4">
          Click a topic to open a live, editable example.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {typescriptContent.practiceTopics.map((topic) => {
            const Demo = practiceDemos[topic.title];
            return (
              <PracticeTopicCard
                key={topic.title}
                topicKey="typescript"
                title={topic.title}
                description={topic.description}
                demo={Demo ? <Demo /> : null}
              />
            );
          })}
        </div>
      </ContentCard>
    </>
  );
}

export default TypeScript;
