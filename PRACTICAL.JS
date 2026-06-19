function startCountdown() {
    let num = parseInt(document.getElementById("numberInput").value);
    let result = document.getElementById("result");

    if (isNaN(num) || num <= 0) {
        result.innerHTML = "Please enter a positive number.";
        return;
    }

    result.innerHTML = num;

    let interval = setInterval(() => {
        num--;

        if (num >= 1) {
            result.innerHTML = num;
        } else {
            result.innerHTML = "Countdown Complete!";
            clearInterval(interval);
        }
    }, 1000);
}