var timeleft = 30;

var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 30 - --timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);