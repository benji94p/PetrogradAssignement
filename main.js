
let productlist_link = "http://kea-alt-del.dk/t5/api/productlist";
let categories_link = "http://kea-alt-del.dk/t5/api/categories";
let image_path = "http://kea-alt-del.dk/t5/site/imgs/small/";
let catTemplate = document.querySelector('.catTemplate').content;
let productTemplate = document.querySelector(".productTemplate").content;
let cloneDiv = document.querySelector('.cloned');

function getCategories(catlink){
    console.log(catlink);
    fetch(catlink)
        .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        data.forEach(createCategory);
        //Now we can show products

    })
}

function createCategory(cat){
    console.log(cat);
    let cloneCategorie = catTemplate.cloneNode(true);
    cloneCategorie.querySelector('h1').textContent = cat;
    cloneCategorie.querySelector(".category").id = cat;
    cloneDiv.querySelector(".section1").appendChild(cloneCategorie);
}
getCategories(categories_link);

function getProduct(productlink){
    console.log(productlink);
    fetch(productlink)
        .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        data.forEach(createProduct);
        //Now we can show products

    })
}

function createProduct (prod) {
    console.log(prod);
    let cloneProduct = productTemplate.cloneNode(true);

    //GENERIC IMPLEMENT
    cloneProduct.querySelector('h1').textContent = prod.name;
    cloneProduct.querySelector('.shortDescription').textContent = prod.shortdescription;

    cloneProduct.querySelector('.price').textContent = prod.price + " kr";

    //PERSONALISE

      //ALCOHOL

    if (prod.alcohol > 0) {
        cloneProduct.querySelector(".alcohol").style.display = "";
        cloneProduct.querySelector('.alcohol').textContent = "Alcohol: "+ prod.alcohol+ "%";

    }

      //SOLD OUT STATUS

    if (prod.soldout == true) {
        cloneProduct.querySelector(".soldOut").style.display ="";
        cloneProduct.querySelector('.alcohol').textContent = "Sold out ! ";

    }

    //DISCOUNT PRICE

    //VEGETERIAN STATUS
    cloneDiv.querySelector(".section2").appendChild(cloneProduct);
}
getProduct(productlist_link);

