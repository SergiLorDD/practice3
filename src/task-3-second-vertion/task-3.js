import renderTable from "./render";
import albums from "./albums.json";

export default function filterTable(tbody, filters) {
    const filterKeys = Object.keys(filters);
    // if(filterKeys.length === 0) return;
    console.log(albums)
    const filteredAlbums = albums.map((row) => {
        const isFiltered = filterKeys.every(key => row[key].toString().includes(filters[key]))
        const disabledRow = row;
        if(isFiltered){
            disabledRow.dNone = false
            return disabledRow
        }
        else {
            disabledRow.dNone = true
            return disabledRow
        }
    })

    renderTable(tbody, filteredAlbums, ["album", "performer", "genre", "year"])
}   

// {
//     year: "1980",
//     genre: "rock"
// }