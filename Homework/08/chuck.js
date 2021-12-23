let c_joke = [];
let $categories = document.querySelector(".categories");
let $listJokes = document.querySelector(".search_results")
let $srch = document.querySelector(".srch")
let $btn_srch = document.querySelector(".btn_srch")

function categories() {
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(response => response.text())
        .then(data => JSON.parse(data))
        .then(txt_data => {
            for (let i = 0; i < txt_data.length; i++) {
                c_joke.push(txt_data[i])
                $categories.innerHTML += `<button class="cat" id='${i}'>${txt_data[i]}</button> `;
            }
            let elementsArray = document.querySelectorAll("button.cat");
            elementsArray.forEach(elem => {
                elem.addEventListener("click", categoriesListener)
            });
        });
}

function categoriesListener(e) {
    let val = e.target.textContent;
    fetch(`https://api.chucknorris.io/jokes/random?category=${val}`)
        .then(response => response.text())
        .then(data => JSON.parse(data))
        .then(txt_data => {
            $listJokes.innerHTML = `<p class="l_jokes">${txt_data.value}</p> `;
        });
}

function free_search(src) {
    fetch(`https://api.chucknorris.io/jokes/search?query=${src}`)
        .then(response => response.text())
        .then(data => JSON.parse(data))
        .then(txt_data => {
            txt_data.result.forEach(j => {
                $listJokes.innerHTML += `<p class="l_jokes">${j.value}</p> `;
            });
        });
}

function randomJoke() {
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.text())
        .then(data => JSON.parse(data))
        .then(txt_data => {
            $listJokes.innerHTML = `<p class="rand_jokes">${txt_data.value}</p> `;
        });
}

$btn_srch.addEventListener("click", randomJoke)

$srch.addEventListener('input', function() {
    if (this.value.length > 2) {
        $listJokes.innerHTML = `<p class="l_jokes"></p> `;
        free_search(this.value);
    }
});
categories();