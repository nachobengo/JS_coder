function buscarTitulo() {
    const inputPregunta = document.createElement("input");
    inputPregunta.setAttribute("id", "titulo");
    inputPregunta.setAttribute("placeholder", "ingrese titulo");
    inputPregunta.classList.add("form-control");
    inputPregunta.addEventListener("keypress", (event) => {
        if (event.key === "Enter")
        {
            tituloSearch();
        }
    });

    const buscar = document.createElement("button")
        buscar.setAttribute("type", "submit");
        buscar.setAttribute("id", "buscar");
        buscar.classList.add("btn_principal");
        buscar.innerText="BUSCAR";
        buscar.onclick = () => { tituloSearch(); };
        

    function tituloSearch(){
        const tituloABuscar = document.getElementById("titulo").value;
        catalogoLibros.buscarTituloIngresado(tituloABuscar);
    }

    const busqueda = document.getElementById("subSearch");
        busqueda.innerHTML="";
        busqueda.appendChild(inputPregunta);
        busqueda.appendChild(buscar);

}



function buscarAutor() {
    const inputPregunta = document.createElement("input");
    inputPregunta.setAttribute("id", "autor");
    inputPregunta.setAttribute("placeholder", "ingrese autor");
    inputPregunta.classList.add("form-control");
    inputPregunta.addEventListener("keypress", (event) => {
        if (event.key === "Enter")
        {
            autorSearch();
        }
    });

    const buscar = document.createElement("button")
        buscar.setAttribute("type", "submit");
        buscar.setAttribute("id", "buscar");
        buscar.classList.add("btn_principal");
        buscar.innerText="BUSCAR";
        buscar.onclick = () => { autorSearch(); };

    function autorSearch(){
        const tituloABuscar = document.getElementById("autor").value;
        catalogoLibros.buscarAutorIngresado(tituloABuscar);
    }

    const busqueda = document.getElementById("subSearch");
        busqueda.innerHTML="";
        busqueda.appendChild(inputPregunta);
        busqueda.appendChild(buscar);
}





function ingresarPrecio() {
    const inputPregunta = document.createElement("input");
    inputPregunta.setAttribute("id", "precio");
    inputPregunta.setAttribute("type", "number");
    inputPregunta.setAttribute("placeholder", "Ingrese un monto para ver opciones");
    inputPregunta.classList.add("form-control");
    inputPregunta.addEventListener("keypress", (event) => {
        if (event.key === "Enter")
        {
            precioSearch();
        }
    });

    const buscar = document.createElement("button")
        buscar.setAttribute("type", "submit");
        buscar.setAttribute("id", "buscar");
        buscar.classList.add("btn_principal");
        buscar.innerText="BUSCAR";
        buscar.onclick = () => { precioSearch(); };

    function precioSearch(){
        const precioABuscar = document.getElementById("precio").value;
        catalogoLibros.buscarPrecioIngresado(precioABuscar);
    }

    const busqueda = document.getElementById("subSearch");
        busqueda.innerHTML="";
        busqueda.appendChild(inputPregunta);
        busqueda.appendChild(buscar);

}