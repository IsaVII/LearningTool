import CheatSheetLayout from "../../components/CheatSheetLayout";
import sqlData from "../../data/cheatsheets/sql.json";

function SQL() {
  const sqlContent = sqlData.default || sqlData;

  return (
    <CheatSheetLayout
      key="sql"
      title={sqlContent.title}
      introduction={sqlContent.introduction}
      prerequisites={sqlContent.prerequisites}
      steps={sqlContent.steps}
      gettingStarted={sqlContent.gettingStarted}
      source={sqlContent.source}
    />
  );
}

export default SQL;
