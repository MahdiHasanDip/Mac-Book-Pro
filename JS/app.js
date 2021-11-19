// memory starts 
// 8gb 
document.getElementById('memory1').addEventListener('click', function () {
    const memoryPriceText = document.getElementById('memory-price');
    memoryPriceText.innerText = 0;
    const bestPriceText = document.getElementById('best-price');

    const storagePriceText = document.getElementById('storage-price');
    const deliveryCostText = document.getElementById('delivery-cost');


    const total = Number(memoryPriceText.innerText) + Number(storagePriceText.innerText) + Number(bestPriceText.innerText) + Number(deliveryCostText.innerText);
    const totalText = document.getElementById('total-price');
    totalText.innerText = total;


    // Display grand total 
    let grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = total;
})

// 16gb 
document.getElementById('memory2').addEventListener('click', function () {
    const memoryPriceText = document.getElementById('memory-price');
    memoryPriceText.innerText = 180;
    const bestPriceText = document.getElementById('best-price');
    const storagePriceText = document.getElementById('storage-price');
    const deliveryCostText = document.getElementById('delivery-cost');







    const total = Number(memoryPriceText.innerText) + Number(bestPriceText.innerText) + Number(storagePriceText.innerText) + Number(deliveryCostText.innerText);
    const totalText = document.getElementById('total-price');

    totalText.innerText = total;

    // Display grand total 
    let grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = total;

})

// Storage starts 
// 256gb 
document.getElementById('storage-1').addEventListener('click', function () {
    const storagePriceText = document.getElementById('storage-price');
    storagePriceText.innerText = 0;
    const bestPriceText = document.getElementById('best-price');
    const memoryPriceText2 = document.getElementById('memory-price');
    const deliveryCostText = document.getElementById('delivery-cost');



    const total = Number(storagePriceText.innerText) + Number(bestPriceText.innerText) + Number(memoryPriceText2.innerText) + Number(deliveryCostText.innerText);

    const totalText = document.getElementById('total-price');
    totalText.innerText = total;



    // Display grand total 
    let grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = total;

})

// 512gb 
document.getElementById('storage-2').addEventListener('click', function () {
    const storagePriceText = document.getElementById('storage-price');
    storagePriceText.innerText = 100;
    const bestPriceText = document.getElementById('best-price');
    const memoryPriceText2 = document.getElementById('memory-price');
    const deliveryCostText = document.getElementById('delivery-cost');


    const total = Number(storagePriceText.innerText) + Number(bestPriceText.innerText) + Number(memoryPriceText2.innerText) + Number(deliveryCostText.innerText);
    console.log(total)
    const totalText = document.getElementById('total-price');
    totalText.innerText = total;




    // Display grand total 
    let grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = total;
})


// 1tb
document.getElementById('storage-3').addEventListener('click', function () {
    const storagePriceText = document.getElementById('storage-price');
    storagePriceText.innerText = 180;
    const bestPriceText = document.getElementById('best-price');
    const memoryPriceText2 = document.getElementById('memory-price');
    const deliveryCostText = document.getElementById('delivery-cost');

    const total = Number(storagePriceText.innerText) + Number(bestPriceText.innerText) + Number(memoryPriceText2.innerText) + Number(deliveryCostText.innerText);
    console.log(total)
    const totalText = document.getElementById('total-price');
    totalText.innerText = total;


    // Display grand total 
    let grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = total;
})
// shipping cost 

// free 
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCostText = document.getElementById('delivery-cost');
    deliveryCostText.innerText = 0;
    const bestPriceText = document.getElementById('best-price');
    const memoryPriceText2 = document.getElementById('memory-price');
    const storagePriceText = document.getElementById('storage-price');
    const totaldelivery = Number(storagePriceText.innerText) + Number(bestPriceText.innerText) + Number(memoryPriceText2.innerText) + Number(deliveryCostText.innerText);

    const totalText = document.getElementById('total-price');
    totalText.innerText = totaldelivery;

    // Display grand total 
    let grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = totaldelivery;
})

// express 
document.getElementById('express-delivery').addEventListener('click', function () {
    const deliveryCostText = document.getElementById('delivery-cost');
    deliveryCostText.innerText = 20;
    const bestPriceText = document.getElementById('best-price');
    const memoryPriceText2 = document.getElementById('memory-price');
    const storagePriceText = document.getElementById('storage-price');

    const total = Number(storagePriceText.innerText) + Number(bestPriceText.innerText) + Number(memoryPriceText2.innerText) + Number(deliveryCostText.innerText);
    console.log(total)
    const totalText = document.getElementById('total-price');
    totalText.innerText = total;

    // Display grand total 
    let grandTotal = document.getElementById('grand-total-price');
    grandTotal.innerText = total;
})

// Promo code

document.getElementById("promo-btn").addEventListener('click', function () {


    const input = document.getElementById('promo-input')
    const inputValue = input.value;


    // Discount count  
    if (inputValue == "stevekaku") {
        let grandTotal = document.getElementById('grand-total-price')
        let grandTotalNumber = Number(grandTotal.innerText);
        const grandTotalDiscount = grandTotalNumber * 20 / 100;
        const grandTotalAfterDiscount = grandTotalNumber - grandTotalDiscount;
        grandTotal.innerText = grandTotalAfterDiscount

        document.getElementById("promo-btn").disabled = true;

    }

})



// end 