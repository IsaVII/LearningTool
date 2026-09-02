function createTaskTracker() {
  let tasks = [];

  return {
    add(title, ...tags) {
      const task = { id: tasks.length + 1, title, tags, done: false };
      tasks = [...tasks, task];
      return task;
    },
    complete(id) {
      tasks = tasks.map((t) => (t.id === id ? { ...t, done: true } : t));
    },
    summary() {
      const { length } = tasks;
      const done = tasks.filter((t) => t.done).length;
      return `${done}/${length} uppgifter klara`;
    },
  };
}

async function loadAndTrack(urls) {
  const tracker = createTaskTracker();

  for (const url of urls) {
    const response = await fetch(url);
    const { title } = await response.json();
    tracker.add(title, "hämtad");
  }

  return tracker.summary();
}

const tracker = createTaskTracker();
tracker.add("Skriv tester", "kod");
tracker.complete(1);
console.log(tracker.summary()); // "1/1 uppgifter klara"
