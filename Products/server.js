const Express = require("express");

const app = Express();
// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Product Module" });
});

// Server defined on port 5000.
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
