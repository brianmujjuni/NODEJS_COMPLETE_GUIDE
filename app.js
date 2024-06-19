const express = require("express");
// const { engine } = require("express-handlebars");
const path = require("path");
const rootDir = require("./uitl/path");

const app = express();

// // app.set("view engine", "pug");
// app.engine(
//   "handlebars",
//   engine({
//     defaultLayout: "main-layout",
//     // layoutsDir: path.join(rootDir, "views", "./layouts"),
//     layoutsDir: "views/layouts",
//     extname: "handlebars",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found" });
});
app.listen(3000, () => console.log("Server is running on port 3000"));
