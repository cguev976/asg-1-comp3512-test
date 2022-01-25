function countDownTimer() {
  let deadLineDate = new Date("Mar 2, 2022 21:00:00").getTime(); // deadline 
  const currentDate = new Date().getTime(); // gets the current date
  const timeLeft = deadLineDate - currentDate; // time remaining

  //https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
  const dd = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hh = Math.floor((timeLeft/ (1000 * 60 *  60)) % 24);
  const mm = Math.floor((timeLeft /1000 / 60) % 60);
  const ss = Math.floor((timeLeft / 1000) % 60);

  console.log(`There is ${dd} days, ${hh} hours, ${mm} minutes, and ${ss} left until I am free.`);
}

setInterval('countDownTimer()', 1000); // refreshes the time every 1 second
