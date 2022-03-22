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
var textArea = $("<textarea>"); // create textarea, source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
var saveButton = $("<button>"); // create button
// var italics = $("<i>") // create italics for saveBtn i:hover

var hours = ["      9am ", "    10am ", "    11am ", "    12pm ", "      1pm ", "      2pm ", "      3pm ", "      4pm ", "      5pm "] // for timeblocks

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
    var numberConvert = Number(currentTime); // to convert string to number, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

    return  numberConvert; 
  }
  
 numCurrentTime = displayTime(); // global variable goes into the function so that it gets "return Number(currentTime)" out of it

container.append(table);

for (var i = 0; i < hours.length; i++) { // using for loop to generate each timeBlock
    var tableRow = $("<tr>"); // create table
    var tableData1 = $("<td>"); // create table
    var tableData2 = $("<td>"); // create table
    var textArea = $("<textarea>") // create textarea
    var tableData3 = $("<td>"); // create table
    var saveButton = $("<button>"); // create button
    // var italics = $("<italics>"); 

    tableRow.addClass("row") // using CSS class
    tableData1.addClass("hour"); // using CSS class
    tableData3.addClass("saveBtn"); // using CSS class

    saveButton.attr("data-hour", i+9); // to save a data attribute to each button, source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

    // this wasn't needed in the end for issues encountered when reducing screen width
    // textArea.addClass("form-control") // bootstrap, to deal with screen size change source: https://getbootstrap.com/docs/4.0/components/forms/
    
    var hourLabel = i + 9; // for conditional to check time recorded to apply correct class: past/present/future
    
    if (hourLabel === numCurrentTime) {
        tableData2.addClass("description present");
    } else if (hourLabel <= numCurrentTime) {
        tableData2.addClass("description past");    
    } else {
        tableData2.addClass("description future");
    }

    // appending nodes/elements
    table.append(tableRow);
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableData2.append(textArea);
    tableRow.append(tableData3);
    tableData3.append(saveButton);
    // saveButton.append(italics);

    // italics.append("fa-solid fa-floppy-disk")

    // saveButton.addClass('<i class="fa-solid fa-floppy-disk"></i>')

    textArea.attr("rows", "1") // needs to be kept to 1 row or else save button is obscured when screen width decreases
    textArea.attr("cols", "100")
    textArea.attr("id", i+9)

    tableData1.text(hours[i]); // from hours array
    saveButton.text("    🖫     "); // source of unicode: https://unicode-table.com/en/1F5AB/

    // saveButton.attr("style", "background-color: #06aed5, border: none, color: white, font-size: x-large;")
    
}

var planner = {
    nineAm: "",
    tenAm: "",
    elevenAm: "",
    twelvePm: "",
    onePm: "",
    twoPm: "",
    threePm: "",
    fourPm: "",
    fivePm: "",
}

// event listener over the table node to listen to any button that is clicked with the saveBtn class
$("table").on('click', '.saveBtn button', function (event) {
    event.preventDefault();

    var btnClicked = $(event.target); // target being the button
    var hour = Number(btnClicked.attr('data-hour')); // retrieves data attribute, have to change string to number for if statement
    // console.log(typeof hour)

    if (hour === 9) {
        planner.nineAm = $("#" + hour).val();
    } else if (hour === 10) {
        planner.tenAm = $("#" + hour).val();
    } else if (hour === 11) {
        planner.elevenAm = $("#" + hour).val();
    } else if (hour === 12) {
        planner.twelvePm = $("#" + hour).val();
    } else if (hour === 13) {
        planner.onePm = $("#" + hour).val();
    } else if (hour === 14) {
        planner.twoPm = $("#" + hour).val();
    } else if (hour === 15) {
        planner.threePm = $("#" + hour).val();
    } else if (hour === 16) {
        planner.fourPm = $("#" + hour).val();
    } else if (hour === 17) {
        planner.fivePm = $("#" + hour).val();
    }

    localStorage.setItem("planner", JSON.stringify(planner)); // saves object to local storage

  });

  

// next, add button, .on, setItem, getItem, event.preventDefault

// addEventListener() = .on()

// moment().format("hA"); gives 8pm for example
// if hour is equal to planner hour then change class to present
// else if hour is less than planner hour then change class to past
// else change class to future
// think of applying 24 hour time
// hence use moment().format("H");
