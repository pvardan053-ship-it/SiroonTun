document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var guests = document.getElementById("guests").value;
  var stayType = document.getElementById("stayType").value;
  var notes = document.getElementById("notes").value;

  var message = "Բարև, ես " + name +
                " եմ։ Հեռախոս՝ " + phone +
                "։ Ցանկանում եմ ամրագրել " + date +
                " ամսաթվով (" + stayType + ")՝ " +
                guests + " մարդու համար։";

  if(notes){
    message += " Լրացուցիչ՝ " + notes;
  }

  var encodedMessage = encodeURIComponent(message);

  var instagramURL = "https://ig.me/m/siroon_tun?text=" + encodedMessage;

  window.open(instagramURL, "_blank");
});