const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const errorController = require("./controllers/error");

const User = require("./models/user");

const DB_URI = "mongodb+srv://brian:domain017@ecommerce.nhwnpg9.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce"
const app = express();
const store = new MongoDBStore({
  uri: DB_URI,
  collection: 'sessions'

})

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({secret: 'my secert',resave: false,saveUninitialized: false,store: store}));

app.use((req, res, next) => {
  User.findById(req.session.user._id)
    .then((user) => {
      
     req.user = user
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    DB_URI
  )
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "brian",
          email: "brian@brian",
          cart: { items: [] },
        });
        user.save();
      }
    });

    app.listen(3000);
  })
  .catch((err) => console.log(err));
