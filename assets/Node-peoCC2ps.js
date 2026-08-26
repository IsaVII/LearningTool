import{d as e,i as t,u as n}from"./index-D6fNd8Sq.js";import{n as r}from"./ContentCard-Bl4rU2Qo.js";import{t as i}from"./LearningTopicLayout-DdpGPnyo.js";var a=e(n(),1),o=t();function s(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(`callback`);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`Node.js started with callbacks, evolved to promises, and now uses async/await. Callbacks are error-first `,(0,o.jsx)(`code`,{children:`(err, data) => `}),`. Promises chain with `,(0,o.jsx)(`code`,{children:`.then()`}),`. Async/await makes async code look synchronous. Use `,(0,o.jsx)(`code`,{children:`Promise.all()`}),` for parallel operations.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{t([`Pattern: Callbacks (error-first)`]),setTimeout(()=>{t(e=>[...e,`readFile('data.txt', callback)`,`→ callback(null, 'file contents')`,`✓ Success`])},500)},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Callbacks`}),(0,o.jsx)(`button`,{onClick:()=>{t([`Pattern: Promises (.then/.catch)`]),setTimeout(()=>{t(e=>[...e,`fetchData()`,`→ .then(data => ...)`,`→ Data received`,`✓ Promise resolved`])},500)},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Promises`}),(0,o.jsx)(`button`,{onClick:()=>{t([`Pattern: async/await`]),setTimeout(()=>{t(e=>[...e,`const data = await fetchData()`,`→ Waiting for promise...`,`→ Data assigned to variable`,`✓ Clean, synchronous-looking code`])},500)},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Async/Await`}),(0,o.jsx)(`button`,{onClick:()=>{t([`Pattern: Promise.all() - parallel execution`]),setTimeout(()=>{t(e=>[...e,`Promise.all([fetch1(), fetch2(), fetch3()])`,`→ All promises running in parallel...`,`→ [result1, result2, result3]`,`✓ All completed`])},700)},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Promise.all()`}),(0,o.jsx)(`button`,{onClick:()=>{t([`Pattern: Promise.race() - first to complete`]),setTimeout(()=>{t(e=>[...e,`Promise.race([slowAPI(), fastAPI()])`,`→ fastAPI() resolves first`,`→ Returns fast result`,`✓ Completed (other promises ignored)`])},500)},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Promise.race()`}),(0,o.jsx)(`button`,{onClick:()=>{t([`Pattern: async/await error handling`]),setTimeout(()=>{t(e=>[...e,`try { await riskyOperation() }`,`→ Operation failed`,`catch(err) { ... }`,`✓ Error caught and handled`])},500)},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Error Handling`}),(0,o.jsx)(`button`,{onClick:()=>t([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[120px]`,children:[e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs ${e.startsWith(`✓`)?`text-green-400`:`text-heading-alt`}`,children:e},t))]}),(0,o.jsx)(r,{children:`// 1. Callbacks (traditional Node.js)
fs.readFile("file.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

// 2. Promises
const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFilePromise("file.txt")
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 3. Async/Await (cleanest)
async function loadFile() {
  try {
    const data = await readFilePromise("file.txt");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// 4. Parallel execution
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);`})]})}function c(){let[e,t]=(0,a.useState)([]);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[(0,o.jsx)(`code`,{children:`Buffer`}),` objects represent binary data - raw bytes that might not be text. They're essential for working with files, network protocols, images, or any non-text data. Buffers are fixed-size, unlike strings, and work directly with memory for performance.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{let e=`Hello Node.js`,n=Buffer.from(e),r=Array.from(n).slice(0,8).join(`, `);t(t=>[...t,`Buffer.from("${e}")`,`→ <Buffer ${r}...>`,`Length: ${n.length} bytes`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Buffer.from()`}),(0,o.jsx)(`button`,{onClick:()=>{let e=Buffer.from(`Hello`);t(t=>[...t,`buffer.toString()`,`→ "${e.toString()}"`,`✓ Decoded from bytes to string`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.toString()`}),(0,o.jsx)(`button`,{onClick:()=>{let e=`Node.js`,n=Buffer.from(e,`utf8`),r=n.toString(`base64`),i=n.toString(`hex`);t(t=>[...t,`Buffer.from("${e}", "utf8")`,`→ UTF-8: <Buffer ${Array.from(n).join(`, `)}>`,`→ Base64: "${r}"`,`→ Hex: "${i}"`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Encodings`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`Buffer.alloc(10)`,`→ <Buffer 00 00 00 00 00 00 00 00 00 00>`,`✓ Allocated 10 zero-filled bytes`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Buffer.alloc()`}),(0,o.jsx)(`button`,{onClick:()=>{let e=Buffer.from(`Hello`),n=Buffer.from(` `),r=Buffer.from(`World`),i=Buffer.concat([e,n,r]);t(e=>[...e,`Buffer.concat([buf1, buf2, buf3])`,`→ "${i.toString()}"`,`Length: ${i.length} bytes`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Buffer.concat()`}),(0,o.jsx)(`button`,{onClick:()=>{let e=Buffer.from(`Hello World`).slice(0,5);t(t=>[...t,`buffer.slice(0, 5)`,`→ "${e.toString()}"`,`⚠️ Shares memory with original buffer`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.slice()`}),(0,o.jsx)(`button`,{onClick:()=>t([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[120px]`,children:[e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs ${e.startsWith(`⚠️`)?`text-yellow-400`:e.startsWith(`✓`)?`text-green-400`:`text-heading-alt`}`,children:e},t))]}),(0,o.jsx)(r,{children:`// Create buffers
const buf1 = Buffer.from("Hello");        // from string
const buf2 = Buffer.from([72, 101, 108]); // from byte array
const buf3 = Buffer.alloc(10);            // allocate 10 zeros
const buf4 = Buffer.allocUnsafe(10);      // faster, uninitialized

// Convert to string
buf1.toString();          // "Hello" (default UTF-8)
buf1.toString("base64");  // "SGVsbG8="
buf1.toString("hex");     // "48656c6c6f"

// Manipulate
Buffer.concat([buf1, buf2]);  // Combine buffers
buf1.slice(0, 3);             // <Buffer 48 65 6c> (shares memory!)
buf1.length;                  // 5

// Write to buffer
const buf = Buffer.alloc(5);
buf.write("Hi");              // buf: <Buffer 48 69 00 00 00>

// Compare
buf1.equals(buf2);            // true if same bytes
Buffer.compare(buf1, buf2);   // -1, 0, or 1`})]})}function l(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)([]);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`The `,(0,o.jsx)(`code`,{children:`child_process`}),` module lets you run other programs from Node.js. Use `,(0,o.jsx)(`code`,{children:`exec()`}),` for simple shell commands,`,` `,(0,o.jsx)(`code`,{children:`spawn()`}),` for streaming output, `,(0,o.jsx)(`code`,{children:`fork()`}),` for running Node.js scripts with IPC, and `,(0,o.jsx)(`code`,{children:`execFile()`}),` for executing binaries directly.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{Math.floor(Math.random()*1e4),t(e=>[...e,`exec("ls -la")`,`Waiting for command to complete...`,`stdout: total 48`,`stdout: drwxr-xr-x  12 user  staff  384 Jan 1 12:00 .`,`stdout: -rw-r--r--   1 user  staff  256 Jan 1 12:00 file.txt`,`✓ Process exited with code 0`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`exec()`}),(0,o.jsx)(`button`,{onClick:()=>{let e=Math.floor(Math.random()*1e4);i(t=>[...t,{pid:e,name:`node script.js`}]),t(t=>[...t,`spawn("node", ["script.js"])`,`Child process started (PID: ${e})`,`stdout: Starting...`,`stdout: Processing item 1`,`stdout: Processing item 2`,`✓ Streaming output as it arrives`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`spawn()`}),(0,o.jsx)(`button`,{onClick:()=>{let e=Math.floor(Math.random()*1e4);i(t=>[...t,{pid:e,name:`worker.js`}]),t(t=>[...t,`fork("worker.js")`,`Worker process forked (PID: ${e})`,`→ Sent: { task: 'processData' }`,`← Received: { result: 'done' }`,`✓ IPC channel established`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`fork()`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`execFile("./script.sh", ["arg1", "arg2"])`,`Executing binary directly (no shell)...`,`stdout: Processing arg1`,`stdout: Processing arg2`,`✓ Completed successfully`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`execFile()`}),(0,o.jsx)(`button`,{onClick:()=>{if(n.length===0){t(e=>[...e,`❌ No child processes running`]);return}let e=n[0];i(e=>e.slice(1)),t(t=>[...t,`child.kill() → PID ${e.pid}`,`✓ Process terminated`])},disabled:n.length===0,className:`bg-surface border border-line text-heading px-3 py-2 rounded hover:border-accent transition-colors disabled:opacity-50`,children:`.kill()`}),(0,o.jsx)(`button`,{onClick:()=>{t([]),i([])},className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-4 mb-4`,children:[(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line`,children:[(0,o.jsxs)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:[`Running Processes (`,n.length,`)`]}),n.length===0?(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`No child processes`}):(0,o.jsx)(`div`,{className:`space-y-1`,children:n.map(e=>(0,o.jsxs)(`p`,{className:`text-xs text-heading-alt font-mono`,children:[`PID `,e.pid,`: `,e.name]},e.pid))})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line font-mono text-sm`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`Output`}),e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),(0,o.jsx)(`div`,{className:`space-y-0.5 max-h-[200px] overflow-auto`,children:e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs ${e.startsWith(`✓`)?`text-green-400`:e.startsWith(`❌`)?`text-red-400`:`text-heading-alt`}`,children:e},t))})]})]}),(0,o.jsx)(r,{children:`const { exec, spawn, fork, execFile } = require("child_process");

// exec: Run shell commands, buffer full output
exec("ls -la", (err, stdout, stderr) => {
  if (err) return console.error(err);
  console.log(stdout);
});

// spawn: Stream output as it arrives
const child = spawn("node", ["script.js"]);
child.stdout.on("data", (data) => {
  console.log(\`stdout: \${data}\`);
});
child.on("close", (code) => {
  console.log(\`Exited with code \${code}\`);
});

// fork: Run Node.js with IPC channel
const worker = fork("worker.js");
worker.send({ task: "process" });
worker.on("message", (msg) => {
  console.log("From worker:", msg);
});

// execFile: Run binary directly (no shell)
execFile("./script.sh", ["arg"], (err, stdout) => {
  console.log(stdout);
});

// Terminate child process
child.kill("SIGTERM");`})]})}function u(){let[e,t]=(0,a.useState)({NODE_ENV:`development`,PORT:`3000`,DB_HOST:`localhost`}),[n,i]=(0,a.useState)([]),s=t=>{let n=e[t];i(n?e=>[...e,`process.env.${t} → "${n}"`]:e=>[...e,`process.env.${t} → undefined`])},c=n=>{t({...e,NODE_ENV:n}),i(e=>[...e,`Environment changed to: ${n}`,`✓ App reconfigured`])};return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[(0,o.jsx)(`code`,{children:`process.env`}),` gives you access to environment variables - configuration values like database URLs, API keys, or the current environment (dev/production). Load them from a `,(0,o.jsx)(`code`,{children:`.env`}),` file with the `,(0,o.jsx)(`code`,{children:`dotenv`}),` package, or set them in your shell before running Node.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>s(`NODE_ENV`),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Read NODE_ENV`}),(0,o.jsx)(`button`,{onClick:()=>s(`PORT`),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Read PORT`}),(0,o.jsx)(`button`,{onClick:()=>{let t=e.NODE_ENV===`production`;i(e=>[...e,`process.env.NODE_ENV === "production" → ${t}`,t?`✓ Using production settings`:`✓ Using development settings`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Check isProd`}),(0,o.jsx)(`button`,{onClick:()=>c(e.NODE_ENV===`production`?`development`:`production`),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Toggle Env`}),(0,o.jsx)(`button`,{onClick:()=>i([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-4 mb-4`,children:[(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`.env file`}),(0,o.jsx)(`pre`,{className:`text-xs text-heading-alt font-mono`,children:Object.entries(e).map(([e,t])=>`${e}=${t}`).join(`
`)})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line font-mono text-sm`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`Console`}),n.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),n.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs text-heading-alt`,children:e},t))]})]}),(0,o.jsx)(r,{children:`// .env file (NOT committed to git)
NODE_ENV=production
PORT=8080
DB_HOST=db.example.com
API_KEY=secret_key_here

// app.js
require("dotenv").config(); // Load .env into process.env

const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  console.log("Running in production mode");
}

// Terminal
NODE_ENV=production node app.js  // Set env vars inline`})]})}function d(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsx)(`p`,{className:`text-muted mb-4`,children:`Handle errors with try/catch for sync code and async/await. Use error-first callbacks for traditional Node patterns. Always catch promise rejections - unhandled ones can crash your process. Add global handlers for uncaught exceptions and unhandled rejections.`}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{try{throw t(e=>[...e,`try { ... }`]),Error(`Sync error occurred`)}catch(e){t(t=>[...t,`catch → Error: ${e.message}`,`✓ Error handled gracefully`])}},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Sync Error`}),(0,o.jsx)(`button`,{onClick:async()=>{try{t(e=>[...e,`async function with try/catch`]),await Promise.reject(Error(`Async operation failed`))}catch(e){t(t=>[...t,`catch → Error: ${e.message}`,`✓ Promise rejection caught`])}},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Async Error`}),(0,o.jsx)(`button`,{onClick:()=>{class e extends Error{constructor(e){super(e),this.name=`ValidationError`,this.statusCode=400}}try{throw new e(`Invalid email format`)}catch(e){t(t=>[...t,`${e.name}: ${e.message}`,`Status code: ${e.statusCode}`,`✓ Custom error with metadata`])}},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Custom Error`}),(0,o.jsx)(`button`,{onClick:()=>{((e,n)=>{if(e){t(t=>[...t,`Callback received error: ${e.message}`,`✓ Handled in callback`]);return}t(e=>[...e,`Success: ${n}`])})(Error(`File not found`),null)},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Error-First Callback`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`Promise.reject() without .catch()`,`⚠️ UnhandledPromiseRejection`,n?`✓ Caught by process handler`:`❌ Would crash in production`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Unhandled Rejection`}),(0,o.jsx)(`button`,{onClick:()=>i(!n),className:`px-3 py-2 rounded text-sm transition-colors ${n?`bg-green-600 text-white`:`bg-surface border border-line text-muted`}`,children:n?`Handler: ON`:`Handler: OFF`}),(0,o.jsx)(`button`,{onClick:()=>t([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[120px]`,children:[e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs ${e.startsWith(`✓`)?`text-green-400`:e.startsWith(`⚠️`)||e.startsWith(`❌`)?`text-yellow-400`:`text-heading-alt`}`,children:e},t))]}),(0,o.jsx)(r,{children:`// Sync error handling
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.error("Caught:", err.message);
}

// Async error handling
async function fetchData() {
  try {
    await riskyOperation();
  } catch (err) {
    console.error("Async error:", err);
  }
}

// Error-first callback (traditional Node pattern)
fs.readFile("file.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

// Global handlers (production safety net)
process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1); // Crash gracefully
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection:", reason);
});`})]})}function f(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`Click run and watch the order entries appear in - not the order they're written in. Every synchronous line finishes first, then every queued microtask (promises), and only then macrotasks (timers), even a `,(0,o.jsx)(`code`,{children:`setTimeout(fn, 0)`}),`.`]}),(0,o.jsx)(`button`,{onClick:()=>{t([]),i(!0),t(e=>[...e,`1. console.log (sync) - runs immediately`]),setTimeout(()=>{t(e=>[...e,`4. setTimeout callback (macrotask) - runs last`]),i(!1)},0),Promise.resolve().then(()=>{t(e=>[...e,`3. Promise .then (microtask) - runs before any timer`])}),t(e=>[...e,`2. console.log (sync) - still runs immediately`])},disabled:n,className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50 mb-4`,children:n?`Running...`:`Run the code below`}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[120px]`,children:[e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle`,children:`Output will appear here...`}),e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-heading-alt`,children:e},t))]}),(0,o.jsx)(r,{children:`console.log("1. sync");
setTimeout(() => console.log("4. timeout"), 0);
Promise.resolve().then(() => console.log("3. promise"));
console.log("2. sync");`})]})}function p(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)([]),s=(e,r)=>{let i=n.filter(t=>t.event===e);t(t=>[...t,`emitter.emit("${e}", ${JSON.stringify(r)})`]),i.forEach(e=>{t(t=>[...t,`→ Listener ${e.id} called: received ${JSON.stringify(r)}`])}),i.length===0&&t(e=>[...e,`  (no listeners registered)`])},c=e=>{let r=n.length+1;i(t=>[...t,{id:r,event:e}]),t(t=>[...t,`emitter.on("${e}", listener${r})`,`✓ Listener ${r} added`])},l=e=>{let r=n.find(t=>t.event===e);r&&(i(e=>e.filter(e=>e.id!==r.id)),t(t=>[...t,`emitter.off("${e}", listener${r.id})`,`✓ Removed`]))},u=e=>{t(t=>[...t,`emitter.once("${e}", listener)`,`✓ One-time listener added`]),setTimeout(()=>{t(t=>[...t,`emit("${e}") → listener called once`,`✓ Listener removed`])},500)};return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`The `,(0,o.jsx)(`code`,{children:`EventEmitter`}),` class lets you build event-driven architectures. Objects can emit named events and other code can listen for them. Use `,(0,o.jsx)(`code`,{children:`on()`}),` to subscribe, `,(0,o.jsx)(`code`,{children:`emit()`}),` to fire, and `,(0,o.jsx)(`code`,{children:`off()`}),` to unsubscribe. Many Node.js APIs (streams, servers) extend EventEmitter.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>c(`data`),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.on("data")`}),(0,o.jsx)(`button`,{onClick:()=>s(`data`,{value:42}),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.emit("data")`}),(0,o.jsx)(`button`,{onClick:()=>c(`error`),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.on("error")`}),(0,o.jsx)(`button`,{onClick:()=>s(`error`,{message:`Oops!`}),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.emit("error")`}),(0,o.jsx)(`button`,{onClick:()=>u(`ready`),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.once("ready")`}),(0,o.jsx)(`button`,{onClick:()=>l(`data`),className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`.off("data")`}),(0,o.jsx)(`button`,{onClick:()=>{t([]),i([])},className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-4 mb-4`,children:[(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line`,children:[(0,o.jsxs)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:[`Listeners (`,n.length,`)`]}),n.length===0?(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`No listeners registered`}):(0,o.jsx)(`div`,{className:`space-y-1`,children:n.map(e=>(0,o.jsxs)(`p`,{className:`text-xs text-heading-alt font-mono`,children:[`listener`,e.id,` → "`,e.event,`"`]},e.id))})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line font-mono text-sm`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`Events`}),e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),(0,o.jsx)(`div`,{className:`space-y-0.5 max-h-[200px] overflow-auto`,children:e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs ${e.startsWith(`✓`)?`text-green-400`:`text-heading-alt`}`,children:e},t))})]})]}),(0,o.jsx)(r,{children:`const EventEmitter = require("events");
const emitter = new EventEmitter();

// Subscribe to events
emitter.on("data", (payload) => {
  console.log("Received:", payload);
});

// Emit events
emitter.emit("data", { id: 1, value: 42 });

// One-time listener
emitter.once("ready", () => {
  console.log("Ready! (fires once)");
});

// Unsubscribe
const handler = (data) => console.log(data);
emitter.on("data", handler);
emitter.off("data", handler); // Remove specific listener

// Extend EventEmitter
class MyServer extends EventEmitter {
  start() {
    this.emit("started");
  }
}`})]})}var m=`Node.js: a JavaScript runtime built on V8.`;function h(){let[e,t]=(0,a.useState)(`idle`),[n,i]=(0,a.useState)(``);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[(0,o.jsx)(`code`,{children:`fs.readFile`}),` doesn't block the rest of the program while the disk is read - it returns immediately and calls your callback later, once the data is ready.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{t(`reading`),i(``),setTimeout(()=>{i(m),t(`done`)},1200)},disabled:e===`reading`,className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50`,children:e===`reading`?`Reading...`:`fs.readFile("notes.txt")`}),(0,o.jsxs)(`span`,{className:`text-sm text-muted`,children:[e===`idle`&&`Nothing read yet`,e===`reading`&&`The rest of the program keeps running while this waits ⏳`,e===`done`&&`Callback fired ✓`]})]}),(0,o.jsx)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[52px] text-heading-alt`,children:n?`"${n}"`:(0,o.jsx)(`span`,{className:`text-subtle`,children:`File contents will appear here...`})}),(0,o.jsx)(r,{children:`fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // runs later, once the file is read
});

console.log("this logs first"); // runs immediately`})]})}var g=[`Talk is cheap. Show me the code.`,`Programs must be written for people to read.`];function _(){let[e,t]=(0,a.useState)([`Node.js runs JavaScript outside the browser.`]),[n,i]=(0,a.useState)([]);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`Each button simulates a client sending a request to the server from the example above. The handler branches on `,(0,o.jsx)(`code`,{children:`req.method`}),` `,`and `,(0,o.jsx)(`code`,{children:`req.url`}),` to decide how to respond.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{i(t=>[...t,`GET /quotes -> 200 ${JSON.stringify(e)}`])},className:`bg-surface border border-line text-heading px-4 py-2 rounded hover:border-accent transition-colors`,children:`Send GET /quotes`}),(0,o.jsx)(`button`,{onClick:()=>{let n=g[e.length%g.length];t(e=>[...e,n]),i(e=>[...e,`POST /quotes { "quote": "${n}" } -> 201 Saved`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Send POST /quotes`}),(0,o.jsx)(`button`,{onClick:()=>i([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-xs min-h-[100px] overflow-x-auto`,children:[n.length===0&&(0,o.jsx)(`p`,{className:`text-subtle`,children:`Requests will appear here...`}),n.map((e,t)=>(0,o.jsx)(`p`,{className:`text-heading-alt whitespace-pre-wrap`,children:e},t))]}),(0,o.jsx)(r,{children:`if (req.method === "GET" && req.url === "/quotes") {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(quotes));
}`})]})}function v(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`The first `,(0,o.jsx)(`code`,{children:`require`}),` call runs the target file and caches whatever it exports. Every call after that reuses the same cached object instead of re-running the file - try requiring twice.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{if(n){t(e=>[...e,`require("./mathUtils") -> returns the cached exports object, mathUtils.js does not run again`]);return}i(!0),t(e=>[...e,`mathUtils.js runs once, top to bottom...`,`module.exports = { add } -> that exports object gets cached`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`require("./mathUtils")`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`mathUtils.add(2, 3) -> 5`])},disabled:!n,className:`bg-surface border border-line text-heading px-4 py-2 rounded hover:border-accent transition-colors disabled:opacity-50`,children:`mathUtils.add(2, 3)`}),(0,o.jsx)(`button`,{onClick:()=>t([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[100px]`,children:[e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle`,children:`Output will appear here...`}),e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-heading-alt`,children:e},t))]}),(0,o.jsx)(r,{children:`// mathUtils.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const { add } = require("./mathUtils");
add(2, 3); // 5`})]})}var y={title:`Node.js Fundamentals`,introduction:{heading:`What is Node.js?`,description:`Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript outside the browser - on servers, in command-line tools, and anywhere else you need it. It's non-blocking and event-driven by design, which makes it a natural fit for servers and tools that spend a lot of time waiting on I/O: network requests, file reads, database queries.`},coreConcepts:{heading:`Core Concepts`,concepts:[{title:`Runtime`,description:`Runs JavaScript outside the browser, on top of Google's V8 engine`},{title:`Modules`,description:`Split code across files with require/module.exports or import/export`},{title:`Event Loop`,description:`Handles async work without blocking the single JavaScript thread`},{title:`npm`,description:`Install and manage packages from the world's largest software registry`},{title:`Streams`,description:`Process data piece by piece instead of loading it all into memory`}]},runtime:{heading:`The Event Loop`,description:`Node.js runs your JavaScript on a single thread, but it doesn't sit idle waiting on slow work like a file read or a network request. It hands that work off and keeps going, then comes back to run callbacks, resolved promises, and timers once they're ready. The order it runs them in - synchronous code, then microtasks, then macrotasks like setTimeout - is the event loop.`},gettingStarted:{heading:`Getting Started`,steps:[`Install Node.js from nodejs.org, or manage versions with nvm`,`Run a file directly with node app.js - no build step required`,`Run npm init to create a package.json for your project`,`Install packages with npm install <package> and require or import them`,`Reach for built-in modules like fs, http, and path before installing a package for the job`]},practiceTopics:[{title:`Modules`,description:`Split code across files with require and module.exports`},{title:`File System`,description:`Read files without blocking the rest of your program`},{title:`HTTP Servers`,description:`Handle incoming requests with the built-in http module`},{title:`Streams`,description:`Process data in chunks instead of all at once`},{title:`NPM & Packages`,description:`Manage dependencies and run scripts with package.json`},{title:`Environment Variables`,description:`Configure apps with process.env and dotenv`},{title:`Path Module`,description:`Handle file paths correctly across operating systems`},{title:`Error Handling`,description:`Handle sync, async, and unhandled errors properly`},{title:`Events`,description:`Build event-driven code with EventEmitter`},{title:`Buffers`,description:`Work with binary data and encodings`},{title:`Child Processes`,description:`Run external programs with exec, spawn, and fork`},{title:`Async Patterns`,description:`Master callbacks, promises, and async/await`},{title:`Process & OS`,description:`Access runtime info, args, and platform details`}],fullExample:{heading:`Full Example, Step by Step`,title:`A small HTTP server: modules, streams, and the event loop`,description:`This example ties together the core concepts above in one realistic file. Click through the steps to see which lines each one is talking about.`,code:[`const http = require("http");`,``,`// In-memory quotes list - loaded once when the module starts, and`,`// shared by every request this server handles for as long as the`,`// process keeps running.`,`let quotes = ["Node.js runs JavaScript outside the browser."];`,``,`const server = http.createServer((req, res) => {`,`  if (req.method === "GET" && req.url === "/quotes") {`,`    res.writeHead(200, { "Content-Type": "application/json" });`,`    res.end(JSON.stringify(quotes));`,`    return;`,`  }`,``,`  if (req.method === "POST" && req.url === "/quotes") {`,`    let body = "";`,``,`    req.on("data", (chunk) => {`,`      body += chunk;`,`    });`,``,`    req.on("end", () => {`,`      quotes.push(JSON.parse(body).quote);`,`      res.writeHead(201);`,`      res.end("Saved");`,`    });`,``,`    return;`,`  }`,``,`  res.writeHead(404);`,`  res.end("Not found");`,`});`,``,`server.listen(3000, () => {`,`  console.log("Server running at http://localhost:3000");`,`});`,``,`module.exports = server;`],steps:[{label:`Require a built-in module`,lines:[1,1],explanation:`require("http") pulls in one of Node's built-in modules - it ships with Node itself, so there's nothing to install.`},{label:`Keep state in memory`,lines:[3,6],explanation:`A top-level variable lives for as long as the process runs, and is shared by every request this same server instance handles.`},{label:`Create the server`,lines:[8,8],explanation:`createServer takes a callback that Node invokes once for every incoming request, handing it a request object to read and a response object to write to.`},{label:`Handle a GET request`,lines:[9,13],explanation:`writeHead sets the status code and headers, then end() sends the body and finishes the response.`},{label:`Read a POST body as a stream`,lines:[15,20],explanation:`req is a readable stream, not a ready-made string - the body arrives in chunks, so you listen for "data" events and concatenate them yourself.`},{label:`Act once the stream ends`,lines:[22,26],explanation:`The "end" event fires after the last chunk arrives - only then is it safe to parse the full body and respond.`},{label:`Fall back for unknown routes`,lines:[31,32],explanation:`Any request that didn't match an earlier branch falls through to this default 404 response.`},{label:`Start listening`,lines:[35,37],explanation:`listen(port, callback) hands control to Node's event loop. The callback runs once, when the server is ready to accept connections, and the process then stays alive waiting for requests.`},{label:`Export for reuse`,lines:[39,39],explanation:`module.exports makes this file's server importable elsewhere with require("./server") - the same require() from step 1, now pointing at your own file instead of a built-in.`}]}};function b(){let[e,t]=(0,a.useState)({}),[n,i]=(0,a.useState)([]),[s,c]=(0,a.useState)([]),l=(e,n)=>{t(t=>({...t,[e]:n})),c(t=>[...t,`npm install ${e}`,`✓ Added ${e}@${n} to package.json`,`✓ Saved ${e} to node_modules/`])},u=(e,t)=>{c(n=>[...n,`npm run ${e}`,`> ${t}`,`✓ Done`])};return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`npm manages your project's dependencies and scripts.`,` `,(0,o.jsx)(`code`,{children:`package.json`}),` declares what you need;`,` `,(0,o.jsx)(`code`,{children:`npm install`}),` downloads it all; `,(0,o.jsx)(`code`,{children:`npm run`}),` executes custom scripts. Dependencies use semantic versioning (^1.2.3 = compatible updates).`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{c([`npm init -y`,`✓ Created package.json with defaults`,`✓ Project initialized`]),i([`start`,`test`,`build`])},disabled:n.length>0,className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50`,children:`npm init`}),(0,o.jsx)(`button`,{onClick:()=>l(`express`,`^4.18.2`),disabled:n.length===0,className:`bg-surface border border-line text-heading px-3 py-2 rounded hover:border-accent transition-colors disabled:opacity-50`,children:`install express`}),(0,o.jsx)(`button`,{onClick:()=>l(`lodash`,`^4.17.21`),disabled:n.length===0,className:`bg-surface border border-line text-heading px-3 py-2 rounded hover:border-accent transition-colors disabled:opacity-50`,children:`install lodash`}),(0,o.jsx)(`button`,{onClick:()=>u(`start`,`node server.js`),disabled:n.length===0,className:`bg-surface border border-line text-heading px-3 py-2 rounded hover:border-accent transition-colors disabled:opacity-50`,children:`npm run start`}),(0,o.jsx)(`button`,{onClick:()=>{c([]),t({}),i([])},className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-4 mb-4`,children:[(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`package.json`}),(0,o.jsx)(`pre`,{className:`text-xs text-heading-alt overflow-auto`,children:JSON.stringify({name:`my-node-app`,version:`1.0.0`,scripts:{start:`node server.js`,test:`jest`,build:`webpack`},dependencies:Object.keys(e).length?e:{"(empty)":`install packages`}},null,2)})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line font-mono text-sm`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`Terminal`}),s.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),s.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs text-heading-alt`,children:e},t))]})]}),(0,o.jsx)(r,{children:`// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"  // ^ allows minor/patch updates
  }
}

