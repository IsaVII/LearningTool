import AsyncPatternsDemo from "../../components/demos/node-demos/AsyncPatternsDemo";
import BufferDemo from "../../components/demos/node-demos/BufferDemo";
import ChildProcessDemo from "../../components/demos/node-demos/ChildProcessDemo";
import EnvironmentDemo from "../../components/demos/node-demos/EnvironmentDemo";
import ErrorHandlingDemo from "../../components/demos/node-demos/ErrorHandlingDemo";
import EventLoopDemo from "../../components/demos/node-demos/EventLoopDemo";
import EventsDemo from "../../components/demos/node-demos/EventsDemo";
import FileSystemDemo from "../../components/demos/node-demos/FileSystemDemo";
import HttpServerDemo from "../../components/demos/node-demos/HttpServerDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import ModuleDemo from "../../components/demos/node-demos/ModuleDemo";
import nodeContent from "../../data/learning/nodeContent.json";
import NpmDemo from "../../components/demos/node-demos/NpmDemo";
import PathDemo from "../../components/demos/node-demos/PathDemo";
import ProcessDemo from "../../components/demos/node-demos/ProcessDemo";
import StreamDemo from "../../components/demos/node-demos/StreamDemo";

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
