
function getRowHtml(fields, row, index) {
    const cells = fields.map(field => `<td data-field-name="${field}">${row[field]}</td>`).join("");
    const className = row.dNone === true ? "d-none" : index % 2 ? "table-row-even" : ""
    return `
        <tr class=${className}>
            <td>${index + 1}</td>
            ${cells}
        </tr>`;
}

function getTableHtml(data, fields) {
    let index = 0
    const rRow = getRowHtml.bind(null, fields);
    const table = []
    for (const row of data) {
        table.push(rRow(row, index))
        if(row.dNone !== true) ++index
    }
    return table.join("")
}

export default function renderTable(el, data, fields) {
    el.innerHTML = getTableHtml(data, fields);
}
