const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const mongoConnect = require("./uitl/database");
//models

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//add user to every route or request
app.use((req, res, next) => {
  //user middleware
});
// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);
//relations

mongoConnect((client) => {
  console.log(client);
  app.listen(3000, console.log("listening on port 3000"));
});
