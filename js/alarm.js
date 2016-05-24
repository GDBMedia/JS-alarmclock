exports.alarmClock = function (alarmtime) {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    var checktime = moment().format('lll');

    if(checktime == alarmtime){
      return true;
    }
}
