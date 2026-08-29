import CheatSheetLayout from "../../components/CheatSheetLayout";
import npmLibrariesData from "../../data/cheatsheets/npmLibraries.json";

function NpmLibraries() {
  const npmLibrariesContent = npmLibrariesData.default || npmLibrariesData;

  return (
    <CheatSheetLayout
      key="npmlibraries"
      title={npmLibrariesContent.title}
      introduction={npmLibrariesContent.introduction}
      prerequisites={npmLibrariesContent.prerequisites}
      steps={npmLibrariesContent.steps}
      gettingStarted={npmLibrariesContent.gettingStarted}
      source={npmLibrariesContent.source}
    />
  );
}

export default NpmLibraries;
