// popap
function popap() {
    document.querySelector(".popap_on").addEventListener("mouseout", mouseOut);
    let off = document.querySelector(".popap_bg");

    function mouseOut() {
        if (!localStorage.getItem("off")) {
            off.style.display = "block";
        }
    }
    // closa
    document.querySelector('#close').onclick = function() {
        off.style.height = "0"
        off.style.marginTop = "40%"
        localStorage.setItem("off", off)
    }
    document.querySelector('body').onclick = function() {
        off.style.height = "0"
        off.style.marginTop = "40%"
        localStorage.setItem("off", off)
    }
}
// data
function date() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    let date = document.querySelectorAll(".price-text>span")
    for (let i = 0; i < date.length; i++) {
        date[i].innerHTML = day + "/" + month + "/" + year;
    }
}
// ---taimer упаковок + localStorage---
function colvo() {
    let stop_time = setInterval(myTimer, 10000);

    function myTimer() {
        let left_count = document.querySelectorAll(".left_count")
        let r = 60;
        if (localStorage.getItem("kolvo")) {
            r = +localStorage.getItem("kolvo")
        }
        left_count[0].innerHTML = r;
        left_count[1].innerHTML = r;

        r += -1;
        while (r < 7) {
            clearInterval(stop_time);
            r = 7;
        }
        localStorage.setItem("kolvo", r);
    }
}
// ---taimer second/minute + localStorage---
function thime() {
    let stop_time_1 = setInterval(second, 1000);
    let s = 60; //second
    let m = 40; //minute
    if (localStorage.getItem('sec') !== null) {
        m = +localStorage.getItem('min')
        s = +localStorage.getItem('sec')
    }
    let left_count = document.querySelectorAll(".second")
    let left_count1 = document.querySelectorAll(".minute")

    function second() {
        if (m == 0 && s == 0) {
            clearInterval(stop_time_1);
        }
        if (m == 0) {
            m = "00"
        }
        if (s == 0) {
            s = "00"
        }
        left_count[0].innerHTML = s
        left_count[1].innerHTML = s
        left_count1[0].innerHTML = m
        left_count1[1].innerHTML = m
        localStorage.setItem('min', m)
        localStorage.setItem('sec', s)
        if (s == 0) {
            s = 60
            m += -1
        }
        s += -1
    }
}
// inp 1 2 3 The_weight
function inputs_The_weight() {
    let inp3 = document.querySelector(".inp3")
    let line1 = document.querySelector(".line1")
    let line2 = document.querySelector(".line2")

    inp3.oninput = function() {
        let = this.value.trim();
        if (this.value > 0 && this.value < 59) {
            line1.innerHTML = "У ВАС НОРМАЛЬНЫЙ ВЕС";
            line2.innerHTML = "Но если вы склонны к полноте остерегайтесь последствий!";
            line1.style.visibility = "inherit";
            line2.style.visibility = "inherit";
            line1.style.color = "#06C33DFF"
        } else if (this.value > 60 && this.value < 69) {
            line1.innerHTML = "ОЖИРЕНИЕ 1-Й СТЕПЕНИ";
            line2.innerHTML = "Немедленно начните лечение!";
            line1.style.visibility = "inherit";
            line2.style.visibility = "inherit";
            line1.style.color = "#E53752FF"
        } else if (this.value > 69 && this.value < 79) {
            line1.innerHTML = "ОЖИРЕНИЕ 2-Й СТЕПЕНИ";
            line2.innerHTML = "Немедленно начните лечение!";
            line1.style.visibility = "inherit";
            line2.style.visibility = "inherit";
            line1.style.color = "#E53752FF"
        } else if (this.value > 79) {
            line1.innerHTML = "ОЖИРЕНИЕ 3-Й СТЕПЕНИ";
            line2.innerHTML = "Немедленно начните лечение!";
            line1.style.visibility = "inherit";
            line2.style.visibility = "inherit";
            line1.style.color = "#E53752FF"
        }
    }
}
async function call() {
    popap()
    colvo()
    date()
    thime()
    inputs_The_weight()
}
call()