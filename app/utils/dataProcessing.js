function getWeekDay (unixTime) {
  var date = new Date(unixTime * 1000);
  var month = date.getMonth()
  var day = date.getUTCDate();
  var dayOfWeek = date.getUTCDay();
  var Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return Days[dayOfWeek] + ", " + Months[month] + " " + day;
}

function getIcon (icon) {

}

module.exports = {
  getWeekDay: getWeekDay,
  getIcon: getIcon
}
