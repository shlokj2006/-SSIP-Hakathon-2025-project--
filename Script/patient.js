document.addEventListener("DOMContentLoaded", function() {
    // Sample health data for Chart.js
    const ctx = document.getElementById('healthChart').getContext('2d');
    const healthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Blood Pressure (mmHg)',
                data: [120, 118, 125, 122, 119],
                borderColor: 'blue',
                borderWidth: 1.5,
                pointRadius: 2,
                fill: false
            }, {
                label: 'Blood Sugar (mg/dL)',
                data: [90, 95, 88, 92, 94],
                borderColor: 'red',
                borderWidth: 1.5,
                pointRadius: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 8
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });

    // Reduce the canvas size directly
    document.getElementById('healthChart').style.maxHeight = '300px';
    document.getElementById('healthChart').style.maxWidth = '600px';
    
    // Load patient name dynamically (can be fetched from API)
    document.getElementById("patientName").innerText = "Rahul Sharma";
    
   
     
    });

