import BasicTypesDemo from "../../components/typescript-demos/BasicTypesDemo";
import FunctionTypingDemo from "../../components/typescript-demos/FunctionTypingDemo";
import GenericsDemo from "../../components/typescript-demos/GenericsDemo";
import InterfaceDemo from "../../components/typescript-demos/InterfaceDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
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
    <LearningTopicLayout
      title={typescriptContent.title}
      introduction={typescriptContent.introduction}
      coreConcepts={typescriptContent.coreConcepts}
      sections={[
        {
          heading: typescriptContent.typeChecking.heading,
          description: typescriptContent.typeChecking.description,
          content: <TypeCheckingDemo />,
        },
      ]}
      fullExample={typescriptContent.fullExample}
      gettingStarted={typescriptContent.gettingStarted}
      practiceTopics={typescriptContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="typescript"
    />
  );
}

export default TypeScript;
