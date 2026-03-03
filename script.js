document.addEventListener("DOMContentLoaded", function () {

    const overnightInput = document.getElementById("overnightNights");
    const saunaInput = document.getElementById("saunaDays");
    const totalPriceEl = document.getElementById("totalPrice");
    const form = document.getElementById("bookingForm");

    function calculatePrice() {
        let nights = Number(overnightInput.value) || 0;
        let saunaDays = Number(saunaInput.value) || 0;

        let total = 0;

        if (nights > 0) {
            total = nights * 100000;
        }

        total += saunaDays * 20000;

        totalPriceEl.textContent = total.toLocaleString();
    }

    overnightInput.addEventListener("input", calculatePrice);
    saunaInput.addEventListener("input", calculatePrice);

    form.addEventListener("submit", function(e){
        e.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let people = document.getElementById("people").value;
        let nights = overnightInput.value;
        let sauna = saunaInput.value;
        let total = totalPriceEl.textContent;

        let message = `Բարև, ցանկանում եմ ամրագրել Siroon Tun։
Անուն՝ ${name}
Հեռախոս՝ ${phone}
Մարդկանց քանակ՝ ${people}
Գիշերակացներ՝ ${nights}
Շոքեբաղնիք օրեր՝ ${sauna}
Ընդհանուր գումար՝ ${total} դրամ`;

        const smsURL = "sms:094108617?body=" + encodeURIComponent(message);

        window.location.href = smsURL;
    });

});
