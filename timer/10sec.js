var timeleft = 10;

var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 10 - --timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);