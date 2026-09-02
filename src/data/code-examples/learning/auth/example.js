const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

// 1. Register: hash the password before storing anything
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await db.users.create({ email, passwordHash });
  res.status(201).json({ id: user.id, email: user.email });
});

// 2. Login: verify the password, then issue a signed token
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await db.users.findOne({ email });
  const valid = user && (await bcrypt.compare(password, user.passwordHash));
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ sub: user.id, role: user.role }, SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// 3. Middleware: verify the token on every protected request
function requireAuth(req, res, next) {
  const header = req.get("Authorization") || "";
  const token = header.replace("Bearer ", "");
  try {
    req.user = jwt.verify(token, SECRET); // throws if invalid or expired
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

// 4. Authorization: identity alone isn't permission
app.delete("/posts/:id", requireAuth, async (req, res) => {
  const post = await db.posts.findById(req.params.id);
  const isOwner = post.authorId === req.user.sub;
  const isAdmin = req.user.role === "admin";
  if (!isOwner && !isAdmin) {
    return res.status(403).json({ error: "Not allowed to delete this post" });
  }
  await post.delete();
  res.status(204).end();
});
