import ContentCard from "../../components/ContentCard";
import EventLoopDemo from "../../components/node-demos/EventLoopDemo";
import FileSystemDemo from "../../components/node-demos/FileSystemDemo";
import HttpServerDemo from "../../components/node-demos/HttpServerDemo";
import ModuleDemo from "../../components/node-demos/ModuleDemo";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import StepByStepExample from "../../components/StepByStepExample";
import StreamDemo from "../../components/node-demos/StreamDemo";
import nodeContent from "../../data/nodeContent.json";

// Maps each practice topic (by title, from nodeContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  Modules: ModuleDemo,
  "File System": FileSystemDemo,
  "HTTP Servers": HttpServerDemo,
  Streams: StreamDemo,
};

function Node() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{nodeContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {nodeContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {nodeContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {nodeContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {nodeContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {nodeContent.runtime.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {nodeContent.runtime.description}
        </p>
        <EventLoopDemo />

        {nodeContent.fullExample && (
          <>
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {nodeContent.fullExample.heading}
            </h3>
            <StepByStepExample
              title={nodeContent.fullExample.title}
              description={nodeContent.fullExample.description}
              code={nodeContent.fullExample.code}
              steps={nodeContent.fullExample.steps}
            />
          </>
        )}

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {nodeContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {nodeContent.gettingStarted.steps.map((step, index) => (
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
          {nodeContent.practiceTopics.map((topic) => {
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

export default Node;
