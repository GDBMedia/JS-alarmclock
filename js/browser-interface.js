var alarmClock = require('./../js/alarm.js').alarmClock;
var snooze = require('./../js/alarm.js').snooze;
var Howl = require('howler').Howl;

$(document).ready(function(){
  var aud = new Howl({
  urls: ["../images/rooster-4.wav"],
  loop: true
  });
  displayTime();
  $('#datetimepicker1').datetimepicker({
    format: 'MMMM Do YYYY, h:mm:ss a'
  });
  $("#alarm").submit(function(e){
    e.preventDefault();
    var alarmtime = $('#datetime').val();
    setInterval(function(){ if(alarmClock(alarmtime)){
        $("#group").fadeIn();
        $("#alarm").hide();
        $("#wakeup").text("WAKE UP!!!!!!");
        $('#pic').slideDown(500).effect("shake");
        aud.play();
      } }, 1000);
  });

  $("#snooze").click(function(e){
    e.preventDefault();
    aud.stop();
    $("#group").hide();
    var snoozetime = snooze();
    $("#wakeup").text("");
    $('#pic').hide();
    setInterval(function(){ if(alarmClock(snoozetime)){
        $("#group").fadeIn();
        $("#wakeup").text("WAKE UP!!!!!!");
        $('#pic').slideDown(500).effect("shake");
        aud.play();
      } }, 1000);
  });

  $('#cancel').click(function(e){
    aud.stop();
    e.preventDefault();
    $("#group").hide();
    $("#wakeup").text("");
    $('#pic').hide();
    $('#alarm')[0].reset();
    $('#alarm').slideDown(1000);


  });
});

function displayTime() {
    var time = moment().format('dddd MMMM Do, YYYY h:mm:ss a');
    $('#time').html(time);
    setTimeout(displayTime, 1000);
}
