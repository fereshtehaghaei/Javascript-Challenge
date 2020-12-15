// from data.js
var tableData = data;

// YOUR CODE HERE!


// Get a reference to the table body
// select table-body that's where data is
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);


// Step 1: Loop Through `data` and console.log each weather report object
// for each go through each one data, weatherReport is a variable we called it
tableData.forEach(function(ufoReport) {
    console.log(tableData);
  });


  // Drilling down to get to object's key and value
// BONUS: Refactor to use Arrow Functions!
// we can use below and shorter way to 
// forEach, loops through data our weatherReport will equal to one object inside the data list and stores it in weatherReport
// we will then add our new row 
// and it will loop in each object and will go grab a key and value
// add table row and add the td (table data)
tableData.forEach((ufoReport) => {   
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    
  });