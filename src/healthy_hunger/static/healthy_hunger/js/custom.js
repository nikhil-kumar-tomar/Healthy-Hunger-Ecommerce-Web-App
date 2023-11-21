
function incr_or_decr(button, change, id, price) {
    
    const quant = document.getElementById(id);
    const total_price = document.getElementById("total_value");
    const total_price_hidden = document.getElementById("total_value_hidden")
    let quantity = parseInt(quant.innerText);

    // prod_Price change
    if (change == '1'){
        const prices = document.getElementById(`price_${id}`);
        prices.innerText = parseFloat(prices.innerText) + price;
        total_price.value = parseFloat(total_price.value) + price;
    }
    else if (change == -1 & quantity > 1){
        const prices = document.getElementById(`price_${id}`);
        prices.innerText = parseFloat(prices.innerText) - price;
        total_price.value = parseFloat(total_price.value) - price;
    }
    
    total_price_hidden.value = total_price.value;

    // Below is for quaniisty only 
    quantity += change;
    if (quantity < 1) {
        quantity = 1;
    }
    quant.innerText = quantity;
}

function success_popup(type) {
    var pops = document.getElementById('popup');
    pops.style.display = 'block';
    if (type === "cart")
    {
        console.log(1);
        pops.style.backgroundColor = 'rgb(255, 123, 0)';
        pops.textContent = "Successfully added to the Cart";
    }
    else if (type === "order")
    {
        pops.style.backgroundColor = 'rgb(12, 177, 12)';
        pops.textContent = "Order Placed Successfully";
    }

    setTimeout(() => {
        pops.style.display = 'none';
    }, 3000);
}