// Terminal
npm install              // Install all dependencies
npm install express      // Add express to dependencies
npm run start            // Run the "start" script`})]})}function x(){let[e,t]=(0,a.useState)(`unix`),[n,i]=(0,a.useState)([]),s={unix:{sep:`/`,paths:[`src/components/Button.jsx`,`/home/user/project/file.txt`]},windows:{sep:`\\`,paths:[`src\\components\\Button.jsx`,`C:\\Users\\dev\\project\\file.txt`]}};return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`The `,(0,o.jsx)(`code`,{children:`path`}),` module handles file paths correctly across operating systems - Windows uses backslashes `,(0,o.jsx)(`code`,{children:`\\`}),`, Unix uses forward slashes `,(0,o.jsx)(`code`,{children:`/`}),`. Always use `,(0,o.jsx)(`code`,{children:`path.join()`}),` or`,` `,(0,o.jsx)(`code`,{children:`path.resolve()`}),` instead of string concatenation.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-2 bg-surface border border-line rounded px-3 py-2`,children:[(0,o.jsx)(`span`,{className:`text-sm text-muted`,children:`OS:`}),(0,o.jsx)(`button`,{onClick:()=>{t(`unix`),i([])},className:`px-3 py-1 rounded text-sm transition-colors ${e===`unix`?`bg-accent text-white`:`bg-surface-alt text-muted hover:text-heading`}`,children:`Unix/Mac`}),(0,o.jsx)(`button`,{onClick:()=>{t(`windows`),i([])},className:`px-3 py-1 rounded text-sm transition-colors ${e===`windows`?`bg-accent text-white`:`bg-surface-alt text-muted hover:text-heading`}`,children:`Windows`})]}),(0,o.jsx)(`button`,{onClick:()=>{let t=e===`unix`?`src/utils/helpers.js`:`src\\utils\\helpers.js`;i(e=>[...e,`path.join("src", "utils", "helpers.js")`,`→ "${t}"`,`✓ Uses correct separator for OS`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`path.join()`}),(0,o.jsx)(`button`,{onClick:()=>{let t=e===`unix`?`/home/user/project/src/file.js`:`C:\\Users\\dev\\project\\src\\file.js`;i(e=>[...e,`path.resolve("src", "file.js")`,`→ "${t}"`,`✓ Absolute path from current directory`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`path.resolve()`}),(0,o.jsx)(`button`,{onClick:()=>{let t=s[e].paths[0],n=e===`unix`?`src/components`:`src\\components`;i(e=>[...e,`path.dirname("${t}")`,`→ "${n}"`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`path.dirname()`}),(0,o.jsx)(`button`,{onClick:()=>{let t=s[e].paths[0];i(e=>[...e,`path.basename("${t}")`,`→ "Button.jsx"`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`path.basename()`}),(0,o.jsx)(`button`,{onClick:()=>{let t=s[e].paths[0];i(e=>[...e,`path.extname("${t}")`,`→ ".jsx"`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`path.extname()`}),(0,o.jsx)(`button`,{onClick:()=>i([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[100px]`,children:[n.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),n.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs text-heading-alt`,children:e},t))]}),(0,o.jsx)(r,{children:`const path = require("path");

