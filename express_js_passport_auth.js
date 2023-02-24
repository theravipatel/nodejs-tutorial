const express       = require("express");
const passport      = require("passport");
const session       = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(express.urlencoded({extended: false}));

// Set template engine as "EJS"
app.set("view engine", "ejs");

//// Set Middleware

// Init express session
app.use(session({
    secret: "my_secret",
    resave: false,
    saveUninitialized: true,
}));

// Init passport on every API call
app.use(passport.initialize());

// Allow passport to use express session
app.use(passport.session());

//// Set Middleware

// Define authentication strategy - In this example, we will use Local Stretagy
passport.use(new LocalStrategy ((user, password, done) => {
    // passport will populate, user = req.body.username
    // passport will popuplate, password = req.body.password
    console.log("Username: ", user, "Password: ", password);

    /**
     * DB query code goes here
     * Search the email, password in the DB to authenticate the user
     */
    let authenticated_user = { 
        id: 1, 
        name: 'Ravi Patel', 
        email: 'ravi@test.com', 
        phone: '1231234569' 
    }

    /**
     * 1) If the user not found or password does not match in DB, -> done (null, false);
     * 2) If user found in DB, -> done (null, {authenticated_user});
     */
    return done(null, authenticated_user); // done(<err>, <user>)
}));

// Serialize User
passport.serializeUser((userObj, done) => {
    /**
     * In serialization of user process,
     * "express-session" creates a "req.session" obj, when it's invoked via app.use(session())
     * "passport" then adds an additional object "req.session.passport" to this "req.session"
     * All the serializeUser() function does is, receives the "authenticated user" object 
     * from the "Strategy" framework, and 
     * attach the authenticated user to "req.session.passport.user.{..}"
     */
    done(null, userObj);
});

// De-Serialize User
passport.deserializeUser((userObj, done) => {
    /**
     * In de-serialization of user process,
     * When the done (null, user) function is called in the deserializeUser(), 
     * Passport JS takes this last object attached to "req.session.passport.user.{..}", 
     * and attaches it to "req.user" i.e "req.user.{..}"
     */
    done(null, userObj);
});

checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { 
        return next();
    }
    res.redirect("/login");
}

checkLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/dashboard");
    }
    next();
}

app.get("/login", checkLoggedIn, (req, res) => {
    res.render("login");
});

/**
 * The "local" signifies that we are using "local" strategy. 
 * If we are using google or facebook to authenticate, 
 * it would say "google" or "facebook" instead of "local".
 */
app.post("/login-process", passport.authenticate('local', {
   successRedirect: "/dashboard",
   failureRedirect: "/login"
}));

app.get("/dashboard", checkAuthenticated, (req, res) => {
    const userData =  {
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone,
    };
    res.render("dashboard", {userData});
});

app.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            next(err);
        }
        res.redirect("/login");
    });
});

app.listen(5000);