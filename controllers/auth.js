exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie')?.split('=')[1] === 'true'
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true
  // req.session.user = 
  res.redirect("/");
};

exports.postlogout = (req,res,next)=>{
  req.session.destroy(()=>{
    res.redirect('/')
  })
}