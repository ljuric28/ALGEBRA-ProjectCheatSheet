var timeElement = document.getElementById('timer');
var time = parseInt(timeElement.dataset.startTime);

var intervalId = setInterval(function () {
  if (time === -1) {
      timeElement.classList.add('expired');
    clearInterval(intervalId);
  } else {
    timeElement.innerHTML = time;
    time--;
  }
}, 1000);