var timeleft = 5;

var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 5 - --timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);