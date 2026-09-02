function bookTicket() {

    // Get user data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const aadhar = document.getElementById("aadhar").value;
    const city = document.getElementById("City").value;
    const date = document.getElementById("date").value;

    // Get selected bus
    const selectedBus = document.querySelector('input[name="bus"]:checked');

    // Get selected seat
    const seat = document.getElementById("seat").value;


    // Validation
    if (name === "" || age === "" || aadhar === "" || date === "") {
        alert("Please fill all the details!");
        return;
    }

    if (!selectedBus) {
        alert("Please select AC or Non AC Bus!");
        return;
    }


    // Bus information
    let busType;
    let price;

    if (selectedBus.value === "AC") {
        busType = "AC Bus";
        price = 2000;
    } else {
        busType = "Non AC Bus";
        price = 1000;
    }


    // Create new box
    const bookingDetails = document.createElement("div");

    bookingDetails.id = "booking-details";


    // Put all information inside new box
    bookingDetails.innerHTML = `
        <h2>Booking Confirmed</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Aadhar No.:</strong> ${aadhar}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Bus:</strong> ${busType}</p>
        <p><strong>Seat:</strong> ${seat}</p>
        <p><strong>Price:</strong> ₹${price}</p>
    `;


    // Add new box inside Card
    document.getElementById("Card").appendChild(bookingDetails);
}