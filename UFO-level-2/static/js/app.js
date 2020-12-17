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

    // 1st: Select the input element and get the value property of the input element
    // 2nd: Create an if statement for the input filter

    var date = d3.select("#datetime").property("value");
    if(date){
        filteredData = filteredData.filter(result => result.datetime === date);
    }

    var city = d3.select("#city").property("value");
    if(city){
        filteredData = filteredData.filter(result => result.city === city);
    }

    var state = d3.select("#state").property("value");
    if(state){
        filteredData = filteredData.filter(result => result.state === state);
    }

    var country = d3.select("#country").property("value");
    if(country){
        filteredData = filteredData.filter(result => result.country === country);
    }

    var shape = d3.select("#shape").property("value");
    if(shape){
        filteredData = filteredData.filter(result => result.shape === shape);
    }

    // build table with filterData
    buildTable(filteredData);

}

function pageRefresh() {
location.reload();
return false;
}

// Call build the table function at the end 
buildTable(tableData);

// Assigning an action to button when it's clicked
// This is our Listner Function
d3.select("#filter-btn").on("click", handleClick);

// // Assigning an action to when user hits enter key
d3.select("#ufo-form").on("submit", handleClick);

d3.select("#page-btn").on("click", pageRefresh);

