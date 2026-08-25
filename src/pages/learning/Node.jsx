import AsyncPatternsDemo from "../../components/node-demos/AsyncPatternsDemo";
import BufferDemo from "../../components/node-demos/BufferDemo";
import ChildProcessDemo from "../../components/node-demos/ChildProcessDemo";
import EnvironmentDemo from "../../components/node-demos/EnvironmentDemo";
import ErrorHandlingDemo from "../../components/node-demos/ErrorHandlingDemo";
import EventLoopDemo from "../../components/node-demos/EventLoopDemo";
import EventsDemo from "../../components/node-demos/EventsDemo";
import FileSystemDemo from "../../components/node-demos/FileSystemDemo";
import HttpServerDemo from "../../components/node-demos/HttpServerDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import ModuleDemo from "../../components/node-demos/ModuleDemo";
import nodeContent from "../../data/learning/nodeContent.json";
import NpmDemo from "../../components/node-demos/NpmDemo";
import PathDemo from "../../components/node-demos/PathDemo";
import ProcessDemo from "../../components/node-demos/ProcessDemo";
import StreamDemo from "../../components/node-demos/StreamDemo";

// Maps each practice topic (by title, from nodeContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  Modules: ModuleDemo,
  "File System": FileSystemDemo,
  "HTTP Servers": HttpServerDemo,
  Streams: StreamDemo,
  "NPM & Packages": NpmDemo,
  "Environment Variables": EnvironmentDemo,
  "Path Module": PathDemo,
  "Error Handling": ErrorHandlingDemo,
  Events: EventsDemo,
  Buffers: BufferDemo,
  "Child Processes": ChildProcessDemo,
  "Async Patterns": AsyncPatternsDemo,
  "Process & OS": ProcessDemo,
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
