var alarmClock = require('./../js/alarm.js').alarmClock;

$(document).ready(function(){
  displayTime();
  $('#datetimepicker1').datetimepicker({
    format: 'lll'
  });
  $("#alarm").submit(function(e){
    e.preventDefault();
    var alarmtime = $('#datetime').val();
    setInterval(function(){ if(alarmClock(alarmtime)){
        $("#wakeup").text("WAKE UP!!!!!!");
        $('#pic').slideDown(500).effect("shake");
        document.getElementById('rooster').play();
      } }, 1000);
  });
});

function displayTime() {
    var time = moment().format('HH:mm:ss');
    $('#time').html(time);
    setTimeout(displayTime, 1000);
}
