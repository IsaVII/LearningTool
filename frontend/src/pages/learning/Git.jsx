import BranchMergeDemo from "../../components/git-demos/BranchMergeDemo";
import CherryPickDemo from "../../components/git-demos/CherryPickDemo";
import CloneRemoteDemo from "../../components/git-demos/CloneRemoteDemo";
import ConflictResolutionDemo from "../../components/git-demos/ConflictResolutionDemo";
import ContentCard from "../../components/ContentCard";
import GitignoreDemo from "../../components/git-demos/GitignoreDemo";
import PracticeTopicCard from "../../components/PracticeTopicCard";
import RebaseDemo from "../../components/git-demos/RebaseDemo";
import ResetRevertDemo from "../../components/git-demos/ResetRevertDemo";
import StagingCommitDemo from "../../components/git-demos/StagingCommitDemo";
import StashDemo from "../../components/git-demos/StashDemo";
import StepByStepExample from "../../components/StepByStepExample";
import gitContent from "../../data/gitContent.json";

// Maps each practice topic (by title, from gitContent.json) to a live,
// interactive demo. Keeping this separate from the JSON data means the
// content stays data-driven while the runnable examples stay real code.
const practiceDemos = {
  "Clone & Remotes": CloneRemoteDemo,
  "Staging & Committing": StagingCommitDemo,
  "Branching & Merging": BranchMergeDemo,
  Rebase: RebaseDemo,
  Stash: StashDemo,
  "Reset & Revert": ResetRevertDemo,
  "Cherry-pick": CherryPickDemo,
  "Resolving Conflicts": ConflictResolutionDemo,
  ".gitignore": GitignoreDemo,
};

function Git() {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{gitContent.title}</h1>

      <ContentCard>
        <h2 className="text-3xl text-heading mt-8 mb-4">
          {gitContent.introduction.heading}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {gitContent.introduction.description}
        </p>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {gitContent.coreConcepts.heading}
        </h3>
        <ul className="text-muted leading-relaxed pl-6">
          {gitContent.coreConcepts.concepts.map((concept) => (
            <li key={concept.title} className="mb-2">
              <strong>{concept.title}:</strong> {concept.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {gitContent.threeStates.heading}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {gitContent.threeStates.description}
        </p>

        {gitContent.fullExample && (
          <>
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {gitContent.fullExample.heading}
            </h3>
            <StepByStepExample
              title={gitContent.fullExample.title}
              description={gitContent.fullExample.description}
              code={gitContent.fullExample.code}
              steps={gitContent.fullExample.steps}
            />
          </>
        )}

        <h3 className="text-2xl text-heading-alt mt-6 mb-3">
          {gitContent.gettingStarted.heading}
        </h3>
        <ol className="text-muted leading-relaxed pl-6">
          {gitContent.gettingStarted.steps.map((step, index) => (
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
          {gitContent.practiceTopics.map((topic) => {
            const Demo = practiceDemos[topic.title];
            return (
              <PracticeTopicCard
                key={topic.title}
                topicKey="git"
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

export default Git;
