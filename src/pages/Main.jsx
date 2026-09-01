import { useTranslation } from "react-i18next";
import learningContentEn from "../data/learningContent.json";
import cheatSheetsEn from "../data/cheatsheets.json";
import learningContentSv from "../data/sv/learningContent.json";
import cheatSheetsSv from "../data/sv/cheatsheets.json";
import Reveal from "../components/motion/Reveal";
import TextReveal from "../components/motion/TextReveal";
import TopicCard from "../components/TopicCard";
import { useProgress } from "../context/ProgressContext";

const CONTENT_MAP = {
  en: {
    learning: learningContentEn,
    cheatsheets: cheatSheetsEn,
  },
  sv: {
    learning: learningContentSv,
    cheatsheets: cheatSheetsSv,
  },
};

function Main() {
  const { getTotalCheckedTopics } = useProgress();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const learningContent =
    CONTENT_MAP[currentLang]?.learning || CONTENT_MAP.en.learning;
  const cheatSheets =
    CONTENT_MAP[currentLang]?.cheatsheets || CONTENT_MAP.en.cheatsheets;

  const checkedTopics = getTotalCheckedTopics();
  const totalTopics = learningContent.topics.length;

  return (
    <>
      <section className="flex flex-col items-center text-center py-2 mb-3">
        <TextReveal
          as="h1"
          text={t("main.title")}
          className="text-4xl mb-2 text-heading"
        />
        <p className="text-lg text-muted w-2/3">{t("main.subtitle")}</p>
      </section>

      <section className="py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl text-heading">{t("main.learningSection")}</h2>
          <div className="text-lg text-muted font-semibold">
            Progress {checkedTopics} of {totalTopics}
          </div>
        </div>
        <div className="stagger-children w-full max-w-210 justify-self-center grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {learningContent.topics.map((topic, i) => (
            <Reveal key={topic.id} index={i % 4}>
              <TopicCard topic={topic} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 px-4">
        <h2 className="text-3xl mb-8 text-heading">Cheat Sheets</h2>
        <div className="stagger-children w-full max{t('main.cheatsheetsSection')}fy-self-center grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {cheatSheets.topics.map((topic, i) => (
            <Reveal key={topic.id} index={i % 4}>
              <TopicCard topic={topic} isCheatSheet={true} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
