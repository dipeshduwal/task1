const data = [
    {ID:1, Name:'Adam', Address:'US'},
    {ID:2, Name:'Bella', Address:'UK'},
    {ID:3, Name:'Chris', Address:'AUS'},
    {ID:4, Name:'Dan', Address:'NEP'},
    {ID:5, Name:'Eva', Address:'NZ'},
    {ID:6, Name:'Fiona', Address:'US'}
];  

function createTableWithInnerHTML() { //function to create table with innerhtml
    let tableHTML = '<table border="1"><tr>'; //declaring css usable HTML table

    Object.keys(data[0]).forEach(key => { //declaring keys into tablehead from data
        tableHTML += `<th>${key}</th>`;
    });

    tableHTML += '</tr>'; //adding rows until the keys are available

    data.forEach(item => {  
        tableHTML += '<tr>';
        Object.values(item).forEach(value => { //declaring values into tabledata for each item
            tableHTML += `<td>${value}</td>`;
        });
        tableHTML += '</tr>'; //adding rows until the values are available
    });

    tableHTML += '</table>';

    document.body.innerHTML += tableHTML;
}

createTableWithInnerHTML();





