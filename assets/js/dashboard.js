// Login Validation
document.getElementById('login-button').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');
    const loginLoader = document.getElementById('login-loader');
    
    // Reset error messages
    phoneError.classList.add('hidden');
    passwordError.classList.add('hidden');
    
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    let isValid = true;
    
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.classList.remove('hidden');
        isValid = false;
    }
    
    if (passwordInput.value !== 'password') {
        passwordError.classList.remove('hidden');
        isValid = false;
    }
    
    if (isValid) {
        // Show loader
        loginLoader.classList.remove('hidden');
        
        // Simulate login delay
        setTimeout(function() {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('dashboard-container').style.display = 'block';
            
            // Initialize charts after dashboard is visible
            initCharts();
        }, 1500);
    }
});

// Simulated haptic feedback
document.querySelectorAll('.haptic-feedback').forEach(item => {
    item.addEventListener('click', function() {
        if ('vibrate' in navigator) {
            navigator.vibrate(20);
        }
    });
});

// Chat Widget Toggle
document.getElementById('chat-toggle').addEventListener('click', function() {
    document.getElementById('chat-widget').style.display = 'block';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-widget').style.display = 'none';
});

// Chat Functionality
document.getElementById('send-message').addEventListener('click', sendChatMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

function sendChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const message = chatInput.value.trim();
    
    if (message) {
        // Add user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user';
        userMessageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(userMessageDiv);
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate AI response after a brief delay
        setTimeout(function() {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'chat-message bot';
            
            // Predefined responses based on keywords
            let response = "I'm not sure I understand. Could you please clarify or ask about lead generation, marketing campaigns, or your dashboard metrics?";
            
            if (message.toLowerCase().includes('lead')) {
                response = "Your current lead generation is performing well with a 12.5% increase from last week. Would you like to explore specific lead sources or ways to improve conversion rates?";
            } else if (message.toLowerCase().includes('facebook') || message.toLowerCase().includes('social')) {
                response = "Your Facebook Groups campaigns are generating strong engagement. The 'Property Investment Club' group has your highest conversion rate at 22.8%. Would you like me to suggest optimization strategies?";
            } else if (message.toLowerCase().includes('sms') || message.toLowerCase().includes('text') || message.toLowerCase().includes('message')) {
                response = "Your SMS campaigns have a 97.8% delivery rate and 31.5% response rate. That's 2.1% lower than last week. I recommend testing new message templates for the 'New Lead' stage.";
            } else if (message.toLowerCase().includes('report') || message.toLowerCase().includes('data')) {
                response = "I can generate a custom report for you. Would you like to see data on lead sources, conversion rates, or marketing ROI?";
            } else if (message.toLowerCase().includes('help') || message.toLowerCase().includes('support')) {
                response = "I'm here to help! You can ask me about lead generation, campaign performance, marketing strategies, or system features. What specific information do you need?";
            }
            
            botMessageDiv.innerHTML = `<p>${response}</p>`;
            chatMessages.appendChild(botMessageDiv);
            
            // Scroll to bottom again
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Initialize Charts
function initCharts() {
    // Lead Sources Chart
    const leadSourcesCtx = document.getElementById('leadSourcesChart').getContext('2d');
    const leadSourcesChart = new Chart(leadSourcesCtx, {
        type: 'bar',
        data: {
            labels: ['Facebook Groups', 'SMS Campaigns', 'Email Marketing', 'Referrals', 'Website', 'Other'],
            datasets: [{
                label: 'Leads Generated',
                data: [423, 368, 294, 187, 156, 55],
                backgroundColor: [
                    'rgba(78, 115, 223, 0.8)',
                    'rgba(54, 185, 204, 0.8)',
                    'rgba(246, 194, 62, 0.8)',
                    'rgba(231, 74, 59, 0.8)',
                    'rgba(28, 200, 138, 0.8)',
                    'rgba(133, 135, 150, 0.8)'
                ],
                borderColor: [
                    'rgba(78, 115, 223, 1)',
                    'rgba(54, 185, 204, 1)',
                    'rgba(246, 194, 62, 1)',
                    'rgba(231, 74, 59, 1)',
                    'rgba(28, 200, 138, 1)',
                    'rgba(133, 135, 150, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            }
        }
    });
    
    // Lead Stages Chart
    const leadStagesCtx = document.getElementById('leadStagesChart').getContext('2d');
    const leadStagesChart = new Chart(leadStagesCtx, {
        type: 'doughnut',
        data: {
            labels: ['New Lead', 'Engaged', 'Qualified', 'Opportunity', 'Scheduled', 'Contacted', 'Converted'],
            datasets: [{
                data: [246, 183, 127, 84, 42, 38, 22],
                backgroundColor: [
                    'rgba(78, 115, 223, 0.8)',
                    'rgba(54, 185, 204, 0.8)',
                    'rgba(246, 194, 62, 0.8)',
                    'rgba(231, 74, 59, 0.8)',
                    'rgba(28, 200, 138, 0.8)',
                    'rgba(133, 135, 150, 0.8)',
                    'rgba(90, 92, 105, 0.8)'
                ],
                borderColor: [
                    'rgba(78, 115, 223, 1)',
                    'rgba(54, 185, 204, 1)',
                    'rgba(246, 194, 62, 1)',
                    'rgba(231, 74, 59, 1)',
                    'rgba(28, 200, 138, 1)',
                    'rgba(133, 135, 150, 1)',
                    'rgba(90, 92, 105, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            },
            cutout: '70%'
        }
    });
    
    // SMS Performance Chart
    const smsPerformanceCtx = document.getElementById('smsPerformanceChart').getContext('2d');
    const smsPerformanceChart = new Chart(smsPerformanceCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Delivered Rate',
                    data: [95.2, 96.4, 95.8, 97.1, 96.9, 97.2, 97.5, 97.8, 98.0, 97.6, 97.9, 97.8],
                    borderColor: 'rgba(78, 115, 223, 1)',
                    backgroundColor: 'rgba(78, 115, 223, 0.1)',
                    pointBackgroundColor: 'rgba(78, 115, 223, 1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Open Rate',
                    data: [82.3, 83.8, 85.1, 84.7, 86.2, 85.9, 87.4, 88.1, 87.6, 88.9, 89.2, 89.3],
                    borderColor: 'rgba(54, 185, 204, 1)',
                    backgroundColor: 'rgba(54, 185, 204, 0.1)',
                    pointBackgroundColor: 'rgba(54, 185, 204, 1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Response Rate',
                    data: [24.6, 26.1, 27.8, 29.3, 28.7, 30.2, 31.8, 32.5, 33.1, 32.7, 33.6, 31.5],
                    borderColor: 'rgba(246, 194, 62, 1)',
                    backgroundColor: 'rgba(246, 194, 62, 0.1)',
                    pointBackgroundColor: 'rgba(246, 194, 62, 1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            }
        }
    });
    
    // Gauge Charts
    function createGaugeChart(canvasId, value, color) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: [
                        color,
                        'rgba(255, 255, 255, 0.1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '80%',
                responsive: true,
                maintainAspectRatio: false,
                circumference: 180,
                rotation: 270,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    }
    
    createGaugeChart('deliveredGauge', 97.8, 'rgba(78, 115, 223, 0.8)');
    createGaugeChart('openRateGauge', 89.3, 'rgba(54, 185, 204, 0.8)');
    createGaugeChart('responseRateGauge', 31.5, 'rgba(246, 194, 62, 0.8)');
}