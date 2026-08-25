import AsyncThunkDemo from "../../components/redux-demos/AsyncThunkDemo";
import CodeBlock from "../../components/CodeBlock";
import DataFlowDemo from "../../components/redux-demos/DataFlowDemo";
import HooksSeparationDemo from "../../components/redux-demos/HooksSeparationDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import reduxContent from "../../data/learning/reduxContent.json";
import SliceActionLogDemo from "../../components/redux-demos/SliceActionLogDemo";
import StoreCounterDemo from "../../components/redux-demos/StoreCounterDemo";

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
    <LearningTopicLayout
      title={reduxContent.title}
      introduction={reduxContent.introduction}
      coreConcepts={reduxContent.coreConcepts}
      sections={[
        {
          description:
            "Every Redux update follows the same one-way cycle: the UI dispatches an action, the store runs the reducer to calculate a new state, and the UI reads that new state.",
          content: <DataFlowDemo />,
        },
        {
          heading: reduxContent.toolkit.heading,
          description: reduxContent.toolkit.description,
          content: (
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
          ),
        },
      ]}
      fullExample={reduxContent.fullExample}
      gettingStarted={reduxContent.gettingStarted}
      practiceTopics={reduxContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="redux"
    />
  );
}

export default Redux;
