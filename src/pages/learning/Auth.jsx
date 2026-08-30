import authContent from "../../data/learning/authContent.json";
import AuthFlowDemo from "../../components/auth-demos/AuthFlowDemo";
import JwtDemo from "../../components/auth-demos/JwtDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import OAuthDemo from "../../components/auth-demos/OAuthDemo";
import PasswordHashingDemo from "../../components/auth-demos/PasswordHashingDemo";
import ProtectedRouteDemo from "../../components/auth-demos/ProtectedRouteDemo";
import RbacDemo from "../../components/auth-demos/RbacDemo";
import SessionsDemo from "../../components/auth-demos/SessionsDemo";

// Maps each practice topic (by title, from authContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Password Hashing": PasswordHashingDemo,
  "Sessions & Cookies": SessionsDemo,
  "JSON Web Tokens": JwtDemo,
  "Protecting Routes": ProtectedRouteDemo,
  "Role-Based Access Control": RbacDemo,
  "OAuth (Sign in with...)": OAuthDemo,
};

function Auth() {
  return (
    <LearningTopicLayout
      title={authContent.title}
      introduction={authContent.introduction}
      coreConcepts={authContent.coreConcepts}
      sections={[
        {
          heading: authContent.flow.heading,
          description: authContent.flow.description,
          content: <AuthFlowDemo />,
        },
      ]}
      fullExample={authContent.fullExample}
      gettingStarted={authContent.gettingStarted}
      practiceTopics={authContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="auth"
    />
  );
}

export default Auth;
