import ContentCard from "../../components/ContentCard";
import PracticeTopicCard from "../../components/PracticeTopicCard";

const practiceTopics = [
  {
    title: "Components & JSX",
    description: "Learn to create and render components",
  },
  {
    title: "Props & State",
    description: "Manage data flow in components",
  },
  {
    title: "Hooks",
    description: "Master React hooks",
  },
  {
    title: "Performance",
    description: "Optimize React applications",
  },
];

function React() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">React Fundamentals</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">What is React?</h2>
        <p className="text-muted leading-relaxed mb-4">
          React is a JavaScript library for building user interfaces with
          reusable components. It makes creating interactive UIs painless by
          managing component state and rendering efficiently.
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">Core Concepts</h3>
        <ul className="text-muted leading-relaxed pl-6">
          <li className="mb-2">
            <strong>Components:</strong> Reusable pieces of UI
          </li>
          <li className="mb-2">
            <strong>JSX:</strong> Syntax extension for writing UI
          </li>
          <li className="mb-2">
            <strong>Props:</strong> Pass data to components
          </li>
          <li className="mb-2">
            <strong>State:</strong> Manage component data
          </li>
          <li className="mb-2">
            <strong>Hooks:</strong> Add functionality to function components
          </li>
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">React Hooks</h3>
        <p className="text-muted leading-relaxed mb-4">
          Hooks let you use state and other React features in function
          components. Common hooks include useState, useEffect, useContext, and
          useReducer.
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          Getting Started
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          <li className="mb-2">Create components with JSX</li>
          <li className="mb-2">Use useState to manage state</li>
          <li className="mb-2">Use useEffect for side effects</li>
          <li className="mb-2">Pass props between components</li>
          <li className="mb-2">Compose components together</li>
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

export default React;
