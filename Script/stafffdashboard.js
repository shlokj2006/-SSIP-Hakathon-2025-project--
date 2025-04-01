document.addEventListener("DOMContentLoaded", function() {
    // Mock data for tables
    const staffScheduleData = [
        { name: "Dr. Aman Gupta", shift: "Morning", department: "Cardiology" },
        { name: "Nurse Priya Sharma", shift: "Night", department: "ICU" },
        { name: "Dr. Ravi Mehta", shift: "Evening", department: "Orthopedics" }
    ];
    
    const pharmacyData = [
        { medicine: "Paracetamol", stock: "Low" },
        { medicine: "Ibuprofen", stock: "Available" },
        { medicine: "Antibiotics", stock: "Reordering" }
    ];
    
    const patientManagementData = [
        { name: "Ravi Kumar", condition: "Stable", room: "203" },
        { name: "Amit Verma", condition: "Critical", room: "405" },
        { name: "Sneha Patel", condition: "Recovering", room: "102" }
    ];
    
    // Populate tables
    function populateTable(data, tableId) {
        const tableBody = document.getElementById(tableId);
        tableBody.innerHTML = "";
        data.forEach(row => {
            const tr = document.createElement("tr");
            Object.values(row).forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }
    
    populateTable(staffScheduleData, "staffScheduleTable");
    populateTable(pharmacyData, "pharmacyTable");
    populateTable(patientManagementData, "patientManagementTable");
    
    // Charts using Chart.js
    const ctxAttendance = document.getElementById("attendanceChart").getContext("2d");
    new Chart(ctxAttendance, {
        type: "bar",
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            datasets: [{
                label: "Staff Attendance",
                data: [90, 85, 95, 80, 92],
                backgroundColor: "#0d6efd"
            }]
        },
        options: { responsive: true }
    });
    
    const ctxVisitor = document.getElementById("visitorChart").getContext("2d");
    new Chart(ctxVisitor, {
        type: "doughnut",
        data: {
            labels: ["Checked-in", "Checked-out"],
            datasets: [{
                data: [50, 30],
                backgroundColor: ["#28a745", "#dc3545"]
            }]
        },
        options: { responsive: true }
    });
    
    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", function() {
        alert("Logging out...");
        window.location.href = "login.html";
    });
    
    // Smart Map navigation
    document.getElementById("smartMapBtn").addEventListener("click", function() {
        window.location.href = "smart-map.html";
    });
});
