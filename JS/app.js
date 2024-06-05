'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Cuando hago click en cada punto
// Sabaer la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho click

// Recorremos todos los punto
punto.forEach((cadaPunto, i) => {
    // asignamos un Click a cada punto
    punto[i].addEventListener('click', () => {

        // Guarmamos la posicion de ese punto
        let posición = i
        // cuando la posicion es 0, el transformX es 0
        // cuando la posicion es 1, el transformX es -50%
        // operacion = posicion * -50

        let operacion = posicion * -33

        // movemos el grande
        grande.style.transform = 'tranlateX($ operacion )%)'

        //Recorremos TODOS los puntos
        punto.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los puntos
            punto[i].classList.remove('activo')
        })
        // Añadimos la clase activo en el punto que hacemos click
        punto[i].classList.add('activo')

    })
})