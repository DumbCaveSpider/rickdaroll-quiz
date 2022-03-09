var timeleft = 3;

var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 3 - --timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);