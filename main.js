const products = [
    { nombre: "NO Country for Old Men", descripcion: "Género:Suspenso/Wéstern -Año:2007 -Duración:2h 2m"  },
    { nombre: "Todo en todas partes al mismo tiempo", descripcion: "Género:Acción/Ciencia ficción -Año:2022 -Duración:2h 19m" },
    { nombre: "La lista de Schindler", descripcion: "Género:Bélico/Drama -Año:1993 -Duración:3h 15m" },
    { nombre: "Quiz Show", descripcion: "Género:Suspenso/Drama -Año:1994 -Duración:2h 13m" },
    { nombre: "Enemy at the Gate", descripcion: "Género:Bélico/Acción -Año:2001 -Duración:2h 11m" },
    { nombre: "El viaje de Chihiro", descripcion: "Género:Fantasía/Aventura -Año:2001 -Duración:2h 5m" },
    { nombre: "Hereditary", descripcion: "Género:Terror/Misterio -Año:2018 -Duración:2h 7m" },
    { nombre: "Cuando Acecha la Maldad", descripcion: "Género:Terror/Suspenso -Año:2023 -Duración:1h 40m" },
    { nombre: "La Bruja", descripcion: "Género:Terror/Misterio -Año:2015 -Duración:1h 32m" },
    { nombre: "The Exorcist", descripcion: "Género:Terror/Misterio -Año:1973 -Duración:2h 12m" },
    { nombre: "Bastardos Sin Gloria", descripcion: "Género:Bélico/Aventura -Año:2009 -Duración:2h 33m" },
    { nombre: "Django Sin Cadenas", descripcion: "Género:Wéstern/Acción -Año:2012 -Duración:2h 45m" },
    { nombre: "La Razón de Estar Contigo", descripcion: "Género:Infanti/Comedia -Año:2017 -Duración:2h" },
    { nombre: "El Niño con el Pijama de Rayas", descripcion: "Género:Bélico/Suspenso -Año:2008 -Duración:1h 34m" },
    { nombre: "Marly y Yo", descripcion: "Género:Infantil/Comedia -Año:2008 -Duración:1h 55m" }

];
   
   
function sortProducts(products) {
    return products.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
}
   
function searchProducts(products, searchName) {
    return products.filter((product) =>
        product.nombre.toLowerCase().includes(searchName.toLowerCase()));
}
   
function showAllProducts(products) {
    const divProduct = document.getElementById("productsContainer");
    divProduct.innerHTML = "";
 
    products.forEach(product => {
        const divP = document.createElement("div");
        divP.classList.add("product");
        divP.innerHTML = `<h3>${product.nombre}</h3> <p> ${product.descripcion} </p>`;
        divProduct.appendChild(divP);
    });
   
}
   
document.getElementById("search").addEventListener("input" , function () {
const nameSearched = this.value; //document.getElementById("search").value;
const  filterProducts = searchProducts(products,nameSearched);
showAllProducts(filterProducts);
   
});
   
function showSortProducts() {
    const sortProductsList =  sortProducts(products);
    showAllProducts(sortProductsList);
}
   
showAllProducts(products);

//--------------------------------------------------------------------------------------------------------
const stars = document.querySelectorAll(`.star`);

stars.forEach(function(star, index){
    star.addEventListener(`clink`, function() {
        for (let i=0; i<=index; i++) {
            star[i].classList.add(`checked`);
        }
        for (let i=index+1; i<stars.length; i++) {
            stars[i].classList.remove(`checked`);
        }
    })
})

