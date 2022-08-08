function openLog(){
    const formLog = document.getElementById("loginForm");
    formLog.classList.remove("d-none")
    formLog.classList.add("d-flex")

    loguear.innerHTML="";
}

programarBotonLogin()
function programarBotonLogin(){
    const btn = document.getElementById("ingresar");
    btn.addEventListener("click", () =>{
        precesarLoguin()
    })
}

function precesarLoguin(){

    const userLog = document.getElementById("user").value;
    const passLog = document.getElementById("pass").value;

    if(userLog==="" || passLog==="")
    {
        alert("datos incompletos")
    }
    else
    {
        if(userLog==="user1" && passLog==="pass1")
        {
            //alert(`bienvenido ${userLog}`);
            const nodo = document.getElementById("loginForm");  
                nodo.innerHTML = `hola, ${userLog}`;  
                closeSession();
        }
        else{
            alert(`datos incorrectos`);
        }
    }


    localStorage.setItem("userLogued", userLog);
    localStorage.setItem("passLogued", passLog);
}


function cargarPreferencias()
{
    const loguear = document.getElementById("loginBtn");
    nodo = document.getElementById("loginForm");
    userLog = localStorage.getItem("userLogued")
    if(userLog) //valorFuente !=== null, undefined, 0, false, ""
    {        
        loguear.innerHTML = `hola, ${userLog}`;  
        loguear.classList.remove("btn_principal");        
        closeSession();
    }
    else{        
        loguear.innerHTML="login";
        loguear.addEventListener("click", () => {
            loguear.classList.add("d-none");
            openLog();
        })
    }
}

function closeSession(){
    const cerrarBtn = document.getElementById("btn_session");
    const close = document.createElement("button")
        close.setAttribute("id", "closeSession")
        close.classList.add("btn_principal")
        close.innerHTML = `salir`;  

        cerrarBtn.appendChild(close);

        close.addEventListener("click", () => {
            borrarDatos();
        })
}

function borrarDatos(){
    localStorage.removeItem('userLogued');
    localStorage.removeItem('passLogued');
    location.reload();
}



