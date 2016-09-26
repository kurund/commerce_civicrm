/*
 * @file
 * This is to sort the table data, currently its not working properly. Need to make changes in script.
 */

jQuery('a').click(function(){
    var table = jQuery(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer(jQuery(this).parent().index()))
    this.asc = !this.asc
    if (!this.asc){rows = rows.reverse()}
    for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    return false;
})
function comparer(index) {
    return function(a, b) {
        var valA = get_cell_value(a, index), valB = get_cell_value(b, index)
        return jQuery.isNaN(valA) && jQuery.isNaN(valB) ? valA - valB : valA.localeCompare(valB)
    }
}
function get_cell_value(row, index){ return jQuery(row).children('td').eq(index).html() }
