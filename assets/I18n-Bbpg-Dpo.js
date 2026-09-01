import{a as e,i as t}from"./TextReveal-BmuH47v_.js";import{t as n}from"./CheatSheetLayout-BH6MCR61.js";function r(t,n){let{i18n:r}=e();return{en:t,sv:n}[r.language]??t}var i={title:`Multilanguage (i18n) Cheat Sheet`,introduction:{heading:`Adding Multilanguage Support the Way This App Does It`,description:`This app uses i18next and react-i18next for UI string translations (nav, buttons, labels) and a parallel file-based approach for page content. UI strings live in src/locales/<lang>/common.json and are accessed via the useTranslation hook. Longer page content (steps, descriptions, code) lives in src/data/<lang>/ mirrors of the default English files and is selected at render time with a CONTENT_MAP keyed by i18n.language. The language choice is persisted in localStorage and restored on page load.`},prerequisites:[`An existing React + Vite project (the same stack this app uses)`,`Node.js and npm installed`,`Familiarity with React hooks (useState, useEffect) and ES modules`],steps:[{id:1,title:`Install the Libraries`,description:`Install i18next (the core library) and react-i18next (the React bindings that provide hooks and components).`,code:`npm install i18next react-i18next`,language:`bash`,note:`These are the only two npm packages this app adds for i18n. No language-detection plugins, no backend loaders – just the core and the React bindings.`},{id:2,title:`Create the Locale Files`,description:`Add a locales folder under src/ with one subfolder per language. Each subfolder holds a common.json with the UI strings for that language. Mirror every key across all languages – missing keys fall back to the fallbackLng you set in the next step.`,code:`src/
  locales/
    en/
      common.json   ← English UI strings (always required)
    sv/
      common.json   ← Swedish UI strings`,language:`bash`,subSteps:[{title:`src/locales/en/common.json`,description:`The English (default) translation file. Every key you want to use in components goes here first.`,code:`{
  "header": {
    "home": "Home",
    "learning": "Learning",
    "cheatsheets": "Cheat Sheets"
  },
  "main": {
    "title": "WebDev Playground",
    "subtitle": "Learn web development through interactive examples",
    "searchPlaceholder": "Search topics..."
  },
  "difficulty": {
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced"
  },
  "common": {
    "loading": "Loading...",
    "backToHome": "Back to Home"
  }
}`,language:`json`,note:`Use dot-separated namespaces (e.g. header.home) to keep strings organised. The shape is entirely up to you – as long as every language file matches.`},{title:`src/locales/sv/common.json`,description:`The Swedish translation file. Must mirror the exact same key structure as the English file.`,code:`{
  "header": {
    "home": "Hem",
    "learning": "Lärande",
    "cheatsheets": "Snabbguider"
  },
  "main": {
    "title": "WebDev Playground",
    "subtitle": "Lär dig webbutveckling genom interaktiva exempel",
    "searchPlaceholder": "Sök ämnen..."
  },
  "difficulty": {
    "beginner": "Nybörjare",
    "intermediate": "Medel",
    "advanced": "Avancerad"
  },
  "common": {
    "loading": "Laddar...",
    "backToHome": "Tillbaka till Hem"
  }
}`,language:`json`}]},{id:3,title:`Create src/i18n.js`,description:`Initialise i18next once, outside React, by importing both locale files and calling i18n.init(). Read the saved language from localStorage so the user's preference survives a page reload. Export the instance – it's imported by main.jsx before the app renders.`,code:`import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en/common.json';
import svTranslations from './locales/sv/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    sv: { translation: svTranslations },
  },
  // Restore saved language; fall back to English
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;`,language:`javascript`,highlightLines:[12,13],note:`escapeValue: false is safe in React because JSX already escapes output. Without it i18next would double-escape characters like & and <.`},{id:4,title:`Import i18n.js in main.jsx`,description:`Import the i18n module once, before <App /> renders, so the instance is configured before any component tries to call useTranslation().`,code:`import ReactDOM from 'react-dom/client';
import './i18n';           // ← must come before <App />
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`,language:`jsx`,highlightLines:[2],note:`Order matters: the import runs synchronously, so i18next is fully initialised before any component mounts.`},{id:5,title:`Use Translations in Components`,description:`Call useTranslation() in any component to get the t() function. Pass a dot-separated key that matches the structure in your locale files. i18next returns the string for the currently active language.`,code:`import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <nav>
      <a href="/">{t('header.home')}</a>
      <a href="/learning">{t('header.learning')}</a>
      <a href="/cheatsheets">{t('header.cheatsheets')}</a>
    </nav>
  );
}

export default Header;`,language:`jsx`,highlightLines:[1,4,8,9,10],note:`t('header.home') looks up the 'home' key inside the 'header' object. If the key is missing in the active language, i18next returns the fallback language value.`},{id:6,title:`Build the LanguageSwitcher Component`,description:`This is the component that actually changes the language. Call i18n.changeLanguage() with the new locale code and write it to localStorage so it survives a reload. i18next triggers a re-render of every component that uses useTranslation() automatically.`,code:`import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);  // persist the choice
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={\`px-3 py-1 rounded transition-colors \${
          i18n.language === 'en'
            ? 'bg-blue-600 text-white'           // active
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'  // inactive
        }\`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('sv')}
        className={\`px-3 py-1 rounded transition-colors \${
          i18n.language === 'sv'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }\`}
        aria-label="Byt till Svenska"
      >
        SV
      </button>
    </div>
  );
}

export default LanguageSwitcher;`,language:`jsx`,highlightLines:[7,8,15,26],note:`i18n.language holds the currently active locale code ('en', 'sv', …). Compare it against each button's code to show the active state.`},{id:7,title:`Add LanguageSwitcher to the Header`,description:`Place <LanguageSwitcher /> anywhere in your Header component. It reads and writes language state via i18next, so no props are needed.`,code:`import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <nav className="flex gap-4">
        <a href="/">{t('header.home')}</a>
        <a href="/learning">{t('header.learning')}</a>
      </nav>

      {/* Language toggle sits in the header alongside nav/theme toggle */}
      <LanguageSwitcher />
    </header>
  );
}

export default Header;`,language:`jsx`,highlightLines:[1,15]},{id:8,title:`Localise Page Content (the CONTENT_MAP Pattern)`,description:`UI strings are handled by i18next, but longer page content (steps, code examples, descriptions) lives in separate JSON files under src/data/ (English) and src/data/sv/ (Swedish). Each page component imports both versions and picks the right one at render time using a CONTENT_MAP keyed by i18n.language.`,code:`// File layout
src/data/
  cheatsheets/
    myTopic.json          ← English content (default)
  sv/
    cheatsheets/
      myTopic.json        ← Swedish content (same shape)`,language:`bash`,subSteps:[{title:`Page component using CONTENT_MAP`,description:`Import both JSON files, build a CONTENT_MAP object, then select the right one by language at render time. Adding a new language means adding one import and one key to the map.`,code:`import { useTranslation } from 'react-i18next';
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

export default MyTopic;`,language:`jsx`,highlightLines:[3,4,6,7,8,14],note:`The || CONTENT_MAP.en fallback means a partially-translated app never shows blank content – it gracefully degrades to English.`},{title:`Swedish content file (src/data/sv/cheatsheets/myTopic.json)`,description:`The Swedish file must have the same top-level keys as the English one. Only translate the values – never change the key names.`,code:`{
  "title": "Mitt Ämne – Snabbguide",
  "introduction": {
    "heading": "Kom igång med Mitt Ämne",
    "description": "En kortfattad beskrivning på svenska."
  },
  "prerequisites": [
    "Krav ett",
    "Krav två"
  ],
  "steps": [
    {
      "id": 1,
      "title": "Första steget",
      "description": "Vad du ska göra i detta steg.",
      "code": "npm install something",
      "language": "bash"
    }
  ]
}`,language:`json`,note:`Code blocks (the 'code' field) are usually kept in English since they're syntax, not prose. Only translate 'title', 'description', and 'note' fields.`}]},{id:9,title:`Register the New Cheatsheet in the App`,description:`Once the page component and both JSON content files exist, wire it up in three places: the cheatsheet registry (cheatsheets.json and sv/cheatsheets.json), App.jsx for routing, and optionally the Header nav.`,code:`// 1. src/data/cheatsheets.json – add an entry to the topics array
{
  "id": 7,
  "key": "mytopic",
  "title": "My Topic",
  "description": "Short description shown on the home page card",
  "route": "/mytopic",
  "screenshot": "/images/mytopic.png",
  "difficulty": "beginner",
  "estimatedTime": "15 minutes"
}

// 2. src/data/sv/cheatsheets.json – same entry, translated
{
  "id": 7,
  "key": "mytopic",
  "title": "Mitt Ämne",
  "description": "Kort beskrivning som visas på startsidans kort",
  "route": "/mytopic",
  "screenshot": "/images/mytopic.png",
  "difficulty": "beginner",
  "estimatedTime": "15 minuter"
}

// 3. src/App.jsx – add the lazy import and Route
const MyTopic = lazy(() => import('./pages/cheatsheets/MyTopic'));
// … inside <Routes>:
<Route path="/mytopic" element={<MyTopic />} />`,language:`javascript`,highlightLines:[25,28],note:`The 'key' field in cheatsheets.json is used by ProgressContext to store completion state, so keep it unique and stable.`}],gettingStarted:{title:`Adding a New Language – Checklist`,steps:[`Add a new folder under src/locales/<lang>/ with common.json, mirroring every key from en/common.json`,`Add an import and a resources entry for the new language in src/i18n.js`,`Add a new button to LanguageSwitcher.jsx that calls changeLanguage('<lang>')`,`For each page that has localised content, create src/data/<lang>/cheatsheets/<page>.json (or src/data/<lang>/learning/<page>.json) with translated prose`,`Add the new locale's entry to the CONTENT_MAP in each affected page component`,`Add a translated entry in src/data/<lang>/cheatsheets.json (and learningContent.json) for the home-page card text`]},source:{label:`i18next documentation`,url:`https://www.i18next.com/`}},a={title:`Flerspråkighet (i18n) Snabbguide`,introduction:{heading:`Lägga till flerspråkigt stöd på samma sätt som den här appen gör det`,description:`Den här appen använder i18next och react-i18next för UI-strängar (navigering, knappar, etiketter) och en parallell filbaserad metod för sidinnehåll. UI-strängar finns i src/locales/<språk>/common.json och används via useTranslation-hooken. Längre sidinnehåll (steg, beskrivningar, kod) finns i src/data/<språk>/-speglingar av de engelska standardfilerna och väljs vid rendering med en CONTENT_MAP nycklad på i18n.language. Språkvalet sparas i localStorage och återställs vid sidladdning.`},prerequisites:[`Ett befintligt React + Vite-projekt (samma stack som den här appen använder)`,`Node.js och npm installerade`,`Bekantskap med React hooks (useState, useEffect) och ES-moduler`],steps:[{id:1,title:`Installera biblioteken`,description:`Installera i18next (kärnbiblioteket) och react-i18next (React-bindningarna som tillhandahåller hooks och komponenter).`,code:`npm install i18next react-i18next`,language:`bash`,note:`Det är de enda två npm-paketen den här appen lägger till för i18n. Inga språkdetekterings-plugins, inga backend-laddare – bara kärnan och React-bindningarna.`},{id:2,title:`Skapa lokalfiler`,description:`Lägg till en locales-mapp under src/ med en undermapp per språk. Varje undermapp innehåller en common.json med UI-strängarna för det språket. Spegla varje nyckel i alla språk – saknade nycklar faller tillbaka till fallbackLng du anger i nästa steg.`,code:`src/
  locales/
    en/
      common.json   ← Engelska UI-strängar (alltid obligatoriska)
    sv/
      common.json   ← Svenska UI-strängar`,language:`bash`,subSteps:[{title:`src/locales/en/common.json`,description:`Den engelska (standard) översättningsfilen. Varje nyckel du vill använda i komponenter läggs till här först.`,code:`{
  "header": {
    "home": "Home",
    "learning": "Learning",
    "cheatsheets": "Cheat Sheets"
  },
  "main": {
    "title": "WebDev Playground",
    "subtitle": "Learn web development through interactive examples",
    "searchPlaceholder": "Search topics..."
  },
  "difficulty": {
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced"
  },
  "common": {
    "loading": "Loading...",
    "backToHome": "Back to Home"
  }
}`,language:`json`,note:`Använd punkt-separerade namnrymder (t.ex. header.home) för att hålla strängarna organiserade. Strukturen är helt upp till dig – så länge varje språkfil matchar.`},{title:`src/locales/sv/common.json`,description:`Den svenska översättningsfilen. Måste spegla exakt samma nyckelstruktur som den engelska filen.`,code:`{
  "header": {
    "home": "Hem",
    "learning": "Lärande",
    "cheatsheets": "Snabbguider"
  },
  "main": {
    "title": "WebDev Playground",
    "subtitle": "Lär dig webbutveckling genom interaktiva exempel",
    "searchPlaceholder": "Sök ämnen..."
  },
  "difficulty": {
    "beginner": "Nybörjare",
    "intermediate": "Medel",
    "advanced": "Avancerad"
  },
  "common": {
    "loading": "Laddar...",
    "backToHome": "Tillbaka till Hem"
  }
}`,language:`json`}]},{id:3,title:`Skapa src/i18n.js`,description:`Initiera i18next en gång, utanför React, genom att importera båda lokalfilerna och anropa i18n.init(). Läs det sparade språket från localStorage så att användarens preferens överlever en sidomladdning. Exportera instansen – den importeras av main.jsx innan appen renderas.`,code:`import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en/common.json';
import svTranslations from './locales/sv/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    sv: { translation: svTranslations },
  },
  // Återställ sparat språk; falla tillbaka till engelska
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React escapar redan värden
  },
});

export default i18n;`,language:`javascript`,highlightLines:[12,13],note:`escapeValue: false är säkert i React eftersom JSX redan escapar utdata. Utan det skulle i18next dubbelescapa tecken som & och <.`},{id:4,title:`Importera i18n.js i main.jsx`,description:`Importera i18n-modulen en gång, innan <App /> renderas, så att instansen är konfigurerad innan någon komponent försöker anropa useTranslation().`,code:`import ReactDOM from 'react-dom/client';
import './i18n';           // ← måste komma före <App />
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`,language:`jsx`,highlightLines:[2],note:`Ordning spelar roll: importen körs synkront, så i18next är helt initierat innan någon komponent monteras.`},{id:5,title:`Använd översättningar i komponenter`,description:`Anropa useTranslation() i valfri komponent för att få t()-funktionen. Skicka en punkt-separerad nyckel som matchar strukturen i dina lokalfiler. i18next returnerar strängen för det aktiva språket.`,code:`import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <nav>
      <a href="/">{t('header.home')}</a>
      <a href="/learning">{t('header.learning')}</a>
      <a href="/cheatsheets">{t('header.cheatsheets')}</a>
    </nav>
  );
}

export default Header;`,language:`jsx`,highlightLines:[1,4,8,9,10],note:`t('header.home') slår upp 'home'-nyckeln inuti 'header'-objektet. Om nyckeln saknas för det aktiva språket returnerar i18next fallback-språkets värde.`},{id:6,title:`Bygg LanguageSwitcher-komponenten`,description:`Det här är komponenten som faktiskt byter språk. Anropa i18n.changeLanguage() med den nya språkkoden och skriv den till localStorage så att den överlever en omladdning. i18next utlöser automatiskt en omrendering av varje komponent som använder useTranslation().`,code:`import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);  // spara valet
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={\`px-3 py-1 rounded transition-colors \${
          i18n.language === 'en'
            ? 'bg-blue-600 text-white'           // aktiv
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'  // inaktiv
        }\`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('sv')}
        className={\`px-3 py-1 rounded transition-colors \${
          i18n.language === 'sv'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }\`}
        aria-label="Byt till Svenska"
      >
        SV
      </button>
    </div>
  );
}

export default LanguageSwitcher;`,language:`jsx`,highlightLines:[7,8,15,26],note:`i18n.language håller den aktiva språkkoden ('en', 'sv', …). Jämför den mot varje knapps kod för att visa det aktiva tillståndet.`},{id:7,title:`Lägg till LanguageSwitcher i Header`,description:`Placera <LanguageSwitcher /> var som helst i din Header-komponent. Den läser och skriver språktillstånd via i18next, så inga props behövs.`,code:`import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <nav className="flex gap-4">
        <a href="/">{t('header.home')}</a>
        <a href="/learning">{t('header.learning')}</a>
      </nav>

      {/* Språkväxlaren sitter i headern bredvid nav/temabyte */}
      <LanguageSwitcher />
    </header>
  );
}

export default Header;`,language:`jsx`,highlightLines:[1,15]},{id:8,title:`Lokalisera sidinnehåll (CONTENT_MAP-mönstret)`,description:`UI-strängar hanteras av i18next, men längre sidinnehåll (steg, kodexempel, beskrivningar) finns i separata JSON-filer under src/data/ (engelska) och src/data/sv/ (svenska). Varje sidkomponent importerar båda versionerna och väljer rätt vid rendering med en CONTENT_MAP nycklad på i18n.language.`,code:`// Fillayout
src/data/
  cheatsheets/
    mittÄmne.json          ← Engelskt innehåll (standard)
  sv/
    cheatsheets/
      mittÄmne.json        ← Svenskt innehåll (samma struktur)`,language:`bash`,subSteps:[{title:`Sidkomponent med CONTENT_MAP`,description:`Importera båda JSON-filerna, bygg ett CONTENT_MAP-objekt och välj sedan rätt ett efter språk vid rendering. Att lägga till ett nytt språk innebär att lägga till en import och en nyckel i kartan.`,code:`import { useTranslation } from 'react-i18next';
import CheatSheetLayout from '../../components/CheatSheetLayout';
import myTopicEn from '../../data/cheatsheets/myTopic.json';
import myTopicSv from '../../data/sv/cheatsheets/myTopic.json';

const CONTENT_MAP = {
  en: myTopicEn,
  sv: myTopicSv,
};

function MyTopic() {
  const { i18n } = useTranslation();
  // Falla tillbaka till engelska om det aktuella språket saknar innehåll
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

export default MyTopic;`,language:`jsx`,highlightLines:[3,4,6,7,8,14],note:`Fallbacket || CONTENT_MAP.en innebär att en delvis översatt app aldrig visar tomt innehåll – den nedgraderar smidigt till engelska.`},{title:`Svensk innehållsfil (src/data/sv/cheatsheets/mittÄmne.json)`,description:`Den svenska filen måste ha samma nycklar på toppnivå som den engelska. Översätt bara värdena – ändra aldrig nyckelnamnen.`,code:`{
  "title": "Mitt Ämne – Snabbguide",
  "introduction": {
    "heading": "Kom igång med Mitt Ämne",
    "description": "En kortfattad beskrivning på svenska."
  },
  "prerequisites": [
    "Krav ett",
    "Krav två"
  ],
  "steps": [
    {
      "id": 1,
      "title": "Första steget",
      "description": "Vad du ska göra i detta steg.",
      "code": "npm install something",
      "language": "bash"
    }
  ]
}`,language:`json`,note:`Kodblock (fältet 'code') hålls vanligtvis på engelska eftersom de är syntax, inte prosa. Översätt bara fälten 'title', 'description' och 'note'.`}]},{id:9,title:`Registrera den nya snabbguiden i appen`,description:`När sidkomponenten och båda JSON-innehållsfilerna finns, koppla ihop dem på tre ställen: snabbguideregistret (cheatsheets.json och sv/cheatsheets.json), App.jsx för routing och valfritt Header-navigeringen.`,code:`// 1. src/data/cheatsheets.json – lägg till ett ämne i topics-arrayen
{
  "id": 7,
  "key": "mittamne",
  "title": "My Topic",
  "description": "Kort beskrivning som visas på startsidans kort",
  "route": "/mittamne",
  "screenshot": "/images/mittamne.png",
  "difficulty": "beginner",
  "estimatedTime": "15 minutes"
}

// 2. src/data/sv/cheatsheets.json – samma post, översatt
{
  "id": 7,
  "key": "mittamne",
  "title": "Mitt Ämne",
  "description": "Kort beskrivning som visas på startsidans kort",
  "route": "/mittamne",
  "screenshot": "/images/mittamne.png",
  "difficulty": "beginner",
  "estimatedTime": "15 minuter"
}

// 3. src/App.jsx – lägg till lazy-importen och Route
const MittAmne = lazy(() => import('./pages/cheatsheets/MittAmne'));
// … inuti <Routes>:
<Route path="/mittamne" element={<MittAmne />} />`,language:`javascript`,highlightLines:[25,28],note:`Fältet 'key' i cheatsheets.json används av ProgressContext för att lagra ifyllningsstatus, så håll det unikt och stabilt.`}],gettingStarted:{title:`Lägga till ett nytt språk – Checklista`,steps:[`Lägg till en ny mapp under src/locales/<språk>/ med common.json och spegla varje nyckel från en/common.json`,`Lägg till en import och en resources-post för det nya språket i src/i18n.js`,`Lägg till en ny knapp i LanguageSwitcher.jsx som anropar changeLanguage('<språk>')`,`För varje sida med lokaliserat innehåll, skapa src/data/<språk>/cheatsheets/<sida>.json (eller src/data/<språk>/learning/<sida>.json) med översatt prosa`,`Lägg till det nya språkets post i CONTENT_MAP i varje berörd sidkomponent`,`Lägg till en översatt post i src/data/<språk>/cheatsheets.json (och learningContent.json) för startsidans korttext`]},source:{label:`i18next dokumentation`,url:`https://www.i18next.com/`}},o=t();function s(){let e=r(i,a);return(0,o.jsx)(n,{...e})}export{s as default};