interface Task {
  id: number;
  title: string;
  done: boolean;
  dueDate?: string; // optional - not every task has one
}

function formatTask(task: Task): string {
  const status = task.done ? "✓" : "○";
  const due = task.dueDate ? ` (due ${task.dueDate})` : "";
  return `${status} ${task.title}${due}`;
}

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const tasks: Task[] = [
  { id: 1, title: "Write tests", done: false },
  { id: 2, title: "Ship it", done: true, dueDate: "2026-09-01" },
];

console.log(tasks.map(formatTask));
console.log(pluck(tasks, "title")); // string[]
console.log(pluck(tasks, "done"));  // boolean[]
