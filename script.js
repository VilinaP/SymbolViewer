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

// Get elements from DOM
const loginSection = document.getElementById('login-section');
const symbolsSection = document.getElementById('symbols-section');
const detailSection = document.getElementById('detail-section');
const connectBtn = document.getElementById('connect-btn');
const disconnectBtn = document.getElementById('disconnect-btn');
const backBtn = document.getElementById('back-btn');

// Connect button clicked
connectBtn.addEventListener('click', function () {
    // Hide login, show symbols
    loginSection.classList.add('hidden');
    symbolsSection.classList.remove('hidden');
    // Display symbols
    displaySymbols();
});

// Disconnect button clicked
disconnectBtn.addEventListener('click', function () {
    // Show login, hide symbols
    loginSection.classList.remove('hidden');
    symbolsSection.classList.add('hidden');
});

// Back button clicked
backBtn.addEventListener('click', function () {
    // Hide detail, show symbols
    detailSection.classList.add('hidden');
    symbolsSection.classList.remove('hidden');
});

// Display symbols
function displaySymbols() {
    const symbolsList = document.getElementById('symbols-list');
    const cardTemplate = document.querySelector('#card-template')
    symbolsList.innerHTML = '';
    mockSymbols.forEach(function (symbol) {

        // Clone the template and fill the card with data 
        const card = cardTemplate.content.querySelector('.symbol-card').cloneNode(true)

        card.querySelector('h2').textContent = symbol.name
        card.querySelector('.symbol-type').textContent = symbol.type
        card.querySelector('.symbol-description').textContent = symbol.description

        card.addEventListener('click', () => showDetail(symbol));

        symbolsList.appendChild(card);
    });
}

// Show symbol detail
function showDetail(symbol) {
    symbolsSection.classList.add('hidden');
    detailSection.classList.remove('hidden');

    const detailContainer = document.querySelector("#symbol-detail")

    // change the currect content of the div#symbol-detail 
    detailContainer.querySelector('h2').textContent = symbol.name
    detailContainer.querySelector('.symbol-type').textContent = symbol.type
    detailContainer.querySelector('.symbol-value').textContent = symbol.value
    detailContainer.querySelector('.symbol-description').textContent = symbol.description
}
