document.getElementById("bookingForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const bookingData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        people: document.getElementById("people").value
    };

    try {
        const response = await fetch("http://localhost:5000/book-table", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        });

        const data = await response.json();
        if (response.ok) {
            // Redirect to confirmation page with booking ID
            window.location.href = `confirmation.html?id=${data.bookingId}&name=${bookingData.name}&date=${bookingData.date}&time=${bookingData.time}&people=${bookingData.people}`;
        } else {
            alert("Booking failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
    }
});
