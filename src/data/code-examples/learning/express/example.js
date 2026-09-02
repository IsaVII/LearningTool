const express = require("express");
const app = express();

// Built-in middleware: parses JSON request bodies into req.body
app.use(express.json());

// Custom middleware: runs for every request, in registration order
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // hand off to the next middleware/route - don't forget this!
});

// In-memory "database" for this example
let users = [{ id: 1, name: "Ada Lovelace" }];

// A router groups related routes and can be mounted at a path prefix
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.json(users);
});

usersRouter.get("/:id", (req, res, next) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return next({ status: 404, message: "User not found" });
  res.json(user);
});

usersRouter.post("/", (req, res, next) => {
  if (!req.body.name) {
    return next({ status: 400, message: "name is required" });
  }
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

app.use("/users", usersRouter);

// 404 fallback - runs if no route above matched
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Error-handling middleware - 4 args is what marks it as an error handler.
// Must be registered last, after every other app.use()/route.
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
