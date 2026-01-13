const regex = /[^a-zA-Z0-9\s]/;
let dorlcd = 0;

function timeoutdemo() {
    dorlcd = 1;
}

function timeoutdemo2() {
    dorlcd = 0;
}

function getit() {
    const name = document.getElementById("ask").value;
    const tf = /\d/.test(name);
    const hs = regex.test(name);
    if (tf === true && hs === false) {
        document.getElementById("iknowurname").innerHTML = "Your name uses numbers  O_o?";
        document.getElementById("testdone").innerHTML = "";
    } else if (tf === false && hs === true) {
        document.getElementById("iknowurname").innerHTML = "Ok, I don't think your name has symbols -_-";
        document.getElementById("testdone").innerHTML = "";
    } else if (hs === true && tf === true) {
        document.getElementById("iknowurname").innerHTML = "No way your name is like that -_-";
        document.getElementById("testdone").innerHTML = "";
    } else {
        if (name === "") {
            document.getElementById("iknowurname").innerHTML = "Ok, I don't think you have inputted anything there yet -_-"
            document.getElementById("testdone").innerHTML = ""
        }
        else if (name !== "") {
            document.getElementById("iknowurname").innerHTML = "Hello, " + name + " ^-^!";
            document.getElementById("testdone").innerHTML = "Test is done!";
        } else {
            document.getElementById("iknowurname").innerHTML = "Error. Please try again  x_x?!"
        }
    }
}

function jointhedarkside() {
    alert("Dark Mode is not completed yet! Sorry!")
    var el = document.body;
    el.classList.toggle("dark-mode");
    dv.classList.toggle("dark-mode");
}