// Join path segments with correct separator
path.join("src", "utils", "file.js");
// Unix: "src/utils/file.js"
// Windows: "src\\\\utils\\\\file.js"

// Get absolute path
path.resolve("src", "file.js");
// → "/home/user/project/src/file.js"

// Extract parts
path.dirname("/src/utils/helper.js");  // "/src/utils"
path.basename("/src/utils/helper.js"); // "helper.js"
path.extname("/src/utils/helper.js");  // ".js"

// Cross-platform special paths
__dirname;  // current file's directory
__filename; // current file's full path`})]})}function S(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)({platform:`linux`,version:`v18.17.0`,uptime:0,memory:`45.2 MB`});return(0,a.useEffect)(()=>{let e=setInterval(()=>{i(e=>({...e,uptime:e.uptime+1}))},1e3);return()=>clearInterval(e)},[]),(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`The global `,(0,o.jsx)(`code`,{children:`process`}),` object provides info about the current Node.js process: command-line arguments, environment variables, platform, memory usage, uptime, and exit handlers. Use`,` `,(0,o.jsx)(`code`,{children:`process.env`}),` for config, `,(0,o.jsx)(`code`,{children:`process.argv`}),` for CLI args.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.argv`,`→ ['/usr/bin/node', '/app/server.js', '--port', '3000']`,`✓ Command-line arguments`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`process.argv`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.env.NODE_ENV`,`→ "production"`,`process.env.PORT`,`→ "8080"`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`process.env`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.cwd()`,`→ "/home/user/my-app"`,`✓ Current working directory`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`process.cwd()`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.platform`,`→ "${n.platform}"`,`process.version`,`→ "${n.version}"`,`process.arch`,`→ "x64"`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Platform Info`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.memoryUsage()`,`→ { rss: 47452160, heapTotal: 18874368, heapUsed: 8123456 }`,`✓ Memory stats in bytes`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Memory Usage`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.uptime()`,`→ ${n.uptime} seconds`,`✓ Process runtime`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Uptime`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.on("exit", callback)`,`✓ Cleanup handler registered`,`→ Runs before process terminates`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`Exit Handler`}),(0,o.jsx)(`button`,{onClick:()=>{t(e=>[...e,`process.exit(0)`,`⚠️ Process would terminate here`,`Code 0 = success, non-zero = error`])},className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`,children:`process.exit()`}),(0,o.jsx)(`button`,{onClick:()=>t([]),className:`text-sm text-subtle hover:text-accent transition-colors ml-auto`,children:`Clear`})]}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-4 mb-4`,children:[(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`Process Info`}),(0,o.jsxs)(`div`,{className:`space-y-1 text-xs font-mono text-heading-alt`,children:[(0,o.jsxs)(`p`,{children:[`Platform: `,n.platform]}),(0,o.jsxs)(`p`,{children:[`Version: `,n.version]}),(0,o.jsxs)(`p`,{children:[`Uptime: `,n.uptime,`s`]}),(0,o.jsxs)(`p`,{children:[`Memory: `,n.memory]})]})]}),(0,o.jsxs)(`div`,{className:`bg-surface rounded p-4 border border-line font-mono text-sm`,children:[(0,o.jsx)(`p`,{className:`text-sm font-semibold text-accent mb-2`,children:`Output`}),e.length===0&&(0,o.jsx)(`p`,{className:`text-subtle text-xs`,children:`Output will appear here...`}),(0,o.jsx)(`div`,{className:`space-y-0.5 max-h-[200px] overflow-auto`,children:e.map((e,t)=>(0,o.jsx)(`p`,{className:`text-xs ${e.startsWith(`✓`)?`text-green-400`:e.startsWith(`⚠️`)?`text-yellow-400`:`text-heading-alt`}`,children:e},t))})]})]}),(0,o.jsx)(r,{children:`// Command-line arguments
process.argv; // ["node", "script.js", "arg1", "arg2"]

