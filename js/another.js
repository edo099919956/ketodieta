// location sng || rusian
let res;
let strana = document.querySelectorAll("#country");
$(document).ready(function red() {
    $.get("http://ipinfo.io", function (response) {
        res = response.city
    }, "jsonp");
});
if (res === "russia") {
    strana[0].innerHTML = "России";
    strana[1].innerHTML = "России";
}
else {
    strana[0].innerHTML = "Страны СНГ";
    strana[1].innerHTML = "Страны СНГ";
}
// if location changed alert
location.href;
"https://edo099919956.github.io/ketodieta/";

if (location.href.includes("callback=1") === true) {
    alert("Есть параметр callback");
    window.location.href = 'http://local.ru/?callback=1';
}
// 
