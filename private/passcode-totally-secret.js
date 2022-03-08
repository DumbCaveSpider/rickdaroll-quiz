function checkPswd() {
    // passcode lol
    var preview = "preview";
    var check1 = "rickhascringe";
    var check2 = "ShopPortalA";
    // checking passcode
    var password = document.getElementById("pswd").value;
    if (password == preview) {
        window.open(
            "/quiz/1.html",
            "toolbar=no",
            "location=no",
            "directories=no",
            "status=no",
            "menubar=no",
            "scrollbars=no",
            "resizable=yes",
            "copyhistory=no"
        );
        return;
    }
    if (password == check1) {
        window.open(
            "/quiz/16.html",
            "toolbar=no",
            "location=no",
            "directories=no",
            "status=no",
            "menubar=no",
            "scrollbars=no",
            "resizable=yes",
            "copyhistory=no"
        );
        return;
    }
    if (password == check2) {
        window.open(
            "/quiz/portal/a.html",
            "toolbar=no",
            "location=no",
            "directories=no",
            "status=no",
            "menubar=no",
            "scrollbars=no",
            "resizable=yes",
            "copyhistory=no"
        );
        return;
    }
    // if none are correct or invaild
    else {
        alert("Sorry... but that's not a vaild code. Please try another code THAT WORKS!");
    }
}