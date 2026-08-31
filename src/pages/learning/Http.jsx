import AuthDemo from "../../components/demos/http-demos/AuthDemo";
import CorsDemo from "../../components/demos/http-demos/CorsDemo";
import FetchAbortDemo from "../../components/demos/http-demos/FetchAbortDemo";
import HeadersCookiesDemo from "../../components/demos/http-demos/HeadersCookiesDemo";
import httpContent from "../../data/learning/httpContent.json";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import MethodsStatusDemo from "../../components/demos/http-demos/MethodsStatusDemo";
import RequestResponseDemo from "../../components/demos/http-demos/RequestResponseDemo";
import RestJsonDemo from "../../components/demos/http-demos/RestJsonDemo";
import SseDemo from "../../components/demos/http-demos/SseDemo";
import WebSocketDemo from "../../components/demos/http-demos/WebSocketDemo";

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
    <LearningTopicLayout
      title={httpContent.title}
      introduction={httpContent.introduction}
      coreConcepts={httpContent.coreConcepts}
      sections={[
        {
          heading: httpContent.lifecycle.heading,
          description: httpContent.lifecycle.description,
          content: <RequestResponseDemo />,
        },
      ]}
      fullExample={httpContent.fullExample}
      gettingStarted={httpContent.gettingStarted}
      practiceTopics={httpContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="http"
    />
  );
}

export default Http;
