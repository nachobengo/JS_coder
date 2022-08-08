const btnSearchPrimary = document.getElementById("searchPrimary");
btnSearchPrimary.addEventListener("click", () => {
    mostrarMenu();
})

const btnOrderAZ = document.getElementById("order");
btnOrderAZ.addEventListener("click", () => {
    ordenarLista();
})

const btnOrderPrice = document.getElementById("price");
btnOrderPrice.addEventListener("click", () => {
    ordenarPrecio();
})



