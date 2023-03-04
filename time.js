const moment = require('moment');
// to get the  time-zone of specific country
const timezone = require('moment-timezone');
// YYYY-MM-DDTHH:mm:ss.sssZ   ISO Time format  international origanization standards  Z is timzone offset

// working on date
console.log(moment().format("DD-MM-YYYY"));
console.log(moment().format("YYYY-MM-DD"));
console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
console.log("end");

// to get the timeZone of specific country using tz by passing the specific origin/capital
const indiaTime = timezone().tz('Asia/Kolkata').format();
const londonTime = timezone().tz('Europe/London').format();
const newYorkTime = timezone().tz('America/New_York').format()
console.log(indiaTime);
console.log(londonTime);
console.log(newYorkTime);
console.log("end");

// play with Date 

// dddd, MMMM Do YYYY, h:mm:ss a z   a stands for am or pm   z stansds for which time zone like pst

let date1 = "2023/mar/14"
let date2 = "18-03/2023"
let date1Format = moment(date1,"YYYYMMMMDD").format("DD-MM-YYYY")
let date2Format = moment(date2,"DDMMYYYY").format("DD-MM-YYYY")
console.log(date1Format);
console.log(date2Format);
console.log("end");


// addition and subtraction of time  .add()  and .subtract() 

let time = moment('2023-03-04T12:19:54+05:30');
time.add(1,'hours')
console.log(time);
time.add(30,'minutes')
console.log(time);
time.add(50,'seconds')
console.log(time);
time.add(1, 'days')
console.log(time);
time.add(1, 'months')
console.log(time);
// same for year
// when we have to to subract somthing from time we have to use .sutract method

let a =  "2023-03-01"
let b = "2023-03-10"

let d1 =  moment(a,"YYYY-MM-DD")
let d2 =  moment(b,"YYYY-MM-DD")

// d2.diff(d1) returns the difference between d2 and d1 in milliseconds, which is 3600000 (1 hour * 60 minutes * 60 seconds * 1000 milliseconds).
// If you don't pass the second parameter in d2.diff(d1), Moment.js will default to returning the difference between the two moments in milliseconds.
let ans  = d2.diff(d1)
console.log(ans);
console.log(moment.duration(ans).asDays());
// The diff method, on the other hand, is used to calculate the difference between two moments. It takes another moment object as a parameter and returns a duration object representing the difference between the two moments
// simlarly asHours asMinutes

// Here are some other similar functions for the duration object in Moment.js:

// asHours(): Returns the duration in hours.
// asMinutes(): Returns the duration in minutes.
// asSeconds(): Returns the duration in seconds.
// asMilliseconds(): Returns the duration in milliseconds.
// asWeeks(): Returns the duration in weeks.
// asMonths(): Returns the duration in months.
// asYears(): Returns the duration in years.

// isValid() to check moment is valid or not

