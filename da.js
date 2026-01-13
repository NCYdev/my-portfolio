function getit() {
    const name = document.getElementById("ask").value;
    if (name === "") {
        document.getElementById("iknowurname").innerHTML = "Ok, I don't think you have inputted anything there yet."
    }
    else if (name !== "") {
        document.getElementById("iknowurname").innerHTML = "Your name is: " + name;
        document.getElementById("testdone").innerHTML = "Test is done!";
    } else {
        document.getElementById("iknowurname").innerHTML = "Error. Please try again."
    }
}