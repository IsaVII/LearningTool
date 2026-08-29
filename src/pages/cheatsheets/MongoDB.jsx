import CheatSheetLayout from "../../components/CheatSheetLayout";
import mongoDBData from "../../data/cheatsheets/mongodb.json";

function MongoDB() {
  const mongoDBContent = mongoDBData.default || mongoDBData;

  return (
    <CheatSheetLayout
      key="mongodb"
      title={mongoDBContent.title}
      introduction={mongoDBContent.introduction}
      prerequisites={mongoDBContent.prerequisites}
      steps={mongoDBContent.steps}
      gettingStarted={mongoDBContent.gettingStarted}
      source={mongoDBContent.source}
    />
  );
}

export default MongoDB;
