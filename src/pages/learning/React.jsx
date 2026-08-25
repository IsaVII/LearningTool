import CounterDemo from "../../components/react-demos/CounterDemo";
import CustomHookDemo from "../../components/react-demos/CustomHookDemo";
import HooksIntroDemo from "../../components/react-demos/HooksIntroDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import ListRenderingDemo from "../../components/react-demos/ListRenderingDemo";
import PropsDemo from "../../components/react-demos/PropsDemo";
import reactContent from "../../data/learning/reactContent.json";
import RenderCountDemo from "../../components/react-demos/RenderCountDemo";
import StopwatchDemo from "../../components/react-demos/StopwatchDemo";

// Maps each practice topic (by title, from reactContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Components & JSX": CounterDemo,
  "Props & State": PropsDemo,
  Hooks: StopwatchDemo,
  "Lists & Conditional Rendering": ListRenderingDemo,
  "Custom Hooks": CustomHookDemo,
  Performance: RenderCountDemo,
};

function React() {
  return (
    <LearningTopicLayout
      title={reactContent.title}
      introduction={reactContent.introduction}
      coreConcepts={reactContent.coreConcepts}
      sections={[
        {
          heading: reactContent.hooks.heading,
          description: reactContent.hooks.description,
          content: <HooksIntroDemo />,
        },
      ]}
      fullExample={reactContent.fullExample}
      gettingStarted={reactContent.gettingStarted}
      practiceTopics={reactContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="react"
    />
  );
}

export default React;
