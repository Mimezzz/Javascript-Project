// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user inpu

// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

var dateinput=d3.select("#datetime");
var cityinput=d3.select("#city");
var stateinput=d3.select("#state");
var countryinput=d3.select("#country");
var shapeinput=d3.select("#shape");

var filterButton = d3.select("#filter-btn");

function renderTable() {
  // Clear anything in the table
  tbody.html("");

  // console.log("filter button clicked")
  // Read the filter values, transform to lowercase to keep everything consistent
  var datefiltervalue = dateinput.property("value");
  var cityfiltervalue = cityinput.property("value").toLowerCase();
  var statefiltervalue = stateinput.property("value").toLowerCase();
  var countryfiltervalue = countryinput.property("value").toLowerCase();
  var shapefiltervalue = shapeinput.property("value").toLowerCase();
  
  // filtering by conditoons
  var filteredlist = tableData.filter((sighting) => {

            var matchdate = false;
            var matchcity = false;
            var matchstate = false;
            var matchcountry = false;
            var matchshape = false;

      if (datefiltervalue !="" && datefiltervalue ==sighting.datetime) {
          matchdate =true;
      };

      if (datefiltervalue =="") {
        matchdate =true;
      };

      if (cityfiltervalue !="" && cityfiltervalue ===sighting.city) {
        matchcity =true;
    };

      if (cityfiltervalue =="") {
        matchcity =true;
      }

      if (statefiltervalue !="" && statefiltervalue ===sighting.state) {
        matchstate =true;
    };

      if (statefiltervalue =="") {
        matchstate =true;
      };

      if (countryfiltervalue !="" && countryfiltervalue ===sighting.country) {
        matchcountry =true;
    };

    if (countryfiltervalue =="") {
      matchcountry =true;
    };

      if (shapefiltervalue !="" && shapefiltervalue ===sighting.shape) {
        matchshape =true;
    };

    if (shapefiltervalue =="") {
      matchshape =true;
    };

    return matchdate && matchcity && matchstate && matchcountry && matchshape;
  });
    
  // display table

  filteredlist.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

}


// Attach the function to the keyup event so that it runs everytime we press a key
filterButton.on("click",renderTable);




