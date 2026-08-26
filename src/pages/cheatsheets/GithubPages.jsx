import CheatSheetLayout from "../../components/CheatSheetLayout";
import githubPagesContent from "../../data/cheatsheets/githubPages.json";

function GithubPages() {
  return (
    <CheatSheetLayout
      title={githubPagesContent.title}
      introduction={githubPagesContent.introduction}
      prerequisites={githubPagesContent.prerequisites}
      steps={githubPagesContent.steps}
      gettingStarted={githubPagesContent.gettingStarted}
      source={githubPagesContent.source}
    />
  );
}

export default GithubPages;
