
const patients = [
    {
        id: '12345',
        name: 'Rajesh Kumar',
        roomNo: '205',
        admissionDate: '25th March 2025',
        dischargeDate: '5th April 2025',
        nextAppointment: '10th April 2025'
    },
    {
        id: '54321',
        name: 'Priya Sharma',
        roomNo: '310',
        admissionDate: '20th March 2025',
        dischargeDate: '3rd April 2025',
        nextAppointment: '8th April 2025'
    }
];

// Function to display patient details
function displayPatientDetails(patient) {
    document.getElementById('patientDetails').innerHTML = `
        <p><strong>Name:</strong> ${patient.name}</p>
        <p><strong>Room No:</strong> ${patient.roomNo}</p>
        <p><strong>Admission Date:</strong> ${patient.admissionDate}</p>
        <p><strong>Discharge Date:</strong> ${patient.dischargeDate}</p>
        <p><strong>Next Appointment:</strong> ${patient.nextAppointment}</p>
    `;
    document.getElementById('noPatientMessage').classList.add('d-none');  // Hide no patient message
}

// Function to handle search for patient ID
function searchPatient() {
    const patientId = document.getElementById('patientSearch').value;
    const patient = patients.find(p => p.id === patientId);

    if (patient) {
        displayPatientDetails(patient);
    } else {
        document.getElementById('noPatientMessage').classList.remove('d-none');  // Show no patient found message
        document.getElementById('patientDetails').innerHTML = '';  // Clear details
    }
}

// Event listener for the patient ID search input
document.getElementById('patientSearch').addEventListener('input', searchPatient);

// Function to handle sending messages in the chatbot
function sendMessage() {
    const userMessage = document.getElementById('chatInput').value;
    if (userMessage) {
        // Display user message
        const userMessageDiv = document.createElement('p');
        userMessageDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
        document.getElementById('chatbox').appendChild(userMessageDiv);

        // Simulate a bot reply (simple response for demo purposes)
        const botMessageDiv = document.createElement('p');
        botMessageDiv.innerHTML = `<strong>Bot:</strong> I’m here to help you!`;
        document.getElementById('chatbox').appendChild(botMessageDiv);

        // Clear the input field
        document.getElementById('chatInput').value = '';
        
        // Scroll chatbox to bottom
        document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
    }
}

// Example of redirecting to Smart Map page
document.querySelector('.btn-primary').addEventListener('click', function() {
    window.location.href = 'smart_map.html'; // Link to the smart map page
});
