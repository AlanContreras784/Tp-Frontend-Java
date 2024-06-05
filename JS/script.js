const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    //nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


fvalida.addEventListener('submit', e => {
    e.preventDefault();
    return
})

function validarEnviar() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0
    }

    //valido el apellido
    if (document.fvalida.apellido.value.length == 0) {
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0
    }

    //valido el correo
    correo = document.fvalida.email.value
    correo = esMail(correo)


    if (document.fvalida.email.value == "") {
        alert("Tiene que escribir su correo electronico")
        document.fvalida.email.focus()
        return 0
    } else {
        if (correo == false) {
            alert("Formato de correo no Valido")
            document.fvalida.email.focus()
            return 0
        }
    }
    //Validar Telefono
    telefo = document.fvalida.telefono.value
    telefono = esTelefono(telefo)

    if (document.fvalida.telefono.value == "") {
        alert("Tiene que introducir un número entero entre 7 a 14 digitos.")
        document.fvalida.telefono.focus()
        return 0
    } else {
        if (telefono == false) {
            alert("Tiene que introducir un número entero entre 7 a 14 digitos.")
            document.fvalida.telefono.focus()
            return 0
        }
    }

    //Validar la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0
        }
    }

    //valido la Residencia
    if (document.fvalida.residencia.selectedIndex == 0) {
        alert("Debe seleccionar una Opción de Residencia.")
        document.fvalida.residencia.focus()
        return 0
    }

    //Valido interes
    if (document.fvalida.so[0].checked == true || document.fvalida.so[1].checked == true || document.fvalida.so[2].checked == true || document.fvalida.so[3].checked == true) {
    } else {  //Si al menos uno de los opciones de consulta no está marcado....
        alert("Selecciona una o mas Opciones Consulta")
        document.fvalida.so[0].focus()
        return 0
    }

    if (document.fvalida.rb[0].checked == true || document.fvalida.rb[1].checked == true || document.fvalida.rb[2].checked == true || document.fvalida.rb[3].checked == true) {
    } else {  //Si al menos uno de los opciones de consulta no está marcado....
        alert("Selecciona solo una Opción")
        document.fvalida.rb[0].focus()
        return 0
    }
    if (document.fvalida.terminos.checked == false) {
        alert("Acepta los términos y condiciones")
        document.fvalida.terminos.focus()
        return 0
    }

    alert("Muchas gracias por enviar el formulario")
    document.fvalida.submit

}
function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}
function esMail(dato) {
    return expresiones.correo.test(dato)
}
function esTelefono(dato) {
    return expresiones.telefono.test(dato)
}






