var timeleft = 70;

var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 70 - --timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);