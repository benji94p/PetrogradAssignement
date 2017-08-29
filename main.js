
let productlist_link = "http://kea-alt-del.dk/t5/api/productlist";
let image_path = "http://kea-alt-del.dk/t5/site/imgs/small/";
let section = document.querySelector('section');
let template = document.querySelector('.product-template');

function loadData(link){
    fetch(link).then(e=>e.json()).then(data=>show(data));
}

function show(data){
    data.forEach(element => {
        let clone = template.cloneNode(true).content;
        clone.querySelector('.product-small-img').src = image_path + element.image + "-sm.jpg";
        clone.querySelector('.name').textContent = element.name;
        clone.querySelector('.category').textContent = element.category;
        clone.querySelector('.price span').textContent = element.price;
        clone.querySelector('.list-product').classList.add(element.category)
        section.appendChild(clone);
    });
}

loadData(productlist_link);

