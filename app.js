const express = require("express");
const path = require("path");
const rootDir = require("./uitl/path");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.render("404");
});
app.listen(3000, () => console.log("Server is running on port 3000"));
