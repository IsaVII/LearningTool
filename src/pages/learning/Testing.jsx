import ApiEndpointTestDemo from "../../components/testing-demos/ApiEndpointTestDemo";
import AsyncTestDemo from "../../components/testing-demos/AsyncTestDemo";
import ComponentTestDemo from "../../components/testing-demos/ComponentTestDemo";
import FixturesDemo from "../../components/testing-demos/FixturesDemo";
import IntegrationTestDemo from "../../components/testing-demos/IntegrationTestDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import MockingDemo from "../../components/testing-demos/MockingDemo";
import ReactComponentTestDemo from "../../components/testing-demos/ReactComponentTestDemo";
import SpiesDemo from "../../components/testing-demos/SpiesDemo";
import TddDemo from "../../components/testing-demos/TddDemo";
import TestPyramidDemo from "../../components/testing-demos/TestPyramidDemo";
import testingContent from "../../data/learning/testingContent.json";
import UnitTestDemo from "../../components/testing-demos/UnitTestDemo";

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
    <LearningTopicLayout
      title={testingContent.title}
      introduction={testingContent.introduction}
      coreConcepts={testingContent.coreConcepts}
      sections={[
        {
          heading: testingContent.pyramid.heading,
          description: testingContent.pyramid.description,
          content: <TestPyramidDemo />,
        },
      ]}
      fullExample={testingContent.fullExample}
      gettingStarted={testingContent.gettingStarted}
      practiceTopics={testingContent.practiceTopics}
      practiceDemos={practiceDemos}
      practiceTopicsIntro='Click a topic to open a small failing test - fix it and hit "Run tests".'
      topicKey="testing"
    />
  );
}

export default Testing;
