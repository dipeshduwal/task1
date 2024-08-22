
const data = [
    {ID:1, Name:'Adam', Address:'US'},
    {ID:2, Name:'Bella', Address:'UK'},
    {ID:3, Name:'Chris', Address:'AUS'},
    {ID:4, Name:'Dan', Address:'NEP'},
    {ID:5, Name:'Eva', Address:'NZ'}
];  

function createTableWithInnerHTML() {
    let tableHTML = '<table border="1"><tr>';

    Object.keys(data[0]).forEach(key => {
        tableHTML += `<th>${key}</th>`;
    });

    tableHTML += '</tr>';

    data.forEach(item => {
        tableHTML += '<tr>';
        Object.values(item).forEach(value => {
            tableHTML += `<td>${value}</td>`;
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</table>';

    document.body.innerHTML += tableHTML;
}

createTableWithInnerHTML();

