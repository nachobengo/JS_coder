
const libros = [
    {titulo: "quiero verte otra vez", autor: "roberto fontanarrosa", precio: 2500, id: 1},
    {titulo: "aniquilacion", autor: "houellebecq michel", precio: 3950, id: 2},
    {titulo: "heartstopper", autor: "oseman alice", precio: 1899, id: 3},
    {titulo: "el hechizo del agua", autor: "florencia bonelli", precio: 3780, id: 3},
    {titulo: "una corona de huesos dorados", autor: "jennifer armentrout", precio: 3550, id: 4},
    {titulo: "el principito",  autor: "antoine de saint exupery", precio: 900, id: 5},
    {titulo: "destroza este diario", autor: "keri smith", precio: 2960, id: 6},
    {titulo:"violeta", autor: "isabel allende", precio: 4449, id: 7},
    {titulo:"heartstopper 3", autor: "oseman alice", precio: 1899, id: 8},
    {titulo:"los días de la revolucion", autor: "eduardo sacheri", precio: 3349, id: 9},
    {titulo:"los sietes maridos de evelyn hugo", autor: "taylor jenkiks reid", precio: 3190, id: 10},
    {titulo:"romper el circulo", autor: "colleen hoover", precio: 3220, id: 11},
    {titulo:"el caso alaska sanders", autor: "joel dickers", precio: 4999, id: 12},
    {titulo:"el poder del ahora", autor: "eckhart tolle", precio: 3549, id: 13},
    {titulo:"los seis de atlas", autor: "olive blake", precio: 2350, id: 14},
    {titulo:"quiero verte otra vez", autor: "roberto fontanarrosa", precio: 1600, id: 15},
    {titulo:"quiero verte otra vez", autor: "roberto fontanarrosa", precio: 900, id: 16},
]

const catalogoLibros = new CatalogoLibros(libros);


console.log("LIBROS ORIGINAL", catalogoLibros.libros)

cargarPreferencias();

listarLibros();
function listarLibros() {
    const nodoPrincipal = document.getElementById("main_list")
    nodoPrincipal.innerHTML="";
    catalogoLibros.libros.forEach((libro)=>{

        const divLibro = document.createElement("div")
        divLibro.innerHTML=`<div class="item_list">
                                <h3>${libro.titulo}</h3>
                                <div class='precio'> (${libro.autor})</div>
                                <div>$ ${libro.precio}</div>
                                <a id="${libro.id}" class="btn_principal">AGREGAR</a>
                            </div>`
        nodoPrincipal.appendChild(divLibro);

            divLibro.addEventListener("click", () => {
            alert("agregado con éxito");
            
        })

    })
}




function mostrarMenu() {
    // CREACION D BOTONES
    const buscaTituloBtn = document.createElement("button")
        buscaTituloBtn.setAttribute("type", "submit");
        buscaTituloBtn.setAttribute("value", "buscar");
        buscaTituloBtn.setAttribute("id", "buscarPorTitulo");
        buscaTituloBtn.classList.add("btn_principal");
        buscaTituloBtn.innerText="BUSCAR POR TITULO";

    const buscaAutorBtn = document.createElement("button")
        buscaAutorBtn.setAttribute("type", "submit");
        buscaAutorBtn.setAttribute("value", "buscar");
        buscaAutorBtn.setAttribute("id", "buscarPorAutor");
        buscaAutorBtn.classList.add("btn_principal");
        buscaAutorBtn.innerText="BUSCAR POR AUTOR";

    const buscaPrecioBtn = document.createElement("button")
        buscaPrecioBtn.setAttribute("type", "submit");
        buscaPrecioBtn.setAttribute("value", "buscar");
        buscaPrecioBtn.setAttribute("id", "buscarPorPrecio");
        buscaPrecioBtn.classList.add("btn_principal");
        buscaPrecioBtn.innerText="BUSCAR POR PRECIO";


    const busquedaPrincipal = document.getElementById("mainSearch");
        busquedaPrincipal.innerHTML="";
        busquedaPrincipal.appendChild(buscaTituloBtn);
        busquedaPrincipal.appendChild(buscaAutorBtn);
        busquedaPrincipal.appendChild(buscaPrecioBtn);

    
        
    const btnBusquedaPorTitulo = document.getElementById("buscarPorTitulo");
    btnBusquedaPorTitulo.addEventListener("click", () => {
        buscarTitulo();
    })


    const btnBusquedaPorAutor = document.getElementById("buscarPorAutor");
    btnBusquedaPorAutor.addEventListener("click", () => {
        buscarAutor();
    })

    const btnBusquedaPorPrecio = document.getElementById("buscarPorPrecio");
    btnBusquedaPorPrecio.addEventListener("click", () => {
        ingresarPrecio();
    })
}

function ordenarLista(){
    catalogoLibros.ordenarLista();
}
function ordenarPrecio(){
    catalogoLibros.ordenarPrecio();
}


function agregrarAlCarro() {
    const btnCart = document.getElementById("id");
        btnCart.classList.add("disabled") 
        alert("aca"); 
}

// let searchTitulo = document.getElementById("titulo");



////////////////////////////////////////////////////////////////////////////////