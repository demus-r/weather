$(function(){
    getWeatherData('ua', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; // Â³äõèëåííÿ â³ä UTC  â ì³ë³ñåêóíäàõ
        var city = data.city.name;
        var country = data.city.country;

        $.each(data.list, function(){
            // "this" òðèìàº îá'ºêò ïðîãíîçó çâ³äñè: http://openweathermap.org/forecast16
            var localTime = new Date(this.dt*1000 - offset); // êîíâåðòóºìî ÷àñ ç UTC ó ëîêàëüíèé
            addWeather(
                this.weather[0].icon,
                moment(localTime).calendar(),	// Âèêîðèñòîâóºìî moment.js äëÿ ïðåäñòàâëåííÿ äàòè
                this.weather[0].description,
                Math.round(this.temp.day) + '&deg;C'
            );
        });
        $('#location').html(city + ', <b>' + country + '</b>'); // Äîäàºìî ëîêàö³þ íà ñòîð³íêó
    }

    function addWeather(icon, day, condition, temp){
        var markup = '<div class="daybox" data-toggle="tooltip" data-placement="bottom" title="Подвійний клік для закриття">' +
                        '<div class="db_left">' +
                            '<img id="' + icon + '" src="images/img/img_transp.gif">' +
                        '</div>' +
                        '<div class="db_right">' +
                            '<h3>' + day + '</h3>' +
                            '<p class="item">Температура, С: <span class="item">' + temp + '</span></p>' +
                            '<p class="item">Стан: <span class="item">' + condition + '</span></p>' +
                        '</div>' +
                    '</div>';
        /*document.getElementById("weatherTable").innerHTML = markup;*/
        
        /*var markup = '<tr>'+
                '<td>' + day + '</td>' +
                '<td>' + '<img src="images/icons/'+ icon +'.png" />' + '</td>' +
                '<td>' + temp + '</td>' +
                '<td>' + condition + '</td>'
            + '</tr>';*/
        weatherTable.insertRow(-1).innerHTML = markup; // Äîäàºìî ðÿäîê äî òàáëèö³
    }

    function showError(msg){
        $('#error').html('Ñòàëàñÿ ïîìèëêà: ' + msg);
    }
});