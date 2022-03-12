function checkPswd() {
    // passcode lol
    var theend = "rickanimeway";
    var check1 = "rickhascringe";
    var shop = "shopcodeportal";
    var ryanhouse = "nukingwithrick";
    
    // checking passcode
    var password = document.getElementById("pswd").value;
    if (password == theend) {
        window.open(
            "/quiz/57",
            "toolbar=no",
            "location=no",
            "directories=no",
            "status=no",
            "menubar=no",
            "scrollbars=no",
            "resizable=yes",
            "copyhistory=no"
        );
        window.location = "/remind/popupperms"
        return;
    }
    if (password == check1) {
        window.open(
            "/quiz/checkpoint1",
            "toolbar=no",
            "location=no",
            "directories=no",
            "status=no",
            "menubar=no",
            "scrollbars=no",
            "resizable=yes",
            "copyhistory=no"
        );
        window.location = "/remind/popupperms"
        return;
    }
    if (password == shop) {
        window.open(
            "/quiz/portal/a",
            "toolbar=no",
            "location=no",
            "directories=no",
            "status=no",
            "menubar=no",
            "scrollbars=no",
            "resizable=yes",
            "copyhistory=no"
        );
        window.location = "/remind/popupperms"
        return;
    }
if (password == ryanhouse) {
    window.open(
        "/quiz/portal/bomb",
        "toolbar=no",
        "location=no",
        "directories=no",
        "status=no",
        "menubar=no",
        "scrollbars=no",
        "resizable=yes",
        "copyhistory=no"
    );
    window.location = "/remind/popupperms"
    return;
}
    // if none are correct or invaild
    else {
        alert("Sorry... but that's not a vaild code. Please try another code THAT WORKS!");
    }
}