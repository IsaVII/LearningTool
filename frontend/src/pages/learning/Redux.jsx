import ContentCard from "../../components/ContentCard";
import PracticeTopicCard from "../../components/PracticeTopicCard";

const practiceTopics = [
  {
    title: "Basic Store Setup",
    description: "Learn how to configure a Redux store",
  },
  {
    title: "Creating Slices",
    description: "Understand Redux Toolkit slices",
  },
  {
    title: "Using Hooks",
    description: "Master useSelector and useDispatch",
  },
  {
    title: "Async Operations",
    description: "Handle async logic with thunks",
  },
];

function Redux() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">Redux Fundamentals</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">What is Redux?</h2>
        <p className="text-muted leading-relaxed mb-4">
          Redux is a predictable state container for JavaScript applications. It
          helps you write applications that behave consistently and are easy to
          test.
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">Core Concepts</h3>
        <ul className="text-muted leading-relaxed pl-6">
          <li className="mb-2">
            <strong>Store:</strong> Single source of truth for your app state
          </li>
          <li className="mb-2">
            <strong>Actions:</strong> Plain objects describing what happened
          </li>
          <li className="mb-2">
            <strong>Reducers:</strong> Pure functions that return new state
          </li>
          <li className="mb-2">
            <strong>Selectors:</strong> Functions to extract state slices
          </li>
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">Redux Toolkit</h3>
        <p className="text-muted leading-relaxed mb-4">
          Redux Toolkit simplifies Redux development by providing helpful
          utilities like configureStore and createSlice that reduce boilerplate
          code.
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          Getting Started
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          <li className="mb-2">Create a Redux store with configureStore</li>
          <li className="mb-2">Create slices to define reducers and actions</li>
          <li className="mb-2">Use useSelector to read state in components</li>
          <li className="mb-2">Use useDispatch to dispatch actions</li>
        </ol>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          Practice Topics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {practiceTopics.map((topic) => (
            <PracticeTopicCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </ContentCard>
    </>
  );
}

export default Redux;
