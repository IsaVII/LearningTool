import AuthDemo from "../../components/http-demos/AuthDemo";
import ContentCard from "../../components/ContentCard";
import CorsDemo from "../../components/http-demos/CorsDemo";
import FetchAbortDemo from "../../components/http-demos/FetchAbortDemo";
import HeadersCookiesDemo from "../../components/http-demos/HeadersCookiesDemo";
import httpContent from "../../data/httpContent.json";
import MethodsStatusDemo from "../../components/http-demos/MethodsStatusDemo";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import RequestResponseDemo from "../../components/http-demos/RequestResponseDemo";
import RestJsonDemo from "../../components/http-demos/RestJsonDemo";
import SseDemo from "../../components/http-demos/SseDemo";
import StepByStepExample from "../../components/StepByStepExample";
import WebSocketDemo from "../../components/http-demos/WebSocketDemo";

// Maps each practice topic (by title, from httpContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Methods & Status Codes": MethodsStatusDemo,
  "Headers & Cookies": HeadersCookiesDemo,
  CORS: CorsDemo,
  "REST & JSON": RestJsonDemo,
  "Fetch & AbortController": FetchAbortDemo,
  Authentication: AuthDemo,
  WebSockets: WebSocketDemo,
  "Server-Sent Events (SSE)": SseDemo,
};

function Http() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{httpContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {httpContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {httpContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {httpContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {httpContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {httpContent.lifecycle.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {httpContent.lifecycle.description}
        </p>
        <RequestResponseDemo />

        {httpContent.fullExample && (
          <>
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {httpContent.fullExample.heading}
            </h3>
            <StepByStepExample
              title={httpContent.fullExample.title}
              description={httpContent.fullExample.description}
              code={httpContent.fullExample.code}
              steps={httpContent.fullExample.steps}
            />
          </>
        )}

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {httpContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {httpContent.gettingStarted.steps.map((step, index) => (
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
          {httpContent.practiceTopics.map((topic) => {
            const Demo = practiceDemos[topic.title];
            return (
              <PracticeTopicCard
                key={topic.title}
                topicKey="http"
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

export default Http;
