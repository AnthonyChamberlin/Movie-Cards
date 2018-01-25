function rateClick1(button1) {
    var x = button1.value;
    document.getElementById("result1").innerHTML = "Your Rating: " + x + "/10";
}

function rateClick2(button2) {
    var y = button2.value;
    document.getElementById("result2").innerHTML = "Your Rating: " + y + "/10";
}

function rateClick3(button3) {
    var z = button3.value;
    var result = document.getElementById("result3");
    result.innerHTML = "Your Rating: " + z + "/10";

}
