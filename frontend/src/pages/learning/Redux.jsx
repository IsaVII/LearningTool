import ContentCard from "../../components/ContentCard";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import AsyncThunkDemo from "../../components/redux-demos/AsyncThunkDemo";
import CodeBlock from "../../components/CodeBlock";
import DataFlowDemo from "../../components/redux-demos/DataFlowDemo";
import HooksSeparationDemo from "../../components/redux-demos/HooksSeparationDemo";
import SliceActionLogDemo from "../../components/redux-demos/SliceActionLogDemo";
import StoreCounterDemo from "../../components/redux-demos/StoreCounterDemo";
import reduxContent from "../../data/reduxContent.json";

// Maps each practice topic (by title, from reduxContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Basic Store Setup": StoreCounterDemo,
  "Creating Slices": SliceActionLogDemo,
  "Using Hooks": HooksSeparationDemo,
  "Async Operations": AsyncThunkDemo,
};

function Redux() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{reduxContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {reduxContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {reduxContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reduxContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {reduxContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <p className="text-muted leading-relaxed mt-4 mb-4">
          Every Redux update follows the same one-way cycle: the UI dispatches
          an action, the store runs the reducer to calculate a new state, and
          the UI reads that new state.
        </p>
        <DataFlowDemo />

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reduxContent.toolkit.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {reduxContent.toolkit.description}
        </p>
        <CodeBlock>{`// configureStore replaces createStore + manual middleware setup
const store = configureStore({
  reducer: { counter: counterReducer },
});

// createSlice replaces hand-written action types, action
// creators, and a switch-statement reducer
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incremented: (state) => { state.value += 1 },
  },
});`}</CodeBlock>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {reduxContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {reduxContent.gettingStarted.steps.map((step, index) => (
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
          {reduxContent.practiceTopics.map((topic) => {
            const Demo = practiceDemos[topic.title];
            return (
              <PracticeTopicCard
                key={topic.title}
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

export default Redux;
