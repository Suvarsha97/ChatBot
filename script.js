const clientData = {
    "Suvarsha": {
        age: 18,
        email: "varsha@gmail.com",
        phone: "1234567890"
    },
    "Vishnu Priya": {
        age: 20,
        email: "v.priya@gmail.com",
        phone: "2345678910"
    },
    "Ketaki Jain": {
        age: 20,
        email: "k_jain@gmail.com",
        phone: "3456789012"
    }
};

function fetchData() {
    const query = document.getElementById("query-input").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (query in clientData) {
        const client = clientData[query];
        resultsDiv.innerHTML = `
            <h2>Client Information</h2>
            <p><strong>Name:</strong> ${query}</p>
            <p><strong>Age:</strong> ${client.age}</p>
            <p><strong>Email:</strong> ${client.email}</p>
            <p><strong>Phone:</strong> ${client.phone}</p>
        `;
    } else {
        resultsDiv.innerHTML = "<p>No data found for the entered query.</p>";
    }
}