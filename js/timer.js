window.onload = function () {
  var tens = 00;
  var seconds = 00; 
  var minutes = 00; 
  var hours = 00;
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var appendHours = document.getElementById("hours");
  var buttonStart = document.getElementById('button-start');
  var buttonReset = document.getElementById('button-reset');
  var Interval;
  var flag = false;

  buttonStart.onclick = function() {
    if(flag == false) {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      flag = true;
    }
    else {
      clearInterval(Interval);
      flag = false;
    }
  }

  buttonReset.onclick = function() {
    clearInterval(Interval);
  	seconds = "00";
    minutes = "00";
    hours = "00";
  	appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
  }
  
  function startTimer() {
    tens++;
    
    if (tens > 99) {
      if (seconds == 59) {
        minutes++
        seconds = 0
        appendMinutes.innerHTML = "0" + minutes;
      }
      else {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
      }
    }
    
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}

document.querySelector('.timer__subbtn').addEventListener('click', function(e) {
  e.target.closest('.timer__subbtn').classList.toggle('timer__btn-toggle');
})