// час дня для Alf
var day = new Date();
var hour = day.getHours();

if (hour >= 5 && hour < 12) {
    var hello = "Доброго ранку";
} else {
    if (hour >= 12 && hour < 18) {
        var hello = "Доброго дня";
    } else {
        if (hour >= 18 && hour < 24) {
            var hello = "Доброго вечора";
        } else {
            if (hour >= 0 && hour < 5) {
                var hello = "Доброї ночі! Чому не спиш?";
            }
        }
    }
}

// день тижня
//var day = new Date();
var today = day.getDay();

if (today === 0) {
    var todayis = "Неділя";
}
if (today === 1) {
    var todayis = "Понеділок";
}
if (today === 2) {
    var todayis = "Вівторок";
}
if (today === 3) {
    var todayis = "Середа";
}
if (today === 4) {
    var todayis = "Четвер";
}
if (today === 5) {
    var todayis = "П'ятниця";
}
if (today === 6) {
    var todayis = "Субота";
}

// сьогоднішня дата
// var day = new Date();
var nowdate = day.getDate();

// поточний місяць
// var day = new Date();
var nowmonth = day.getMonth();

if (nowmonth === 0) {
    var nowmonthis = "січня";
}
if (nowmonth === 1) {
    var nowmonthis = "лютого";
}
if (nowmonth === 2) {
    var nowmonthis = "березня";
}
if (nowmonth === 3) {
    var nowmonthis = "квітня";
}
if (nowmonth === 4) {
    var nowmonthis = "травня";
}
if (nowmonth === 5) {
    var nowmonthis = "червня";
}
if (nowmonth === 6) {
    var nowmonthis = "липня";
}
if (nowmonth === 7) {
    var nowmonthis = "серпня";
}
if (nowmonth === 8) {
    var nowmonthis = "вересня";
}
if (nowmonth === 9) {
    var nowmonthis = "жовтня";
}
if (nowmonth === 10) {
    var nowmonthis = "листопада";
}
if (nowmonth === 11) {
    var nowmonthis = "грудня";
}

// поточний рік
// var day = new Date();
var nowyear = day.getFullYear(); // getFullYear(), а не getYear()
