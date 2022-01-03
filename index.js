const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

const session = require("express-session");
const req = require("express/lib/request");
const res = require("express/lib/response");

app.use(session ({
    secret: "RandoStringHere",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.set("View engine", "ejs");

// Post Login information
app.post("/login", (req, res) => {
    const valid_users = [{"name": "sue", "password": "sue"}, {"name": "joe", "password": "joe"}];
    const user = req.body.username;
    const pass = req.body.password;

    const found_user = valid_users.find(login => {
        return login.name == user && login.password == pass;
    })

    if (found_user) {
        req.session.username = user;
        res.redirect("/home");
    } else {
        req.session.destroy(() => {
            console.log("User reset");
        });
        res.redirect("/?reason=invalid_user");
    }
});

// Login
app.get("/", (req, res) => {
    let user;
    let punctuation;
    let invalid_login = false;
    
    invalid_login = req.query.reason || null;

    if (req.session && req.session.username) {
        user = req.session.username;
        punctuation = ",";
    }
    
    res.render("index.ejs", {my_user: user, punctuation: punctuation, invalid_login: invalid_login});
});

function check_for_login(req, res, page) {
    if (req.session && req.session.username) {
        res.render(page, {user: req.session.username});
    } else {
        res.redirect("/");
    }
}

// Home
app.get("/home", (req, res) => {
    check_for_login(req, res, "home.ejs");
    // res.render("home.ejs");
});

// Start
app.get("/start", (req, res) => {
    check_for_login(req, res, "start.ejs");
    //res.render("start.ejs");
});

// Snooze Route
app.get("/start/snooze", (req, res) => {
    check_for_login(req, res, "snooze.ejs");
    //res.render("snooze.ejs");
});

app.get("/start/snooze/snooze2", (req, res) => {
    check_for_login(req, res, "snooze2.ejs");
    //res.render("snooze2.ejs");
});

app.get("/start/snooze/snooze2/snoozeEnd", (req, res) => {
    check_for_login(req, res, "snoozeEnd.ejs");
    //res.render("snoozeEnd.ejs");
});

// Wake Route
app.get("/start/wake", (req, res) => {
    check_for_login(req, res, "wake.ejs");
    //res.render("wake.ejs");
});

app.get("/start/wake/skipBrush", (req, res) => {
    check_for_login(req, res, "skipBrush.ejs");
    //res.render("skipBrush.ejs");
});

app.get("/start/wake/brush", (req, res) => {
    check_for_login(req, res, "brush.ejs");
    //res.render("brush.ejs");
});

// Shower Route
app.get("/start/wake/brush/shower", (req, res) => {
    check_for_login(req, res, "shower.ejs");
    //res.render("shower.ejs");
});

app.get("/start/wake/brush/shower/stay", (req, res) => {
    check_for_login(req, res, "stay.ejs");
    //res.render("stay.ejs");
});

app.get("/start/wake/brush/shower/leave", (req, res) => {
    check_for_login(req, res, "leave.ejs");
    //res.render("leave.ejs");
});

// Game Route
app.get("/start/wake/brush/shower/leave/game", (req, res) => {
    check_for_login(req, res, "game.ejs");
    //res.render("game.ejs");
});

app.get("/start/wake/brush/shower/leave/game/campaign", (req, res) => {
    check_for_login(req, res, "game2.ejs");
    //res.render("game2.ejs");
});

app.get("/start/wake/brush/shower/leave/game/multiplayer", (req, res) => {
    check_for_login(req, res, "game2.ejs");
    //res.render("game2.ejs");
});

// Breakfast Route
app.get("/start/wake/brush/shower/leave/breakfast", (req, res) => {
    check_for_login(req, res, "breakfast.ejs");
    //res.render("breakfast.ejs");
});

app.get("/start/wake/brush/breakfast", (req, res) => {
    check_for_login(req, res, "breakfast.ejs");
    //res.render("breakfast.ejs");
});

// Guessing Game
app.get("/guessingGame", (req, res) => {
    check_for_login(req, res, "guessingGame.ejs");
    //res.render("guessingGame.ejs");
});

app.get("/guessingGame/win", (req, res) => {
    check_for_login(req, res, "win.ejs");
    //res.render("win.ejs");
});

app.get("/guessingGame/lose", (req, res) => {
    check_for_login(req, res, "lose.ejs");
    //res.render("lose.ejs");
});

// Route Calculator
app.get("/routeCalc", (req, res) => {
    check_for_login(req, res, "routeCalc.ejs");
    //res.render("routeCalc.ejs");
});

app.get("/add/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params["number1"]);
    const number2 = parseInt(req.params["number2"]);
    const method = "Add";
    const sign = "+";

    check_for_login_routeCalc(req, res, method, sign, number1, number2);
    //checkInt(res, method, sign, number1, number2);
});

app.get("/subtract/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params["number1"]);
    const number2 = parseInt(req.params["number2"]);
    const method = "Subtract";
    const sign = "-";
    
    check_for_login_routeCalc(req, res, method, sign, number1, number2);
    //checkInt(res, method, sign, number1, number2);
});

app.get("/multiply/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params["number1"]);
    const number2 = parseInt(req.params["number2"]);
    const method = "Multiply";
    const sign = "*";
    
    check_for_login_routeCalc(req, res, method, sign, number1, number2);
    //checkInt(res, method, sign, number1, number2);
});

app.get("/divide/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params["number1"]);
    const number2 = parseInt(req.params["number2"]);
    const method = "Divide";
    const sign = "/";
    
    check_for_login_routeCalc(req, res, method, sign, number1, number2);
    //checkInt(res, method, sign, number1, number2);
});

app.get("/mod/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params["number1"]);
    const number2 = parseInt(req.params["number2"]);
    const method = "Mod";
    const sign = "%";

    check_for_login_routeCalc(req, res, method, sign, number1, number2);
    //checkInt(res, method, sign, number1, number2);
});

function check_for_login_routeCalc(req, res, method, sign, number1, number2) {
    if (req.session && req.session.username) {
        checkInt(req, res, method, sign, number1, number2);
    } else {
        res.redirect("/");
    }
}

function checkInt(req, res, method, sign, number1, number2) {
    const equation = `${number1} ${sign} ${number2}`
    const answer = eval(equation);
    const full = `${equation} = ${answer}`;

    res.render("calculated.ejs", {method: method, message: full, user: req.session.username});
    //res.render("calculated.ejs", {method: method, message: full});
}

// Port listen
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});