import ApiEndpointTestDemo from "../../components/testing-demos/ApiEndpointTestDemo";
import AsyncTestDemo from "../../components/testing-demos/AsyncTestDemo";
import ComponentTestDemo from "../../components/testing-demos/ComponentTestDemo";
import ContentCard from "../../components/ContentCard";
import FixturesDemo from "../../components/testing-demos/FixturesDemo";
import IntegrationTestDemo from "../../components/testing-demos/IntegrationTestDemo";
import MockingDemo from "../../components/testing-demos/MockingDemo";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import ReactComponentTestDemo from "../../components/testing-demos/ReactComponentTestDemo";
import SpiesDemo from "../../components/testing-demos/SpiesDemo";
import StepByStepExample from "../../components/StepByStepExample";
import TddDemo from "../../components/testing-demos/TddDemo";
import TestPyramidDemo from "../../components/testing-demos/TestPyramidDemo";
import UnitTestDemo from "../../components/testing-demos/UnitTestDemo";
import testingContent from "../../data/testingContent.json";

// Maps each practice topic (by title, from testingContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Unit Testing": UnitTestDemo,
  "Integration Testing": IntegrationTestDemo,
  "Component Testing": ComponentTestDemo,
  Mocking: MockingDemo,
  Spies: SpiesDemo,
  Fixtures: FixturesDemo,
  "Test-Driven Development": TddDemo,
  "Testing Async Code": AsyncTestDemo,
  "Testing React Components": ReactComponentTestDemo,
  "Testing API Endpoints": ApiEndpointTestDemo,
};

function Testing() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{testingContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {testingContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {testingContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {testingContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {testingContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {testingContent.pyramid.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {testingContent.pyramid.description}
        </p>
        <TestPyramidDemo />

        {testingContent.fullExample && (
          <>
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {testingContent.fullExample.heading}
            </h3>
            <StepByStepExample
              title={testingContent.fullExample.title}
              description={testingContent.fullExample.description}
              code={testingContent.fullExample.code}
              steps={testingContent.fullExample.steps}
            />
          </>
        )}

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {testingContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {testingContent.gettingStarted.steps.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">Practice Topics</h3>
        <p className="text-muted text-sm mb-4">
          Click a topic to open a small failing test - fix it and hit
          &quot;Run tests&quot;.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {testingContent.practiceTopics.map((topic) => {
            const Demo = practiceDemos[topic.title];
            return (
              <PracticeTopicCard
                key={topic.title}
                topicKey="testing"
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

export default Testing;
