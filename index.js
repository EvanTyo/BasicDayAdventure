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
