import deploymentContent from "../../data/learning/deploymentContent.json";
import DeploymentPipelineDemo from "../../components/deployment-demos/DeploymentPipelineDemo";
import EnvironmentVariablesDemo from "../../components/deployment-demos/EnvironmentVariablesDemo";
import GithubActionsDemo from "../../components/deployment-demos/GithubActionsDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import PlatformComparisonDemo from "../../components/deployment-demos/PlatformComparisonDemo";
import PreviewRollbackDemo from "../../components/deployment-demos/PreviewRollbackDemo";

// Maps each practice topic (by title, from deploymentContent.json) to a
// live, interactive demo. Keeping this separate from the JSON data means
// the content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Choosing a Platform": PlatformComparisonDemo,
  "Environment Variables & Secrets": EnvironmentVariablesDemo,
  "GitHub Actions Basics": GithubActionsDemo,
  "Preview Deployments & Rollbacks": PreviewRollbackDemo,
};

function Deployment() {
  return (
    <LearningTopicLayout
      title={deploymentContent.title}
      introduction={deploymentContent.introduction}
      coreConcepts={deploymentContent.coreConcepts}
      sections={[
        {
          heading: deploymentContent.pipeline.heading,
          description: deploymentContent.pipeline.description,
          content: <DeploymentPipelineDemo />,
        },
      ]}
      fullExample={deploymentContent.fullExample}
      gettingStarted={deploymentContent.gettingStarted}
      practiceTopics={deploymentContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="deployment"
    />
  );
}

export default Deployment;
