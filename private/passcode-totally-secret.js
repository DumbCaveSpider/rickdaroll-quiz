function checkPswd() {
    // passcode lol
    var check1 = "rickhascringe";
    var check2 = "ShopPortalA";
    // checking passcode
    var password = document.getElementById("pswd").value;
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
        alert("That's not a vaild game code. Please try again");
    }
}