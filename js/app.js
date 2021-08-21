//---------------Memory Pricing---------------
function memoryPricing(size){
    const memoryCost = document.getElementById('memory-cost');
    if(size == '8gb'){
        memoryCost.innerText = 0;
    }
    else if(size == '16gb'){
        memoryCost.innerText = 180;
    }
    totalCalculation();
}
//Memory click handling
document.getElementById('memory-8gb').addEventListener('click', function(){
    memoryPricing('8gb');
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    memoryPricing('16gb');
})

//---------Storage Pricing-------------- 
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
        totalCalculation()
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

//-------------Delivery cost-------------------
function deliveryCostCalculting(cost){
    const deliveryCost = document.getElementById('delivery-cost');
    if(cost == 'free'){
        deliveryCost.innerText = 0;
    }
    else{
        deliveryCost.innerText = 20;
    }
    totalCalculation()
}
//Delivery click handling
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCostCalculting('free');
});
document.getElementById('delivery').addEventListener('click', function(){
    deliveryCostCalculting('cost');
});


//----------------Total price counting------------------
function totalCalculation(){
    const totalPriceText = document.getElementById('total-price');
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    totalPriceText.innerText = 1299 + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    //Total calculating without promo code
    let totalWithoutCode = document.getElementById('total-with-code');
    totalWithoutCode.innerText = totalPriceText.innerText;
}


//----------------checking promo code validation------------------
function checkPromoCode(){
    let totalPriceText = document.getElementById('total-price').innerText;
    const preTotal = document.getElementById('total-with-code');
    const promoError = document.getElementById('promo-error');
    let preTotalValue = totalPriceText;
    const codeInput = document.getElementById('code-input');
    const codeValue = codeInput.value;
    if(codeValue == 'stevekaku'){
        preTotal.innerText = parseInt(preTotalValue) - (preTotalValue/5); 
        promoError.style.display = 'none';
        preTotalValue = totalPriceText;
        console.log(preTotalValue);
    }
    else{
        promoError.style.display = 'block';
    }
    codeInput.value = "";
}