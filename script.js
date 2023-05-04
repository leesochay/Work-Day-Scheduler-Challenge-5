// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var currentTime = today.format('H');
var containerlgEl = $('.container-lg')

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
// Code to create divs for the past, present, and future blocks
// 

// For loop to apply the correct code depending on past, present, or future
    for (var i = 0; i < 9; i++) {

      var checkTime = i + 9;
      console.log(checkTime);

// Business hours for the calendar and the class creation for each schedule block
      
      let busHours = "";
      let hoursId = "";
      
      if (checkTime < 12) {
      busHours = checkTime + "AM";
      hoursId = "hour-" + checkTime;
      } else if (checkTime > 12) {
      busHours = ((checkTime - 12) + "PM");
      hoursId = "hour-" + (checkTime - 12);
      } else {
      busHours = "12PM";
      hoursId =  "hour-12";
     }

     
     // create div for past hours
      
        if (checkTime < currentTime) {
          console.log("Past time");
      
          var calendarEl1 = $('<div>');
          calendarEl1.attr("id", hoursId).addClass("row time-block past");
          var calendarEl2 = $('<div>');
          calendarEl2.addClass("col-2 col-md-1 hour text-center py-3").text(busHours);
          var calendarEl3 = $('<textarea>');
          calendarEl3.attr("rows", "3").addClass("col-8 col-md-10 description");
          var calendarEl4 = $('<button>');
          calendarEl4.attr("aria-label", "save").addClass("btn saveBtn col-2 col-md-1");    
          var calendarEl5 = $('<i>');
          calendarEl5.attr("aria-hidden", "true").addClass("fas fa-save");    
      
          containerlgEl.append(calendarEl1);
          calendarEl1.append(calendarEl2);
          calendarEl1.append(calendarEl3);
          calendarEl1.append(calendarEl4);
          calendarEl4.append(calendarEl5); 
      
// create div for present hour

        } else if (currentTime >= checkTime && currentTime < (checkTime + 1) ) {
          console.log("We're in the hour");
      
          var calendarEl1 = $('<div>');
          calendarEl1.attr("id", hoursId).addClass("row time-block present");
          var calendarEl2 = $('<div>');
          calendarEl2.addClass("col-2 col-md-1 hour text-center py-3").text(busHours);
          var calendarEl3 = $('<textarea>');
          calendarEl3.attr("rows", "3").addClass("col-8 col-md-10 description");
          var calendarEl4 = $('<button>');
          calendarEl4.attr("aria-label", "save").addClass("btn saveBtn col-2 col-md-1");    
          var calendarEl5 = $('<i>');
          calendarEl5.attr("aria-hidden", "true").addClass("fas fa-save");    
      
          containerlgEl.append(calendarEl1);
          calendarEl1.append(calendarEl2);
          calendarEl1.append(calendarEl3);
          calendarEl1.append(calendarEl4);
          calendarEl4.append(calendarEl5); 
      
// create div for future hours          

        } else {
          console.log("this is the future");
      
          var calendarEl1 = $('<div>');
          calendarEl1.attr("id", hoursId).addClass("row time-block future");
          var calendarEl2 = $('<div>');
          calendarEl2.addClass("col-2 col-md-1 hour text-center py-3").text(busHours);
          var calendarEl3 = $('<textarea>');
          calendarEl3.attr("rows", "3").addClass("col-8 col-md-10 description");
          var calendarEl4 = $('<button>');
          calendarEl4.attr("aria-label", "save").addClass("btn saveBtn col-2 col-md-1");    
          var calendarEl5 = $('<i>');
          calendarEl5.attr("aria-hidden", "true").addClass("fas fa-save");    
      
          containerlgEl.append(calendarEl1);
          calendarEl1.append(calendarEl2);
          calendarEl1.append(calendarEl3);
          calendarEl1.append(calendarEl4);
          calendarEl4.append(calendarEl5); 
      
        }
      
        }
      



    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?


    //
    // Code to display the current date in the header of the page.

$('#currentDay').text(today.format('dddd, MMMM D YYYY'));




  });
  