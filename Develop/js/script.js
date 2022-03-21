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
var container = $(".container"); // class selector
var table = $("<table>"); // create table
var tableRow = $("<tr>"); // create table
var tableData1 = $("<td>"); // create table
var tableData2 = $("<td>"); // create table
var tableData3 = $("<td>"); // create table
var textArea = $("<textarea>") // create textarea, source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
// var italics = $("<i>") // create italics for saveBtn i:hover

var hours = ["      9am ", "    10am ", "    11am ", "    12pm ", "      1pm ", "      2pm ", "      3pm ", "      4pm ", "      5pm "]

// have to use moment.js twice? one for displaying the date at the top of the page and the other for keeping track of the hourly time blocks

function displayDate() { // use currentDay id
    var currentDay = moment().format("dddd, MMMM Do");
    currentDayEl.text(currentDay);
  }

displayDate();

var numCurrentTime; // for function displayTime() input

function displayTime() { // use currentDay id
    var currentTime = moment().format("H");
    // did console.log(typeof currentTime) to check if it was a number, it was a string

    return Number(currentTime); // to convert string to number, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  }

  displayTime(numCurrentTime); // global variable goes into the function so that it gets "return Number(currentTime)" out of it

// timeBlocks... seems to use tables and seems to want 9am to 5pm as "standard business hours"

container.append(table);


for (var i = 0; i < hours.length; i++) {
    var tableRow = $("<tr>"); // create table
    var tableData1 = $("<td>"); // create table
    var tableData2 = $("<td>"); // create table
    var textArea = $("<textarea>") // create textarea
    var tableData3 = $("<td>"); // create table

    tableRow.addClass("row")
    tableData1.addClass("hour");
    tableData3.addClass("saveBtn");

    // this wasn't needed in the end for issues encountered when reducing screen width
    // textArea.addClass("form-control") // bootstrap, to deal with screen size change source: https://getbootstrap.com/docs/4.0/components/forms/
    
    var hourLabel = i + 9;
    
    if (hourLabel === numCurrentTime) {
        tableData2.addClass("description present");
    } else if (hourLabel <= numCurrentTime) {
        tableData2.addClass("description past");    
    } else {
        tableData2.addClass("description future");
    }

    table.append(tableRow);
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableData2.append(textArea);
    tableRow.append(tableData3);

    textArea.attr("rows", "1") // needs to be kept to 1 row or else save button is obscured when screen width decreases
    textArea.attr("cols", "100")

    tableData1.text(hours[i]);
    tableData3.text("    🖫     "); // source of unicode: https://unicode-table.com/en/1F5AB/


    
}

// addEventListener() = .on()

// moment().format("hA"); gives 8pm for example
// if hour is equal to planner hour then change class to present
// else if hour is less than planner hour then change class to past
// else change class to future
// think of applying 24 hour time
// hence use moment().format("H");
