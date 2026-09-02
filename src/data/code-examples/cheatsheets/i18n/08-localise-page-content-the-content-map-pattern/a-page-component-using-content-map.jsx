import { useTranslation } from 'react-i18next';
import CheatSheetLayout from '../../components/CheatSheetLayout';
import myTopicEn from '../../data/cheatsheets/myTopic.json';
import myTopicSv from '../../data/sv/cheatsheets/myTopic.json';

const CONTENT_MAP = {
  en: myTopicEn,
  sv: myTopicSv,
};

function MyTopic() {
  const { i18n } = useTranslation();
  // Fall back to English if the current language has no content yet
  const content = CONTENT_MAP[i18n.language] || CONTENT_MAP.en;

  return (
    <CheatSheetLayout
      title={content.title}
      introduction={content.introduction}
      prerequisites={content.prerequisites}
      steps={content.steps}
    />
  );
}

export default MyTopic;
