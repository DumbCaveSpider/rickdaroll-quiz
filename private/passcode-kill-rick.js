function passcodeChk() {
    // passcode lol
    var kill = "rickgivesupshot";
    // checking passcode
    var password = prompt("Please enter the password to unlock the page:");
    if (password == kill) {
        window.location="/quiz/end/29"
        return;
    }
    // if none are correct or invaild
    else {
        window.location="/quiz/end/29"
    }
}