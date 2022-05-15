var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var timeBlocks = $(".time-blocks");
// var currentTime = moment().hour();

function hourTracker() {
  //get current number of hours.
  var currentTime = moment().hour(); // use of moment.js
  console.log("hour is: " + currentTime);
  // loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, currentTime);

    //check if we've moved past this time, click into css/html given classes of past, present, or future
    if (blockHour < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (blockHour === currentTime) {
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

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
