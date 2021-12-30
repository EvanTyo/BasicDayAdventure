const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

app.set("View engine", "ejs");

// Home
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Start
app.get("/start", (req, res) => {
    res.render("start.ejs");
});

// Snooze Route
app.get("/start/snooze", (req, res) => {
    res.render("snooze.ejs");
});

app.get("/start/snooze/snooze2", (req, res) => {
    res.render("snooze2.ejs");
});

app.get("/start/snooze/snooze2/snoozeEnd", (req, res) => {
    res.render("snoozeEnd.ejs");
});

// Wake Route
app.get("/start/wake", (req, res) => {
    res.render("wake.ejs");
});

app.get("/start/wake/skipBrush", (req, res) => {
    res.render("skipBrush.ejs");
});

app.get("/start/wake/brush", (req, res) => {
    res.render("brush.ejs");
});

// Shower Route
app.get("/start/wake/brush/shower", (req, res) => {
    res.render("shower.ejs");
});

app.get("/start/wake/brush/shower/stay", (req, res) => {
    res.render("stay.ejs");
});

app.get("/start/wake/brush/shower/leave", (req, res) => {
    res.render("leave.ejs");
});

// Game Route
app.get("/start/wake/brush/shower/leave/game", (req, res) => {
    res.render("game.ejs");
});

app.get("/start/wake/brush/shower/leave/game/campaign", (req, res) => {
    res.render("game2.ejs");
});

app.get("/start/wake/brush/shower/leave/game/multiplayer", (req, res) => {
    res.render("game2.ejs");
});

// Breakfast Route
app.get("/start/wake/brush/shower/leave/breakfast", (req, res) => {
    res.render("breakfast.ejs");
});

app.get("/start/wake/brush/breakfast", (req, res) => {
    res.render("breakfast.ejs");
});

// Port listen
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

// Guessing Game
app.get("/guessingGame", (req, res) => {
    res.render("guessingGame.ejs");
});

app.get("/guessingGame/win", (req, res) => {
    res.render("win.ejs");
});

app.get("/guessingGame/lose", (req, res) => {
    res.render("lose.ejs");
});

// Route Calculator
app.get("/routeCalc", (req, res) => {
    res.render("routeCalc.ejs");
});

app.get("/add/:number1/:number2", (req, res) => {
    const entry1 = req.params["number1"];
    const entry2 = req.params["number2"];
    const sign = "+";

    checkInt(res, sign, entry1, entry2);
});

app.get("/subtract/:number1/:number2", (req, res) => {
    const entry1 = req.params["number1"];
    const entry2 = req.params["number2"];
    const sign = "-";
    
    checkInt(res, sign, entry1, entry2);
});

app.get("/multiply/:number1/:number2", (req, res) => {
    const entry1 = req.params["number1"];
    const entry2 = req.params["number2"];
    const sign = "*";
    
    checkInt(res, sign, entry1, entry2);
});

app.get("/divide/:number1/:number2", (req, res) => {
    const entry1 = req.params["number1"];
    const entry2 = req.params["number2"];
    const sign = "/";
    
    checkInt(res, sign, entry1, entry2);
});

app.get("/mod/:number1/:number2", (req, res) => {
    const entry1 = req.params["number1"];
    const entry2 = req.params["number2"];
    const sign = "%";
    
    checkInt(res, sign, entry1, entry2);
});

function checkInt(res, sign, entry1, entry2) {
    const number1 = parseInt(entry1);
    const number2 = parseInt(entry2);

    const equation = `${number1} ${sign} ${number2}`
    const answer = eval(equation);

    if (isNaN(entry1) || isNaN(entry2)) {
        res.send(`${entry1} and ${entry2} are not integers`);
    }
    else {
        res.send(`${equation} = ${answer}`);
    }
}