class CatalogoLibros{
    constructor(libros) {
        this.libros = libros;
    }

    darCantidad() {
        return this.libros.length;
    }


    buscarTituloIngresado(tituloABuscar) {
        let resultadoFiltrado = this.libros.filter((libro) =>
            libro.titulo.includes(tituloABuscar))

            if(resultadoFiltrado.length > 0){
                catalogoLibros.listarResultados(resultadoFiltrado);
            }
            else {
                alert("no encontré")
            }
        }
    buscarAutorIngresado(autorABuscar)  {
        let resultadoFiltrado = this.libros.filter((libro) =>
            libro.autor.includes(autorABuscar))

            if(resultadoFiltrado.length > 0){
                catalogoLibros.listarResultados(resultadoFiltrado);
            }
            else {
                alert("no encontré")
            }
        }

    buscarPrecioIngresado(precioABuscar) {
        let precioFiltrado = this.libros.filter((libro) => libro.precio <= (precioABuscar))

        if (precioFiltrado.length > 0){
            catalogoLibros.listarResultados(precioFiltrado);
        } else {
            listarLibros();
        }
    }

    listarResultados(array) {
        const nodoResultado = document.getElementById("main_list")
        nodoResultado.innerHTML="";
        array.forEach((libro)=>{
    
            const divResultado = document.createElement("div")
            divResultado.innerHTML=`<div class="item_list">
                                    <div><img src=https://via.placeholder.com/550x800 class="img-fluid"></div>
                                    <h3>${libro.titulo}</h3>
                                    <div class='precio'> (${libro.autor})</div>
                                    <div>$ ${libro.precio}</div>
                                    <a onclick="agregrar()" class="add">AGREGAR</a>
                                </div>`
            nodoResultado.appendChild(divResultado);
        })
    }


    ordenarLista() {
        const nodoPrincipal = document.getElementById("main_list")
        nodoPrincipal.innerHTML="";
        catalogoLibros.libros.sort((libroA, libroB) =>{
            if(libroA.titulo<libroB.titulo)
            {
                return -1
            }
            return 1;
        })    
        listarLibros();
    }


    ordenarPrecio() {
        const nodoPrincipal = document.getElementById("main_list")
        nodoPrincipal.innerHTML="";
        catalogoLibros.libros.sort((libroA, libroB) =>{
            if(libroA.precio<libroB.precio)
            {
                return -1
            }
            return 1;
        })    
        listarLibros();
    }

    
}
