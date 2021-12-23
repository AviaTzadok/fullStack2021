let items = [{
        id: 1,
        name: "milk",
        price: 12,
        count: 0

    },
    {
        id: 2,
        name: "banana",
        price: 3,
        count: 0

    },
    {
        id: 3,
        name: "bamba",
        price: 5,
        count: 0

    }, {
        id: 4,
        name: "Cheese",
        price: 3,
        count: 0

    }, {
        id: 5,
        name: "Meat",
        price: 60,
        count: 0

    }, {
        id: 6,
        name: "Chicken",
        price: 38.2,
        count: 0

    }
]

let cart = []

let $items = document.getElementById('items')
let $cart = document.getElementById('cart')

$items.addEventListener('click', clickItem)

$cart.addEventListener('dblclick', clickCart)


getFromDB()

for (let item of items) {
    addToItems(item)
}

// localStorage.clear();



function clickItem(e) {
    let id = Number(e.target.id.slice(5))
    let item = items.find(i => i.id == id)
        // debugger;
    let itemExist = cart.find(c => c.id == item.id)
    if (itemExist) {
        cart.forEach(c => {
            if (c == itemExist) {
                c.count += 1;
                changeItemCount(c);
                return;
            }
        })

    } else {
        item.count = 1;
        cart.push(item)
        addToCart(item)
    }

    saveToDB()
}

function saveToDB() {
    localStorage.cart = JSON.stringify(cart);
}

function getFromDB() {
    if (localStorage.cart) {
        let c = localStorage.cart
        let cart_parsed = JSON.parse(c)
        cart = cart_parsed;
        cart.forEach(c => addToCart(c))
    }
}

function clickCart(e) {
    // debugger;
    let id = Number(e.target.id.slice(5))
    let item = cart.find(i => i.id == id)
    removeFromCart(item)
}

function addToItems(item) {
    $items.innerHTML += `<li id=item_${item.id}> ${item.name} | ${item.price}$ </li>`
}


function addToCart(item) {
    $cart.innerHTML += `<li id=cart_${item.id}>${item.name}</li>`

}

function changeItemCount(item) {
    document.querySelector(`#cart_${item.id}`).innerText = `${item.count}-${item.name}`;
}

function removeFromCart(item) {
    if (item.count > 1) {
        item.count--;
        document.querySelector(`#cart_${item.id}`).innerText = `${item.count}-${item.name}`;

    } else {
        document.querySelector(`#cart_${item.id}`).innerText = '';

    }
    localStorage.cart = JSON.stringify(cart);
}