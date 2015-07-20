var monday = moment().day(0); // беремо з прикріпленого скріпту. Далі обробка.
var sunday = moment().day(6); // аналогічно.

var thismonday = new Date(monday);
var thissunday = new Date(sunday);

var thmonday = thismonday.getDate(); // отримуємо дату
var thsunday = thissunday.getDate(); // отримуємо дату

var monthmnd = thismonday.getMonth(); // add +1 to 0
var monthsnd = thissunday.getMonth(); // add +1 to 0

if (monthmnd === 0) {
    var monthmndis = "січня";
}
if (monthmnd === 1) {
    var monthmndis = "лютого";
}
if (monthmnd === 2) {
    var monthmndis = "березня";
}
if (monthmnd === 3) {
    var monthmndis = "квітня";
}
if (monthmnd === 4) {
    var monthmndis = "травня";
}
if (monthmnd === 5) {
    var monthmndis = "червня";
}
if (monthmnd === 6) {
    var monthmndis = "липня";
}
if (monthmnd === 7) {
    var monthmndis = "серпня";
}
if (monthmnd === 8) {
    var monthmndis = "вересня";
}
if (monthmnd === 9) {
    var monthmndis = "жовтня";
}
if (monthmnd === 10) {
    var monthmndis = "листопада";
}
if (monthmnd === 11) {
    var monthmndis = "грудня";
}



if (monthsnd === 0) {
    var monthsndis = "січня";
}
if (monthsnd === 1) {
    var monthsndis = "лютого";
}
if (monthsnd === 2) {
    var monthsndis = "березня";
}
if (monthsnd === 3) {
    var monthsndis = "квітня";
}
if (monthsnd === 4) {
    var monthsndis = "травня";
}
if (monthsnd === 5) {
    var monthsndis = "червня";
}
if (monthsnd === 6) {
    var monthsndis = "липня";
}
if (monthsnd === 7) {
    var monthsndis = "серпня";
}
if (monthsnd === 8) {
    var monthsndis = "вересня";
}
if (monthsnd === 9) {
    var monthsndis = "жовтня";
}
if (monthsnd === 10) {
    var monthsndis = "листопада";
}
if (monthsnd === 11) {
    var monthsndis = "грудня";
}

    
var nowyearmnd = thismonday.getFullYear();
var nowyearsnd = thissunday.getFullYear();
