import {product} from './products.js'
import { user } from './products.js';

const Hero = product[2];

const productHero = document.querySelector('.img-holder img');
if(productHero) productHero.src = Hero.img;

const container = document.getElementById("productgrid");
const bestSelling = document.getElementById("best-selling");
function getRandomSlice(arr, count) {
    return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

if (container) {
container.innerHTML = getRandomSlice(product,4).map(product => `
    <a href="product-slide.html?id=${product.id}" class="grid-anchor">
                <div class="card-container">
               
                    <div class="card">
                        <img src="${product.img}" alt="" >
                        <h2>${product.name}</h2>
                        <p> $${product.price}</p>
                        <p>${product.category}</p>  
                    </div>               
                </div>
    </a>             
                
    `).join("");

}


if (bestSelling) {
    bestSelling.innerHTML = getRandomSlice(product).map ( product =>
        `
    <a href="product-slide.html?id=${product.id}" class="grid-anchor">
                <div class="card-container">
               
                    <div class="card">
                        <img src="${product.img}" alt="" >
                        <h2>${product.name}</h2>
                        <p> $${product.price}</p>
                        <p>${product.category}</p>  
                    </div>               
                </div>
    </a>             
                
    `
    ).join("")
}

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const selectedProduct = product.find(
    item => item.id === id
);

const productimage = document.getElementById("product-image");
const productname = document.getElementById("product-name");
const productprice = document.getElementById("product-price");
const productcategory = document.getElementById("product-category");

if (selectedProduct && productimage && productname && productprice && productcategory) {
        productimage.src = selectedProduct.img;
        productimage.alt = selectedProduct.name;
        productcategory.textContent = selectedProduct.category;
        productname.textContent = selectedProduct.name;
        productprice.textContent = `₱${selectedProduct.price}`;
}


const productCategories = document.getElementById("product-categories");


if (productCategories)
    {
         const categories = product.filter((item, index) => 
        product.findIndex(p => p.category === item.category) === index
    );
        productCategories.innerHTML = getRandomSlice(categories, 8).map(item => `
            <a href="best-selling.html" class="grid-anchor">
                <div class="card-container">
                    <div class="card">
                        <img src="${item.img}" height="200px" width="200px">
                        <h2>${item.category} </h2>
                    </div>
                </div>
            </a>
            `).join("");
    } 




 
function login() {

   
    
    const usersname = document.getElementById("username").value;
    const userspass = document.getElementById("password").value;
    const useraccount = user[usersname];
    if (useraccount && userspass == useraccount.password){
        window.location.href = "index.html";
        alert("Welcome " +user[names].value);
    }

    else {
        document.getElementById("inc-cre").innerText = "Incorrect Credentials"
    }
};

window.login = login;

const searches = document.getElementById("search-input");
const holder = document.getElementById("mains");


function render(items) {
    holder.innerHTML = getRandomSlice(items).map(p =>`<a href="product-slide.html?id=${p.id}" class="grid-anchor">
                <div class="card-container">
               
                    <div class="card">
                        <img src="${p.img}" alt="" >
                        <h2>${p.name}</h2>
                        <p> $${p.price}</p>
                        <p>${p.category}</p>  
                    </div>               
                </div>
    </a> `).join("");}


searches.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = product.filter(p => p.name.toLowerCase().includes(query))


render(filtered);

});


render(product)
