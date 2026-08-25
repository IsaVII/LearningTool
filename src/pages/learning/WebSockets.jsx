import BroadcastDemo from "../../components/websockets-demos/BroadcastDemo";
import ContentCard from "../../components/ContentCard";
import HeartbeatDemo from "../../components/websockets-demos/HeartbeatDemo";
import MessageExchangeDemo from "../../components/websockets-demos/MessageExchangeDemo";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import ReconnectDemo from "../../components/websockets-demos/ReconnectDemo";
import StepByStepExample from "../../components/StepByStepExample";
import WebSocketDemo from "../../components/http-demos/WebSocketDemo";
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
    <>
      <h1 className="text-4xl text-heading mb-4">{webSocketsContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {webSocketsContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {webSocketsContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {webSocketsContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {webSocketsContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {webSocketsContent.lifecycle.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {webSocketsContent.lifecycle.description}
        </p>
        <WebSocketDemo />

        {webSocketsContent.fullExample && (
          <>
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {webSocketsContent.fullExample.heading}
            </h3>
            <StepByStepExample
              title={webSocketsContent.fullExample.title}
              description={webSocketsContent.fullExample.description}
              code={webSocketsContent.fullExample.code}
              steps={webSocketsContent.fullExample.steps}
            />
          </>
        )}

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {webSocketsContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {webSocketsContent.gettingStarted.steps.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">Practice Topics</h3>
        <p className="text-muted text-sm mb-4">
          Click a topic to open a live, editable example.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {webSocketsContent.practiceTopics.map((topic) => {
            const Demo = practiceDemos[topic.title];
            return (
              <PracticeTopicCard
                key={topic.title}
                topicKey="websockets"
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

export default WebSockets;
