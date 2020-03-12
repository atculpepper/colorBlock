$(document).ready(init);

let numRedClicks = 0;

let numBlueClicks = 0;

let numGreenClicks = 0;

let numYellowClicks = 0;

function init() {
  console.log("jq loaded");
  $(".container").append(`
  <div class="square red"></div>
  <div class="square blue"></div>
  <div class="square green"></div>
  <div class="square yellow"></div>
  `);

  $(".js-button-redButton").on("click", clickRed);
  $(".js-button-redButton").on("click", addRed);

  $(".js-button-blueButton").on("click", clickBlue);
  $(".js-button-blueButton").on("click", addBlue);

  $(".js-button-greenButton").on("click", clickGreen);
  $(".js-button-greenButton").on("click", addGreen);

  $(".js-button-yellowButton").on("click", clickYellow);
  $(".js-button-yellowButton").on("click", addYellow);

  $(".square").on("click", squareClick);
}

function squareClick() {
  console.log("in squareClick");
}
// squareClick currently only linked up on 4 first appended squares
//looks like CSS stylesheet is not connected to any new squares (margins different)
//once linked, use .empty()

//*FUNCTIONS TO ADD COLORFUL SQUARES TO DIV CONTAINER
function addRed() {
  let elRed = $(`<div class="square red"></div>`);
  $(".container").append(elRed);
}
//created a variable to hold the div being appended here so that differentiation will be easier down the line

function addBlue() {
  let elBlue = $(`<div class="square blue"></div>`);
  $(".container").append(elBlue);
}

function addGreen() {
  let elGreen = $(`<div class="square green"></div>`);
  $(".container").append(elGreen);
}

function addYellow() {
  let elYellow = $(`<div class="square yellow"></div>`);
  $(".container").append(elYellow);
}

//*FUNCTIONS TO KEEP COUNT OF HOW MANY COLORFUL SQUARES ADDED
function clickRed() {
  console.log("in clickRed");
  numRedClicks++;
  console.log("Clicked Red: " + numRedClicks);
  $(".redNumber").text(" " + numRedClicks);
}

function clickBlue() {
  numBlueClicks++;
  console.log("Clicked Blue: " + numBlueClicks);
  $(".blueNumber").text(" " + numBlueClicks);
}

function clickGreen() {
  numGreenClicks++;
  console.log("Clicked Green: " + numGreenClicks);
  $(".greenNumber").text(" " + numGreenClicks);
}

function clickYellow() {
  numYellowClicks++;
  console.log("Clicked Yellow " + numYellowClicks);
  $(".yellowNumber").text(" " + numYellowClicks);
}
