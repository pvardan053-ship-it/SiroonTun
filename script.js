document.getElementById("bookingForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let date = document.getElementById("date").value;
let people = document.getElementById("people").value;
let time = document.getElementById("time").value;

let message = `Բարև, ցանկանում եմ ամրագրել Siroon Tun։
Անուն՝ ${name}
Հեռախոս՝ ${phone}
Ամսաթիվ՝ ${date}
Մարդկանց քանակ՝ ${people}
Ժամանակ՝ ${time}`;

let instagramURL = "https://www.instagram.com/direct/t/17841462524804645/?text=" + encodeURIComponent(message);

window.open(instagramURL, "_blank");
});
