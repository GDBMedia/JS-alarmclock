exports.alarmClock = function (alarmtime) {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    var checktime = moment().format('MMMM Do YYYY, h:mm:ss a');

    if(checktime == alarmtime){
      return true;
    }
}


exports.snooze = function(){
  return moment().add(1, 'm').format('MMMM Do YYYY, h:mm:ss a'); 
}