// Environment variables
process.env.NODE_ENV;  // "production"
process.env.PORT;      // "8080"

// Platform & version
process.platform;  // "linux", "darwin", "win32"
process.version;   // "v18.17.0"
process.arch;      // "x64", "arm64"

// Current directory
process.cwd();     // "/home/user/project"

// Memory usage
process.memoryUsage();
// { rss: 47452160, heapTotal: 18874368, heapUsed: 8123456 }

// Uptime
process.uptime();  // 123.456 (seconds)

// Exit process
process.exit(0);   // 0 = success, 1 = error

// Exit handlers
process.on("exit", (code) => {
  console.log(\`Exiting with code \${code}\`);
});

process.on("SIGINT", () => {
  console.log("Ctrl+C pressed, cleaning up...");
  process.exit(0);
});`})]})}var C=[`Once `,`upon `,`a `,`time, `,`in `,`a `,`Node.js `,`process...`];function w(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(`idle`);return(0,o.jsxs)(`div`,{className:`bg-surface-alt border border-line rounded p-6`,children:[(0,o.jsxs)(`p`,{className:`text-muted mb-4`,children:[`A stream delivers data piece by piece instead of loading everything into memory at once. Each `,(0,o.jsx)(`code`,{children:`"data"`}),` event hands you the next chunk; `,(0,o.jsx)(`code`,{children:`"end"`}),` fires once there are no more chunks left.`]}),(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 mb-4`,children:[(0,o.jsx)(`button`,{onClick:()=>{t([]),i(`streaming`),C.forEach((e,n)=>{setTimeout(()=>{t(t=>[...t,e]),n===C.length-1&&i(`ended`)},(n+1)*300)})},disabled:n===`streaming`,className:`bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50`,children:n===`streaming`?`Streaming...`:`Start stream`}),(0,o.jsxs)(`span`,{className:`text-sm text-muted`,children:[n===`idle`&&`Not started`,n===`streaming`&&`${e.length} / ${C.length} chunks received`,n===`ended`&&`Stream ended ✓`]})]}),(0,o.jsx)(`div`,{className:`bg-surface rounded p-4 mb-4 border border-line font-mono text-sm min-h-[52px] text-heading-alt`,children:e.length===0?(0,o.jsx)(`span`,{className:`text-subtle`,children:`Output will appear here...`}):e.join(``)}),(0,o.jsx)(r,{children:`readableStream.on("data", (chunk) => {
  buffer += chunk; // fires once per chunk, as data arrives
});

readableStream.on("end", () => {
  console.log("done:", buffer); // fires once, after the last chunk
});`})]})}var T={Modules:v,"File System":h,"HTTP Servers":_,Streams:w,"NPM & Packages":b,"Environment Variables":u,"Path Module":x,"Error Handling":d,Events:p,Buffers:c,"Child Processes":l,"Async Patterns":s,"Process & OS":S};function E(){return(0,o.jsx)(i,{title:y.title,introduction:y.introduction,coreConcepts:y.coreConcepts,sections:[{heading:y.runtime.heading,description:y.runtime.description,content:(0,o.jsx)(f,{})}],fullExample:y.fullExample,gettingStarted:y.gettingStarted,practiceTopics:y.practiceTopics,practiceDemos:T,topicKey:`node`})}export{E as default};