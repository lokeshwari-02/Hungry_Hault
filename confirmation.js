document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get("id");
    const name = urlParams.get("name");
    const date = urlParams.get("date");
    const time = urlParams.get("time");
    const people = urlParams.get("people");

    if (bookingId) {
        document.getElementById("bookingDetails").innerHTML = `
            <strong>Booking ID:</strong> ${bookingId} <br>
            <strong>Name:</strong> ${name} <br>
            <strong>Date:</strong> ${date} <br>
            <strong>Time:</strong> ${time} <br>
            <strong>People:</strong> ${people}
        `;
    } else {
        document.getElementById("bookingDetails").innerHTML = "Invalid booking.";
    }
});
function goHome() {
    window.location.href = "index.html";
}
