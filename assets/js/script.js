// toggle menu   
const toggleButtons = document.querySelectorAll(".toggle_menu");
const bodyElement=document.body;
toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (bodyElement.classList.contains("show__menu")) {
            bodyElement.classList.remove("show__menu");
        } else {
            bodyElement.classList.add("show__menu");
        }
    });
});

// Toggle Chat Widget
document.getElementById('chatToggle').addEventListener('click', function() {
    const widget = document.getElementById('chatWidget');
    widget.classList.toggle('hidden');
});

// Send Message
document.getElementById('sendMessage').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message) {
        const chatMessages = document.getElementById('chatMessages');

        // Add user message
        chatMessages.innerHTML += `
            <div class="flex justify-end mb-3">
                <div class="bg-indigo-600 rounded-lg p-3 max-w-[80%]">
                    <p class="text-sm">${message}</p>
                </div>
            </div>
        `;

        // Clear input
        input.value = '';

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate response (in real implementation, this would call an API)
        setTimeout(() => {
            let response = "I'm analyzing your question about Connecticut homeowner strategies. Can you provide more specific details about what you'd like to know?";

            // Simple keyword matching for demo purposes
            if (message.toLowerCase().includes('tax')) {
                response = "Connecticut property tax strategies are a key part of our homeowner outreach. We target properties with high tax burdens and offer solutions that can provide immediate relief through our acquisition program.";
            } else if (message.toLowerCase().includes('jefferson') || message.toLowerCase().includes('fisher')) {
                response = "The Jefferson Fisher principles we apply include cognitive resonance, urgency architecture, and identity alignment. These psychological frameworks help us craft messages that resonate with Connecticut homeowners' specific situations and motivations.";
            } else if (message.toLowerCase().includes('sms') || message.toLowerCase().includes('text') || message.toLowerCase().includes('message')) {
                response = "Our SMS campaigns achieve a 32% response rate by using highly personalized messages that reference specific property details and local market conditions. Each message sequence is carefully crafted to build trust and engagement.";
            } else if (message.toLowerCase().includes('conversion') || message.toLowerCase().includes('rate') || message.toLowerCase().includes('results')) {
                response = "Our Connecticut campaigns currently convert at 5.2% from initial contact to acquisition, with an average discount of 26% below ARV. The average time from first SMS to closing is 19 days.";
            }

            chatMessages.innerHTML += `
                <div class="flex mb-3">
                    <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0 mr-2">
                        <i class="fas fa-robot text-xs"></i>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-3 max-w-[80%]">
                        <p class="text-sm">${response}</p>
                    </div>
                </div>
            `;

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Charts
window.addEventListener('load', function() {
    // Lead Sources Chart
    const ctLeadCtx = document.getElementById('ctLeadChart').getContext('2d');
    const ctLeadChart = new Chart(ctLeadCtx, {
        type: 'doughnut',
        data: {
            labels: ['Tax Records', 'Pre-Foreclosure', 'Out-of-State Owners', 'Aging Homes', 'Other'],
            datasets: [{
                data: [42, 23, 18, 12, 5],
                backgroundColor: [
                    '#4f46e5',
                    '#7e22ce',
                    '#ec4899',
                    '#3b82f6',
                    '#1e293b'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#e5e7eb',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 10
                        },
                        boxWidth: 15
                    }
                }
            },
            cutout: '65%'
        }
    });

    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(performanceCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Responses',
                data: [285, 312, 387, 421, 463, 502],
                backgroundColor: '#4f46e5',
                borderWidth: 0,
                barPercentage: 0.5,
                categoryPercentage: 0.7
            }, {
                label: 'Appointments',
                data: [142, 168, 205, 238, 267, 291],
                backgroundColor: '#7e22ce',
                borderWidth: 0,
                barPercentage: 0.5,
                categoryPercentage: 0.7
            }, {
                label: 'Acquisitions',
                data: [12, 15, 18, 21, 24, 27],
                backgroundColor: '#ec4899',
                borderWidth: 0,
                barPercentage: 0.5,
                categoryPercentage: 0.7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 10
                        }
                    }
                },
                y: {
                    grid: {
                        color: '#374151',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#e5e7eb',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 10
                        },
                        boxWidth: 12
                    }
                }
            }
        }
    });

    // CPA Chart
    const cpaCtx = document.getElementById('cpaChart').getContext('2d');
    const cpaChart = new Chart(cpaCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Cost Per Acquisition',
                data: [1250, 1180, 1090, 980, 890, 810],
                borderColor: '#ec4899',
                backgroundColor: 'rgba(236, 72, 153, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: '#ec4899',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 10
                        }
                    }
                },
                y: {
                    grid: {
                        color: '#374151',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 10
                        },
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#e5e7eb',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 10
                        },
                        boxWidth: 12
                    }
                }
            }
        }
    });
});