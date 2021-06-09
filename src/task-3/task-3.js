export default function filterTable(tbody, filters) {
    let index = 0;
    [...tbody.querySelectorAll("tr")].forEach((tr) => {
        const isFiltered = Object.keys(filters).every((key) => {
            const tdValue = tr.querySelector(
                `td[data-field-name=${key}]`
            ).innerHTML;
            if (tdValue)
                return tdValue
                    .toString()
                    .toLowerCase()
                    .includes(filters[key].toString().toLowerCase());
            else return false;
        });
        if (isFiltered) {
            tr.classList.remove("d-none");
            if (index % 2) tr.classList.add("table-row-even");
            else tr.classList.remove("table-row-even");
            tr.querySelector("td").innerHTML = index + 1;
            index++;
        } else {
            tr.classList.add("d-none");
        }
    });
}
