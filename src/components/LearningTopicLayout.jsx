import ContentCard from "./ContentCard";
import PracticeTopicCard from "./PracticeTopicCard";
import StepByStepExample from "./StepByStepExample";

/**
 * Shared page layout for every topic under src/pages/learning/. Each page
 * (Git, Http, Node, React, Redux, Testing, TypeScript, WebSockets...) is
 * just its content JSON, its practice-topic demo map, and a call to this
 * component - the actual heading sizes, spacing, and section order live
 * here ONCE. Change something here (e.g. text-3xl -> text-4xl) and every
 * topic page picks it up, instead of editing eight near-identical files.
 *
 * Sections between "Core Concepts" and "Full Example" vary per topic (Git's
 * three states, HTTP/WebSockets' connection lifecycle, Node's event loop,
 * React's hooks, Testing's pyramid, TypeScript's type checking, Redux's
 * data flow + toolkit). Rather than hard-code one "extra" slot, pages pass
 * a `sections` array - each one is an optional heading, an optional
 * description paragraph, and optional content (a demo, a CodeBlock,
 * whatever the topic needs).
 */
function LearningTopicLayout({
  title,
  introduction,
  coreConcepts,
  sections = [],
  fullExample,
  gettingStarted,
  practiceTopics,
  practiceDemos,
  practiceTopicsIntro = "Click a topic to open a live, editable example.",
  topicKey,
}) {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{title}</h1>

      <ContentCard>
        <div className="bg-content1 w-full border-l-4 border-content1-border p-3 pl-5 mb-3">
          <h2 className="text-3xl text-heading mt-8 mb-4">
            {introduction.heading}
          </h2>
          <p className="text-muted leading-relaxed mb-4 text-left ">
            {introduction.description}
          </p>
        </div>

        <div className="bg-content2 w-full  border-l-4  border-content2-border p-3 pl-5  mb-3   ">
          <h3 className="text-2xl text-heading-alt mt-6 mb-3">
            {coreConcepts.heading}
          </h3>
          <ul className="text-muted leading-relaxed   text-left">
            {coreConcepts.concepts.map((concept) => (
              <li key={concept.title} className="mb-3">
                <strong>{concept.title}:</strong> {concept.description}
              </li>
            ))}
          </ul>
        </div>

        {sections.map((section, index) => (
          <div
            key={section.heading ?? index}
            className="bg-content1 w-full border-l-4 border-content1-border p-3 pl-5 md:pr-5 mb-3 md:ml-auto"
          >
            {section.heading && (
              <h3 className="text-2xl text-heading-alt mt-6 mb-3">
                {section.heading}
              </h3>
            )}
            {section.description && (
              <p className="text-muted leading-relaxed mb-4">
                {section.description}
              </p>
            )}
            {section.content}
          </div>
        ))}

        {fullExample && (
          <>
            <div className="bg-content2 border-l-4 border-content2-border p-3 pl-5 md:pr-5 mb-3 md:ml-auto w-fit">
              <h3 className="text-2xl text-heading-alt mt-6 mb-3">
                {fullExample.heading}
              </h3>
              <StepByStepExample
                title={fullExample.title}
                description={fullExample.description}
                code={fullExample.code}
                steps={fullExample.steps}
              />
            </div>
          </>
        )}

        <div className="bg-content1 w-full border-l-4 border-content1-border p-3 pl-5 mb-3">
          <h3 className="text-2xl text-heading-alt mt-6 mb-3">
            {gettingStarted.heading}
          </h3>
          <ol className="text-muted leading-relaxed pl-6">
            {gettingStarted.steps.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-content2 w-full border-l-4 border-content2-border p-3 pl-5 mb-3">
          <h3 className="text-2xl text-heading-alt mt-6 mb-3">
            Practice Topics
          </h3>
          <p className="text-muted text-sm mb-4">{practiceTopicsIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {practiceTopics.map((topic) => {
              const Demo = practiceDemos[topic.title];
              return (
                <PracticeTopicCard
                  key={topic.title}
                  topicKey={topicKey}
                  title={topic.title}
                  description={topic.description}
                  demo={Demo ? <Demo /> : null}
                />
              );
            })}
          </div>
        </div>
      </ContentCard>
    </>
  );
}

export default LearningTopicLayout;
