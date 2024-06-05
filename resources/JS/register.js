const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    //nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



document.addEventListener('DOMContentLoaded', ()=>{
const form = document.querySelector('#contenedorFormulario');
const errorMenssage = document.querySelector('#error-menssage');

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const confPass = form.confPassword.value;
    const email = form.email.value;


    // VALIDAR USERNAME
    if(username === ""){
        errorMenssage.textContent="Escriba su Usuario";
        document.fRegistro.username.focus()
        return ;
    } if(username.length<6 || username.length>12){
        errorMenssage.textContent="El Usuario tiene que ser mayor a 6 y menor a 12 caracteres";
        document.fRegistro.username.focus()
        return ;
    }

    // VALIDAR PASSWORD
    if(password === ""){
        errorMenssage.textContent="Escriba su Password";
        document.fRegistro.password.focus()
        return ;
    } if(password.length<6 || password.length>12){
        errorMenssage.textContent="El Password tiene que ser mayor a 6 y menor a 12 caracteres";
        document.fRegistro.password.focus()
        return ;
    }

    // CONFRIMACION DE PASSWORD 
    if(confPass === "" || confPass != password){
        errorMenssage.textContent=" Su Password no coincide";
        document.fRegistro.confPassword.focus()
        return ;
    }
    
    // VALIDAR CORREO
    correo = email
    correo = esMail(correo)

    if (email == "") {
        errorMenssage.textContent="Escriba su Email";
        document.fRegistro.email.focus()
        return ;
    } else {
        if (correo == false) {
            errorMenssage.textContent="El formato no coincide por ejem: asistente@contable.com";
            document.fRegistro.email.focus()
            return ;
    }
    }

    //Guardar el usuario en el Localstorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.username === username)
    if(existingUser){
        errorMenssage.textContent="El usuario ya existe";
        return;
    }
    const newUser = {
        username,
        password
    }
    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    window.location.href = 'inicioSesion.html';
    console.log(localStorage);
})



})

function volverInicio() {
    window.location.href = '/index.html'

}

function esMail(dato) {
    return expresiones.correo.test(dato)
}
function esTelefono(dato) {
    return expresiones.telefono.test(dato)
}