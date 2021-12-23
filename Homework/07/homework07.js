//להוסיף ת.ז
let product = {
    pname: "",
    price: "",
    quantity_of_purchases: "",
}

function Product(pname, price, quantity_of_purchases) {
    this.pname = pname;
    this.price = price;
    this.quantity_of_purchases = quantity_of_purchases;
}

function addProduct(product, price, quantity_of_purchases) {
    return new Product(product, price, quantity_of_purchases)
}
let arr = []
arr.push(addProduct('Milk', '5', ""))
arr.push(addProduct('Bamba', '2.4', ""))
arr.push(addProduct('Cheese', '3', ""))
arr.push(addProduct('Meat', '60', ""))
arr.push(addProduct('Chicken', '38.2', ""))

let cart_arr = [];

for (let pr of arr) {
    let pProduct = document.querySelector('.addProduct')
    pProduct.innerHTML += `<li id='${pr.pname}'> ${pr.pname} | ${pr.price}$ </li>`
    let nProduct = document.querySelector('.cartProduct');
    nProduct.innerHTML += `<div id='cart-${pr.pname}'></div> `;

}
let price = 0;

function addToCart(pname) {
    arr.forEach(v => {
        if (v.pname == pname) {
            v.quantity_of_purchases++;
            let nProduct = document.querySelector(`#cart-${v.pname}`);
            nProduct.innerHTML = `<li id='cart-${v.pname}'>${v.quantity_of_purchases}-${v.pname}</li> `;
            arr.push(`{"${v.pname}":"${v.quantity_of_purchases}"}`)

            price += Number(v.price);
            let d = document.querySelector('.price')
            d.innerHTML = `${price.toFixed(3)}$`

            let js = JSON.stringify(`{"pname": "${v.pname}",
            "price": "${v.price}", quantity_of_purchases: "${v.quantity_of_purchases}"}`)
            cart_arr.push
            localStorage.setItem(js);
        }
    });

}

function removeFromCart(pname) {
    arr.forEach(v => {
        if (v.pname == pname) {
            v.quantity_of_purchases--;
            let nProduct = document.querySelector(`#cart-${v.pname}`);
            if (v.quantity_of_purchases > 0) {
                nProduct.innerHTML = `<li id='cart-${v.pname}'>${v.quantity_of_purchases}-${v.pname}</li> `;
            } else {
                nProduct.innerHTML = ``;
            }
            price -= Number(v.price);
            let d = document.querySelector('.price')
            d.innerHTML = `${price.toFixed(3)}$`
        }
    });

}
document.getElementById('Milk').onclick = function() {
    addToCart('Milk');
}
document.getElementById('Bamba').onclick = function() {
    addToCart('Bamba');
}
document.getElementById('Cheese').onclick = function() {
    addToCart('Cheese');
}
document.getElementById('Meat').onclick = function() {
    addToCart('Meat');
}
document.getElementById('Chicken').onclick = function() {
    addToCart('Chicken');
}


document.getElementById('cart-Milk').ondblclick = function() {
    removeFromCart('Milk');
}
document.getElementById('cart-Bamba').ondblclick = function() {
    removeFromCart('Bamba');
}
document.getElementById('cart-Cheese').ondblclick = function() {
    removeFromCart('Cheese');
}
document.getElementById('cart-Meat').ondblclick = function() {
    removeFromCart('Meat');
}
document.getElementById('cart-Chicken').ondblclick = function() {
    removeFromCart('Chicken');
}












// let btn = document.createElement('input')
// btn.setAttribute('type', 'button')
// btn.setAttribute('id', 'btn3')
// btn.setAttribute('value', 'bla')
// document.querySelector('div').append(btn)
// let d = document.querySelector('div')
// d.innerHTML += '<input type...'


//    // Add Additional Items
//    var aside = document.querySelector('aside'),
//        div = document.createElement('div'),
//        text = document.createElement('input'),
//        button = document.createElement('input')
//    text.type = 'text'
//    text.id = 'input'
//    button.type = 'button'
//    button.setAttribute('data-button', 'outline')
//    button.value = '➕'
//    button.setAttribute('onclick', 'addItem(input.value)')
//    div.appendChild(text)
//    div.appendChild(button)
//    aside.appendChild(div)

//    function addItem(text) {
//        var div = document.querySelector('div'),
//            input = document.getElementById('input')
//        if (text !== '') {
//            input.value = ''
//            var label = document.createElement('label'),
//                input = document.createElement('input'),
//                span = document.createElement('span')
//            input.type = 'checkbox'
//            span.innerHTML = text
//            label.appendChild(input)
//            label.appendChild(span)
//            div.parentNode.insertBefore(label, div)
//        }
//    }