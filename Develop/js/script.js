// possible variables due to CSS
var jumbotron = $(".jumbotron"); // class selector
var lead = $(".lead"); // class selector
var currentDayEl = $("#currentDay"); // element selector
var description = $(".description"); // class selector
var timeBlock = $(".time-block"); // class selector
var row = $(".row"); // class selector
var past = $(".past"); // class selector
var present = $(".present"); // class selector
var future = $(".future"); // class selector
var saveBtn = $(".saveBtn"); // class selector

// have to use moment.js twice? one for displaying the date at the top of the page and the other for keeping track of the hourly time blocks

function displayTime() { // use currentDay id
    var currentDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(currentDay);
  }

displayTime();