const User = require('../models/user');
exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie')?.split('=')[1] === 'true'
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('66a27a93b7fbdc3c44dd5131').then(user =>{
    req.session.isLoggedIn = true
    req.session.user = user
  })
  
  // req.session.user = 
  res.redirect("/");
};

exports.postlogout = (req,res,next)=>{
  req.session.destroy(()=>{
    res.redirect('/')
  })
}