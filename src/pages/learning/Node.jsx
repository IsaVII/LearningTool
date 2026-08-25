import EventLoopDemo from "../../components/node-demos/EventLoopDemo";
import FileSystemDemo from "../../components/node-demos/FileSystemDemo";
import HttpServerDemo from "../../components/node-demos/HttpServerDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import ModuleDemo from "../../components/node-demos/ModuleDemo";
import nodeContent from "../../data/learning/nodeContent.json";
import StreamDemo from "../../components/node-demos/StreamDemo";

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
    <LearningTopicLayout
      title={nodeContent.title}
      introduction={nodeContent.introduction}
      coreConcepts={nodeContent.coreConcepts}
      sections={[
        {
          heading: nodeContent.runtime.heading,
          description: nodeContent.runtime.description,
          content: <EventLoopDemo />,
        },
      ]}
      fullExample={nodeContent.fullExample}
      gettingStarted={nodeContent.gettingStarted}
      practiceTopics={nodeContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="node"
    />
  );
}

export default Node;
