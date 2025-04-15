
// Simulated haptic feedback
document.querySelectorAll('.haptic-feedback').forEach(item => {
    item.addEventListener('click', function() {
        if ('vibrate' in navigator) {
            navigator.vibrate(20);
        }
    });
});



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
initCharts();