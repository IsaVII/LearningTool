import BranchMergeDemo from "../../components/demos/git-demos/BranchMergeDemo";
import CherryPickDemo from "../../components/demos/git-demos/CherryPickDemo";
import CloneRemoteDemo from "../../components/demos/git-demos/CloneRemoteDemo";
import ConflictResolutionDemo from "../../components/demos/git-demos/ConflictResolutionDemo";
import gitContent from "../../data/learning/gitContent.json";
import GitignoreDemo from "../../components/demos/git-demos/GitignoreDemo";
import LearningTopicLayout from "../../components/LearningTopicLayout";
import RebaseDemo from "../../components/demos/git-demos/RebaseDemo";
import ResetRevertDemo from "../../components/demos/git-demos/ResetRevertDemo";
import StagingCommitDemo from "../../components/demos/git-demos/StagingCommitDemo";
import StashDemo from "../../components/demos/git-demos/StashDemo";

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
    <LearningTopicLayout
      title={gitContent.title}
      introduction={gitContent.introduction}
      coreConcepts={gitContent.coreConcepts}
      sections={[
        {
          heading: gitContent.threeStates.heading,
          description: gitContent.threeStates.description,
        },
      ]}
      fullExample={gitContent.fullExample}
      gettingStarted={gitContent.gettingStarted}
      practiceTopics={gitContent.practiceTopics}
      practiceDemos={practiceDemos}
      topicKey="git"
    />
  );
}

export default Git;
