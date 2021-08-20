//Memory Pricing
function memoryPricing(size){
    const memoryCost = document.getElementById('memory-cost');
    if(size == '8gb'){
        memoryCost.innerText = 0;
    }
    else if(size == '16gb'){
        memoryCost.innerText = 180;
    }
    total();
}
//Memory click handling
document.getElementById('memory-8gb').addEventListener('click', function(){
    memoryPricing('8gb');
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    memoryPricing('16gb');
})

//Storage Pricing 
function storagePricing(size){
        const storageCost = document.getElementById('storage-cost');
        if(size == '256gb'){
            storageCost.innerText = 0;
        }
        else if(size == '512gb'){
            storageCost.innerText = 100;
        }
        else if(size == '1tb'){
            storageCost.innerText = 180;
        }
        total()
}
//Storage click handling
document.getElementById('storage-256gb').addEventListener('click', function(){
    storagePricing('256gb');
})
document.getElementById('storage-512gb').addEventListener('click', function(){
    storagePricing('512gb');
})
document.getElementById('storage-1tb').addEventListener('click', function(){
    storagePricing('1tb');
})

//Delivery cost
function deliveryCost(id){
    const cost = document.getElementById('delivery-cost');
    if(id == 'free-delivery'){
        cost.innerText = 0;
    }
    else{
        cost.innerText = 20;
    }
    total()
}
//Delivery click handling
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCost('free-delivery');
});
document.getElementById('delivery').addEventListener('click', function(){
    deliveryCost('delivery');
});


//Total price counting
function total(){
    const totalPriceText = document.getElementById('total-price');
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    totalPriceText.innerText = 1299 + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    //Total calculating with promo code
    let totalWithcode = document.getElementById('total-with-code');
    totalWithcode.innerText = totalPriceText.innerText;
    const codeInput = document.getElementById('code-input');
    const codeValue = codeInput.value;
    if(codeValue == 'stevekaku'){
        totalWithcode.innerText = (totalPriceText.innerText) - (totalPriceText.innerText/5); 
    }
    codeInput.value = "";
}