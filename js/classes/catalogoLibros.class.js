class CatalogoLibros{
    constructor(libros) {
        this.libros = libros;
    }

    darCantidad() {
        return this.libros.length;
    }


    buscarT(nombreABuscar) {
        let esta = this.libros.some((libro) =>
            libro.titulo.includes(nombreABuscar)
        )
        if (esta) {
            // alert("LO ENCONTRE")
            // let filtrado = this.libros.filter((libro) => libro.titulo.includes(nombreABuscar))
            // console.log("ESTO ENCONTRÉ", filtrado);
            catalogoLibros.listarResultadoTitulo();
        }
        else {
            alert("NO LO ENCONTRÉ")
        }
    }

    listarResultadoTitulo() {
        const nodoResultado = document.getElementById("result_list")
        nodoResultado.innerHTML="";
        catalogoLibros.libros.forEach((libro)=>{
    
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

    buscarA(autorABuscar) {
        let esta = this.libros.some((libro) =>
            libro.autor.includes(autorABuscar)
        )
        if (esta) {
            alert("LO ENCONTRE")

            let filtrado = this.libros.filter((libro) =>
                    libro.autor.includes(autorABuscar)
            )

            console.log("ESTO ENCONTRÉ", filtrado);
        }
        else {
            alert("NO LO ENCONTRÉ")
        }
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
