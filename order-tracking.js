document.getElementById('tracking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const orderNumber = document.getElementById('order-number').value;
    const trackingInfo = document.getElementById('tracking-info');
    
    const mockResponse = {
        "12345": "Your order is being prepared.",
        "67890": "Your order has been shipped and is on the way.",
        "54321": "Your order has been delivered."
    };
    
    trackingInfo.innerHTML = mockResponse[orderNumber] || "Order number not found. Please check and try again.";
});
