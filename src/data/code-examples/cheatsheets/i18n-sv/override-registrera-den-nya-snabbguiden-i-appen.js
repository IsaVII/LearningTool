// 1. src/data/cheatsheets.json – lägg till ett ämne i topics-arrayen
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
<Route path="/mittamne" element={<MittAmne />} />
