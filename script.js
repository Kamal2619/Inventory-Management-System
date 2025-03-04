function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let mainContent = document.querySelector(".main-content");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        mainContent.style.marginLeft = "20px";
    } else {
        sidebar.style.left = "0px";
        mainContent.style.marginLeft = "270px";
    }
}

// Sales Performance Chart (Dynamic Data Example)
const ctx = document.getElementById('salesChart').getContext('2d');
const salesData = [5000, 7000, 8000, 6500, 9000]; // Initial Data

const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Sales ($)',
            data: salesData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update chart data dynamically (Example)
function updateChartData() {
    salesChart.data.datasets[0].data = salesData.map(() => Math.floor(Math.random() * 10000) + 1000);
    salesChart.update();
}

// Auto-update every 10 seconds (Optional)
setInterval(updateChartData, 10000);

// Function to update stock status dynamically
function updateStockStatus() {
    const stockRows = document.querySelectorAll(".stock-levels tbody tr");

    stockRows.forEach(row => {
        const stockCount = parseInt(row.children[1].textContent);
        const statusCell = row.children[2];

        if (stockCount > 10) {
            statusCell.textContent = "In Stock";
            statusCell.className = "text-success";
        } else if (stockCount > 5) {
            statusCell.textContent = "Reorder Soon";
            statusCell.className = "text-warning";
        } else {
            statusCell.textContent = "Low";
            statusCell.className = "text-danger";
        }
    });
}

// Update stock status on page load
updateStockStatus();
