// Mock data and interactive functionality for Musk vs Trump Reputation Tracker

class ReputationTracker {
    constructor() {
        this.currentTimeRange = 7; // days
        this.charts = {};
        this.mockData = this.generateMockData();
        this.initializeCharts();
        this.updateBarometer();
        this.startDataSimulation();
    }

    generateMockData() {
        const days = 30;
        const data = {
            musk: [],
            trump: [],
            dates: []
        };

        const now = new Date();
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            data.dates.push(date);
            
            // Generate realistic reputation scores with trends
            const muskBase = 70 + Math.sin(i * 0.1) * 5;
            const trumpBase = 68 + Math.cos(i * 0.15) * 4;
            
            data.musk.push(Math.round(muskBase + Math.random() * 6 - 3));
            data.trump.push(Math.round(trumpBase + Math.random() * 6 - 3));
        }

        return data;
    }

    getCurrentRangeData() {
        const endIndex = this.mockData.dates.length;
        const startIndex = Math.max(0, endIndex - this.currentTimeRange);
        
        return {
            musk: this.mockData.musk.slice(startIndex),
            trump: this.mockData.trump.slice(startIndex),
            dates: this.mockData.dates.slice(startIndex)
        };
    }

    initializeCharts() {
        this.initializeTrendChart();
        this.initializeSentimentChart();
    }

    initializeTrendChart() {
        const ctx = document.getElementById('trendChart').getContext('2d');
        const data = this.getCurrentRangeData();
        
        // Check if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded, creating fallback visualization');
            this.createFallbackChart('trendChart', data);
            return;
        }
        
        this.charts.trend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.dates.map(date => date.toLocaleDateString()),
                datasets: [
                    {
                        label: 'Elon Musk',
                        data: data.musk,
                        borderColor: '#FF6B6B',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#FF6B6B',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 8
                    },
                    {
                        label: 'Donald Trump',
                        data: data.trump,
                        borderColor: '#4ECDC4',
                        backgroundColor: 'rgba(78, 205, 196, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#4ECDC4',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 8
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
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        cornerRadius: 8,
                        displayColors: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 50,
                        max: 90,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    initializeSentimentChart() {
        const ctx = document.getElementById('sentimentChart').getContext('2d');
        
        // Check if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded, creating fallback visualization');
            this.createFallbackChart('sentimentChart', {});
            return;
        }
        
        // Mock sentiment analysis data
        const sentimentData = {
            positive: [45, 38, 52, 41, 48, 35, 44],
            neutral: [35, 42, 28, 38, 32, 45, 36],
            negative: [20, 20, 20, 21, 20, 20, 20]
        };

        this.charts.sentiment = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Positive',
                        data: sentimentData.positive,
                        backgroundColor: 'rgba(75, 192, 192, 0.8)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Neutral',
                        data: sentimentData.neutral,
                        backgroundColor: 'rgba(255, 206, 86, 0.8)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Negative',
                        data: sentimentData.negative,
                        backgroundColor: 'rgba(255, 99, 132, 0.8)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
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
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        cornerRadius: 8
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        stacked: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }

    updateBarometer() {
        const data = this.getCurrentRangeData();
        const latestMusk = data.musk[data.musk.length - 1];
        const latestTrump = data.trump[data.trump.length - 1];
        const difference = latestMusk - latestTrump;

        // Update barometer display
        document.getElementById('barometerScore').textContent = difference > 0 ? `+${difference}` : difference.toString();
        
        const needle = document.getElementById('needle');
        // Convert difference to angle (-45 to +45 degrees)
        const angle = Math.max(-45, Math.min(45, difference * 5));
        needle.style.transform = `rotate(${angle}deg)`;

        // Update score cards
        document.getElementById('muskScore').textContent = latestMusk;
        document.getElementById('trumpScore').textContent = latestTrump;

        // Calculate percentage changes (mock)
        const muskChange = ((Math.random() - 0.5) * 8).toFixed(1);
        const trumpChange = ((Math.random() - 0.5) * 8).toFixed(1);

        const muskChangeEl = document.getElementById('muskChange');
        const trumpChangeEl = document.getElementById('trumpChange');

        muskChangeEl.textContent = `${muskChange > 0 ? '+' : ''}${muskChange}%`;
        trumpChangeEl.textContent = `${trumpChange > 0 ? '+' : ''}${trumpChange}%`;

        muskChangeEl.parentElement.className = `score-change ${muskChange > 0 ? 'trend-up' : 'trend-down'}`;
        trumpChangeEl.parentElement.className = `score-change ${trumpChange > 0 ? 'trend-up' : 'trend-down'}`;
    }

    updateStatistics() {
        // Generate realistic statistics
        const stats = {
            totalPosts: Math.floor(Math.random() * 1000) + 2000,
            avgSentiment: ((Math.random() - 0.5) * 0.8).toFixed(2),
            engagement: Math.floor(Math.random() * 50000) + 70000,
            mentions: Math.floor(Math.random() * 500) + 1500
        };

        document.getElementById('totalPosts').textContent = this.formatNumber(stats.totalPosts);
        document.getElementById('avgSentiment').textContent = stats.avgSentiment > 0 ? `+${stats.avgSentiment}` : stats.avgSentiment;
        document.getElementById('engagement').textContent = this.formatNumber(stats.engagement);
        document.getElementById('mentions').textContent = this.formatNumber(stats.mentions);
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    startDataSimulation() {
        // Update data every 10 seconds to simulate live updates
        setInterval(() => {
            this.simulateDataUpdate();
        }, 10000);

        // Update statistics more frequently
        setInterval(() => {
            this.updateStatistics();
        }, 5000);
    }

    simulateDataUpdate() {
        const data = this.mockData;
        const lastIndex = data.musk.length - 1;
        
        // Add small random changes to the latest values
        data.musk[lastIndex] = Math.max(50, Math.min(90, 
            data.musk[lastIndex] + (Math.random() - 0.5) * 2));
        data.trump[lastIndex] = Math.max(50, Math.min(90, 
            data.trump[lastIndex] + (Math.random() - 0.5) * 2));

        this.updateBarometer();
        
        // Update trend chart data
        const currentData = this.getCurrentRangeData();
        this.charts.trend.data.datasets[0].data = currentData.musk;
        this.charts.trend.data.datasets[1].data = currentData.trump;
        this.charts.trend.update('none');
    }
}

// Global functions for button interactions
function refreshData() {
    showLoading(true);
    
    setTimeout(() => {
        // Simulate data refresh
        window.tracker.mockData = window.tracker.generateMockData();
        window.tracker.updateBarometer();
        window.tracker.updateStatistics();
        
        // Update charts
        const currentData = window.tracker.getCurrentRangeData();
        window.tracker.charts.trend.data.labels = currentData.dates.map(date => date.toLocaleDateString());
        window.tracker.charts.trend.data.datasets[0].data = currentData.musk;
        window.tracker.charts.trend.data.datasets[1].data = currentData.trump;
        window.tracker.charts.trend.update();
        
        showLoading(false);
    }, 2000);
}

function toggleTimeRange() {
    const button = document.getElementById('timeRangeBtn');
    const timeRanges = [7, 14, 30];
    const currentIndex = timeRanges.indexOf(window.tracker.currentTimeRange);
    const nextIndex = (currentIndex + 1) % timeRanges.length;
    
    window.tracker.currentTimeRange = timeRanges[nextIndex];
    button.textContent = `${timeRanges[nextIndex]} Days`;
    
    // Update trend chart
    const currentData = window.tracker.getCurrentRangeData();
    window.tracker.charts.trend.data.labels = currentData.dates.map(date => date.toLocaleDateString());
    window.tracker.charts.trend.data.datasets[0].data = currentData.musk;
    window.tracker.charts.trend.data.datasets[1].data = currentData.trump;
    window.tracker.charts.trend.update();
}

function exportData() {
    const data = window.tracker.getCurrentRangeData();
    const csvData = 'Date,Musk Score,Trump Score\n' + 
        data.dates.map((date, index) => 
            `${date.toLocaleDateString()},${data.musk[index]},${data.trump[index]}`
        ).join('\n');
    
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `musk-vs-trump-reputation-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    loading.style.display = show ? 'block' : 'none';
}

// Initialize the tracker when the page loads
document.addEventListener('DOMContentLoaded', function() {
    window.tracker = new ReputationTracker();
    
    // Add some initial animations
    setTimeout(() => {
        document.querySelectorAll('.card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.animation = `fadeInUp 0.6s ease forwards`;
            }, index * 100);
        });
    }, 100);
});

// Add CSS animation for cards
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);