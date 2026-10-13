// Mock data
const mockSymbols = [
    {
        name: "AnalogDeadband",
        type: "INS",
        description: "Analog input deadband threshold",
        value: 42
    },
    {
        name: "BinaryDebounce",
        type: "INT",
        description: "Binary input debounce time",
        value: 150
    },
    {
        name: "CommTimeout",
        type: "INT",
        description: "Communication timeout value",
        value: 5000
    },
    {
        name: "CpuLoad",
        type: "INT",
        description: "Current CPU load percentage",
        value: 67
    },
    {
        name: "MemoryUsage",
        type: "INT",
        description: "System memory usage",
        value: 2048
    },
    {
        name: "NetworkStatus",
        type: "BOL",
        description: "Network connection status",
        value: 1
    },
    {
        name: "ErrorCount",
        type: "INT",
        description: "Total error count",
        value: 0
    },
    {
        name: "SystemMode",
        type: "INT",
        description: "Current system operation mode",
        value: 2
    }
];

// Get elements
const loginSection = document.getElementById('login-section');
const symbolsSection = document.getElementById('symbols-section');
const detailSection = document.getElementById('detail-section');
const connectBtn = document.getElementById('connect-btn');
const disconnectBtn = document.getElementById('disconnect-btn');
const backBtn = document.getElementById('back-btn');

// Connect button click
connectBtn.addEventListener('click', function () {
    // Hide login, show symbols
    loginSection.style.display = 'none';
    symbolsSection.style.display = 'block';
    // Display symbols
    displaySymbols();
});

// Disconnect button click
disconnectBtn.addEventListener('click', function () {
    // Show login, hide symbols
    loginSection.style.display = 'block';
    symbolsSection.style.display = 'none';
});

// Back button click
backBtn.addEventListener('click', function () {
    // Hide detail, show symbols
    detailSection.style.display = 'none';
    symbolsSection.style.display = 'block';
});

// Display symbols
function displaySymbols() {
    const symbolsList = document.getElementById('symbols-list');
    symbolsList.innerHTML = '';
    mockSymbols.forEach(function (symbol) {
        const card = document.createElement('div');
        card.className = 'symbol-card';
        card.innerHTML = `<h3>${symbol.name} <span>[${symbol.type}]</span></h3><p>${symbol.description}</p>`;
        card.onclick = function () {
            showDetail(symbol);
        };
        symbolsList.appendChild(card);
    });
}

// Show symbol detail
function showDetail(symbol) {
    symbolsSection.style.display = 'none';
    detailSection.style.display = 'block';
    const detailDiv = document.getElementById('symbol-detail');
    detailDiv.innerHTML = `<h2>${symbol.name}</h2><p><strong>Type:</strong> ${symbol.type}</p><p><strong>Value:</strong> ${symbol.value}</p><p><strong>Description:</strong> ${symbol.description}</p>`;
}
