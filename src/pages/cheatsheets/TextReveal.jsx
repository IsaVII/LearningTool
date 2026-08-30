import CheatSheetLayout from "../../components/CheatSheetLayout";
import textRevealContent from "../../data/cheatsheets/textReveal.json";

function TextReveal() {
  return (
    <CheatSheetLayout
      title={textRevealContent.title}
      introduction={textRevealContent.introduction}
      prerequisites={textRevealContent.prerequisites}
      steps={textRevealContent.steps}
      whatYouMightBeMissing={textRevealContent.whatYouMightBeMissing}
      gettingStarted={textRevealContent.gettingStarted}
      source={textRevealContent.source}
    />
  );
}

export default TextReveal;
