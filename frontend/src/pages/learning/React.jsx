import ContentCard from "../../components/ContentCard";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import CounterDemo from "../../components/react-demos/CounterDemo";
import HooksIntroDemo from "../../components/react-demos/HooksIntroDemo";
import PropsDemo from "../../components/react-demos/PropsDemo";
import RenderCountDemo from "../../components/react-demos/RenderCountDemo";
import StepByStepExample from "../../components/StepByStepExample";
import StopwatchDemo from "../../components/react-demos/StopwatchDemo";
import reactContent from "../../data/reactContent.json";

// Maps each practice topic (by title, from reactContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Components & JSX": CounterDemo,
  "Props & State": PropsDemo,
  Hooks: StopwatchDemo,
  Performance: RenderCountDemo,
};

function React() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{reactContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {reactContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {reactContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reactContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {reactContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reactContent.hooks.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {reactContent.hooks.description}
        </p>
        <HooksIntroDemo />

        {reactContent.fullExample && (
          <>
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {reactContent.fullExample.heading}
            </h3>
            <StepByStepExample
              title={reactContent.fullExample.title}
              description={reactContent.fullExample.description}
              code={reactContent.fullExample.code}
              steps={reactContent.fullExample.steps}
            />
          </>
        )}

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reactContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {reactContent.gettingStarted.steps.map((step, index) => (
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
          {reactContent.practiceTopics.map((topic) => {
            const Demo = practiceDemos[topic.title];
            return (
              <PracticeTopicCard
                key={topic.title}
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

export default React;
