import ApiEndpointTestDemo from "../../components/demos/testing-demos/ApiEndpointTestDemo";
import AsyncTestDemo from "../../components/demos/testing-demos/AsyncTestDemo";
import ComponentTestDemo from "../../components/demos/testing-demos/ComponentTestDemo";
import FixturesDemo from "../../components/demos/testing-demos/FixturesDemo";
import IntegrationTestDemo from "../../components/demos/testing-demos/IntegrationTestDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import MockingDemo from "../../components/demos/testing-demos/MockingDemo";
import ReactComponentTestDemo from "../../components/demos/testing-demos/ReactComponentTestDemo";
import SpiesDemo from "../../components/demos/testing-demos/SpiesDemo";
import TddDemo from "../../components/demos/testing-demos/TddDemo";
import TestPyramidDemo from "../../components/demos/testing-demos/TestPyramidDemo";
import testingContent from "../../data/learning/testingContent.json";
import UnitTestDemo from "../../components/demos/testing-demos/UnitTestDemo";

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
