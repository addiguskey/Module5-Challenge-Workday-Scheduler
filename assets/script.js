var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));

function hourTracker() {
  //get current number of hours.
  var currentTime = moment().hour(); // use of moment.js
  console.log("hour is: " + currentTime);
  // loop over time blocks
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    console.log(timeBlock, currentTime);

    //check if we've moved past this time, click into css/html given classes of past, present, or future
    if (timeBlock < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (timeBlock === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
hourTracker(); //re-run function

var hour9Todo = $("#hour9-todo");
var hour10Todo = $("#hour10-todo");
var hour11Todo = $("#hour11-todo");
var hour12Todo = $("#hour12-todo");
var hour13Todo = $("#hour13-todo");
var hour14Todo = $("#hour14-todo");
var hour15Todo = $("#hour15-todo");
var hour16Todo = $("#hour16-todo");
var hour17Todo = $("#hour17-todo");

$("#hour9-todo").text(JSON.parse(localStorage.getItem("hour9")));
$("#hour10-todo").text(JSON.parse(localStorage.getItem("hour10")));
$("#hour11-todo").text(JSON.parse(localStorage.getItem("hour11")));
$("#hour12-todo").text(JSON.parse(localStorage.getItem("hour12")));
$("#hour13-todo").text(JSON.parse(localStorage.getItem("hour13")));
$("#hour14-todo").text(JSON.parse(localStorage.getItem("hour14")));
$("#hour15-todo").text(JSON.parse(localStorage.getItem("hour15")));
$("#hour16-todo").text(JSON.parse(localStorage.getItem("hour16")));
$("#hour17-todo").text(JSON.parse(localStorage.getItem("hour17")));

$("#sv-btn9").on("click", function () {
  if (hour9Todo != "") {
    var todo9Array = JSON.parse(localStorage.getItem("hour9")) || [];
    todo9Array = [];
    todo9Array.push(hour9Todo.val());
    localStorage.setItem("hour9", JSON.stringify(todo9Array));
  }
});
$("#sv-btn10").on("click", function () {
  if (hour10Todo != "") {
    console.log(hour10Todo);
    console.log(hour10Todo.val());
    var todo10Array = JSON.parse(localStorage.getItem("hour10")) || [];
    todo10Array.push(hour10Todo.val());
    localStorage.setItem("hour10", JSON.stringify(todo10Array));
  }
});
$("#sv-btn11").on("click", function () {
  if (hour11Todo != "") {
    var todo11Array = JSON.parse(localStorage.getItem("hour11")) || [];
    todo11Array.push(hour11Todo.val());
    localStorage.setItem("hour11", JSON.stringify(todo11Array));
  }
});
$("#sv-btn12").on("click", function () {
  if (hour12Todo != "") {
    var todo12Array = JSON.parse(localStorage.getItem("hour12")) || [];
    todo12Array.push(hour12Todo.val());
    localStorage.setItem("hour12", JSON.stringify(todo12Array));
  }
});
$("#sv-btn13").on("click", function () {
  if (hour13Todo != "") {
    var todo13Array = JSON.parse(localStorage.getItem("hour13")) || [];
    todo13Array.push(hour13Todo.val());
    localStorage.setItem("hour13", JSON.stringify(todo13Array));
  }
});
$("#sv-btn14").on("click", function () {
  if (hour14Todo != "") {
    var todo14Array = JSON.parse(localStorage.getItem("hour14")) || [];
    todo14Array.push(hour14Todo.val());
    localStorage.setItem("hour14", JSON.stringify(todo14Array));
  }
});
$("#sv-btn15").on("click", function () {
  if (hour15Todo != "") {
    var todo15Array = JSON.parse(localStorage.getItem("hour15")) || [];
    todo15Array.push(hour15Todo.val());
    localStorage.setItem("hour15", JSON.stringify(todo15Array));
  }
});
$("#sv-btn16").on("click", function () {
  if (hour16Todo != "") {
    var todo16Array = JSON.parse(localStorage.getItem("hour16")) || [];
    todo16Array.push(hour16Todo.val());
    localStorage.setItem("hour16", JSON.stringify(todo16Array));
  }
});
$("#sv-btn17").on("click", function () {
  if (hour17Todo != "") {
    var todo17Array = JSON.parse(localStorage.getItem("hour17")) || [];
    todo17Array.push(hour17Todo.val());
    localStorage.setItem("hour17", JSON.stringify(todo17Array));
  }
});
