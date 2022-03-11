var timeleft = 36000;

var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 36000 - --timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);