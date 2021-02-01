// from data.js
var tableData = data;


var tbody = d3.select('#ufo-tbody');

function buildTable(tableData){
    tableData.forEach(record => {
        var row = tbody.append('tr');

            row.append('td').text(record['datetime']);
            row.append('td').text(record['city']);
            row.append('td').text(record['state']);
            row.append('td').text(record['country'])    
            row.append('td').text(record['shape']);
            row.append('td').text(record['durationMinutes']);
            row.append('td').text(record['comments']);

    })
}

function filterTable(){
    var filteredData = tableData;

    var datetime = d3.select('#datetime').property('value');
    var city = d3.select('#city').property('value');
    var state = d3.select('#state').property('value');
    var country = d3.select('#country').property('value');
    var shape = d3.select('#shape').property('value');

    var filterFields = {
        'datetime': datetime,
        'city': city,
        'state': state, 
        'country': country,
        'shape': shape
    }
    Object.entries(filterFields).forEach(([key, val]) => {
        
        if(!val) { 
            delete filterFields[key];
        }
    });

    Object.entries(filterFields).forEach(([key, value]) => {

        filteredData = filteredData.filter(row => row[key] == value);
      });    


    tbody.html('');
    buildTable(filteredData);    
}


btn = d3.select('#filter-btn');
datetimefield = d3.select('#datetime')

btn.on('click', filterTable);
datetimefield.on('change', filterTable);

d3.selectAll('.filter').on('change', filterTable);

buildTable(tableData);
