// let: more limited scope, Local   
// var: global   
// const: can not change, immutable

// Variable Declaration
// from data.js
const tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//******************************************************************************************************/
// Using the UFO dataset provided in the form of an array of JavaScript objects
// write code that appends a table to a web page and then adds new rows of data for each UFO sighting.
//******************************************************************************************************/

// Step 1:

// create a function to built table with data
function buildTable(table){

    // Loop Through `data` 
    table.forEach((item) => {

    // Actively Append Table Row `tr` to the Table Body `tbody`
    let row = tbody.append("tr");

    // `Object.entries` & `forEach` to Iterate Through Keys and Values
    Object.entries(item).forEach(([key, value]) => {

    // Append a Cell to the Row for Each table data set
    let cell = row.append("td");

    // add the text value to each cell
    cell.text(value);

    });
  });
}

//******************************************************************************************************/
// Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the `date/time` column to find rows that match user input.
//******************************************************************************************************/

// Step 2: 

// filter the table 
function handleClick() {

    // stops the page refresh on "Enter" button
    d3.event.preventDefault();

    // clears the data of the current table   
    tbody.html("");

    var filteredData = tableData

    // Select the input element and get the value property of the input element
    var input = d3.select("#datetime").property("value");

    // create a if statement for the filter
    if(input){
        filteredData = filteredData.filter(result => result.datetime === input);
        // build table with filterData
        buildTable(filteredData);
    }
    
}


// Assigning an action to button when it's clicked
// This is our Listner Function
d3.select("#filter-btn").on("click", handleClick);

// Assigning an action to when user hits enter key
d3.select("form").on("submit", handleClick);

// Call build the table function at the end 
buildTable(tableData);