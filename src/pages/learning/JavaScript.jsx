import ArrayMethodsDemo from "../../components/demos/javascript-demos/ArrayMethodsDemo";
import AsyncAwaitDemo from "../../components/demos/javascript-demos/AsyncAwaitDemo";
import ClosureDemo from "../../components/demos/javascript-demos/ClosureDemo";
import DestructuringDemo from "../../components/demos/javascript-demos/DestructuringDemo";
import EventLoopDemo from "../../components/demos/javascript-demos/EventLoopDemo";
import javascriptContent from "../../data/learning/javascriptContent.json";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import ScopeDemo from "../../components/demos/javascript-demos/ScopeDemo";
import TemplateLiteralDemo from "../../components/demos/javascript-demos/TemplateLiteralDemo";

// Maps each practice topic (by title, from javascriptContent.json) to a
// live, interactive demo. Keeping this separate from the JSON data means
// the content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Variables & Scope": ScopeDemo,
  Closures: ClosureDemo,
  "Arrays & Objects": ArrayMethodsDemo,
  "Destructuring & Spread/Rest": DestructuringDemo,
  "Template Literals": TemplateLiteralDemo,
  "Promises & Async/Await": AsyncAwaitDemo,
};

function JavaScript() {
  return (
    <LearningTopicLayout
      title={javascriptContent.title}
      introduction={javascriptContent.introduction}
      coreConcepts={javascriptContent.coreConcepts}
      sections={[
        {
          heading: javascriptContent.eventLoop.heading,
          description: javascriptContent.eventLoop.description,
          content: <EventLoopDemo />,
        },
      ]}
      fullExample={javascriptContent.fullExample}
      gettingStarted={javascriptContent.gettingStarted}
      practiceTopics={javascriptContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="javascript"
    />
  );
}

export default JavaScript;
