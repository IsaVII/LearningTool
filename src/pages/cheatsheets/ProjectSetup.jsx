import CheatSheetLayout from "../../components/CheatSheetLayout";
import projectSetupContent from "../../data/cheatsheets/projectSetup.json";

function ProjectSetup() {
  return (
    <CheatSheetLayout
      title={projectSetupContent.title}
      introduction={projectSetupContent.introduction}
      prerequisites={projectSetupContent.prerequisites}
      steps={projectSetupContent.steps}
      folderStructure={projectSetupContent.folderStructure}
      backendSetup={projectSetupContent.backendSetup}
      whatYouMightBeMissing={projectSetupContent.whatYouMightBeMissing}
      gettingStarted={projectSetupContent.gettingStarted}
      source={projectSetupContent.source}
    />
  );
}

export default ProjectSetup;
