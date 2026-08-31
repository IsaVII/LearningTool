import BroadcastDemo from "../../components/demos/websockets-demos/BroadcastDemo";
import HeartbeatDemo from "../../components/demos/websockets-demos/HeartbeatDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import MessageExchangeDemo from "../../components/demos/websockets-demos/MessageExchangeDemo";
import ReconnectDemo from "../../components/demos/websockets-demos/ReconnectDemo";
import WebSocketDemo from "../../components/demos/http-demos/WebSocketDemo";
import webSocketsContent from "../../data/learning/webSocketsContent.json";

// Maps each practice topic (by title, from webSocketsContent.json) to a
// live, interactive demo. Keeping this separate from the JSON data means
// the content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Sending & Receiving Messages": MessageExchangeDemo,
  "Broadcasting to Multiple Clients": BroadcastDemo,
  "Heartbeats (Ping/Pong)": HeartbeatDemo,
  "Reconnecting with Backoff": ReconnectDemo,
};

function WebSockets() {
  return (
    <LearningTopicLayout
      title={webSocketsContent.title}
      introduction={webSocketsContent.introduction}
      coreConcepts={webSocketsContent.coreConcepts}
      sections={[
        {
          heading: webSocketsContent.lifecycle.heading,
          description: webSocketsContent.lifecycle.description,
          content: <WebSocketDemo />,
        },
      ]}
      fullExample={webSocketsContent.fullExample}
      gettingStarted={webSocketsContent.gettingStarted}
      practiceTopics={webSocketsContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="websockets"
    />
  );
}

export default WebSockets;
