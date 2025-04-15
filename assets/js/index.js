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