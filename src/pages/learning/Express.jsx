import BodyParsingDemo from "../../components/demos/express-demos/BodyParsingDemo";
import ErrorHandlingDemo from "../../components/demos/express-demos/ErrorHandlingDemo";
import expressContent from "../../data/learning/expressContent.json";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import MiddlewarePipelineDemo from "../../components/demos/express-demos/MiddlewarePipelineDemo";
import RequestResponseDemo from "../../components/demos/express-demos/RequestResponseDemo";
import RouterDemo from "../../components/demos/express-demos/RouterDemo";
import RoutingDemo from "../../components/demos/express-demos/RoutingDemo";
import ThirdPartyMiddlewareDemo from "../../components/demos/express-demos/ThirdPartyMiddlewareDemo";

// Maps each practice topic (by title, from expressContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Routing & Route Params": RoutingDemo,
  "Request & Response": RequestResponseDemo,
  "express.Router()": RouterDemo,
  "Body Parsing": BodyParsingDemo,
  "Error Handling": ErrorHandlingDemo,
  "Third-Party Middleware": ThirdPartyMiddlewareDemo,
};

function Express() {
  return (
    <LearningTopicLayout
      title={expressContent.title}
      introduction={expressContent.introduction}
      coreConcepts={expressContent.coreConcepts}
      sections={[
        {
          heading: expressContent.pipeline.heading,
          description: expressContent.pipeline.description,
          content: <MiddlewarePipelineDemo />,
        },
      ]}
      fullExample={expressContent.fullExample}
      gettingStarted={expressContent.gettingStarted}
      practiceTopics={expressContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="express"
    />
  );
}

export default Express;
