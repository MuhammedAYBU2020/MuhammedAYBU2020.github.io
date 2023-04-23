const button = document.getElementById("bttn");
var currentLevel = 1;
var clickCounter = 0;
var timeOut = 500;

var changeLoc = () => {
    button.style.marginTop = Math.random() * 300 + "px";
    button.style.marginLeft = Math.random() * 300 + "px";
}

button.addEventListener("mouseover",changeLoc);

button.addEventListener("click",() => {
    clickCounter++;
    // console.log("Clicked : " + clickCounter);

    if(clickCounter == 3) {
        // alert("You are the winner! You can go to next level.");
        alert("You completed the level.");
        currentLevel = currentLevel + 1;
        clickCounter = 0;
        timeOut = timeOut - 100;

        if(currentLevel == 6) {
            alert("You are the winner. Congratulations!!!");
            currentLevel = 1;
            clickCounter = 0;
            timeOut = 500;
        }
        else {
            setTimeout(changeLoc(),timeOut);
        }
    }
})