$(document).ready(function () {
    $('#boton').click(function () {
        let usuario = $('#login').val()
        let pass = $('#password').val()

        let listado = llenar()
        var encontrado = false
        for (let elemento of listado) {
            console.log(elemento.user==usuario)
            if (!encontrado) {
                if (elemento.user == usuario && elemento.pass == pass) {
                    generaDatos(elemento)
                    encontrado = true
                    break;
                }
            }
        }
        
        if (!encontrado) {
            generaError()
        }
    })
})


function Usuario(user, pass, curso, hora, nombre) {
    this.user = user
    this.pass = pass
    this.curso = curso
    this.hora = hora
    this.nombre = nombre
}

function llenar() {
    let lista = [
        new Usuario(274214856, 274214856, "Java", "DIURNO", "José Luis Naranjo"),
        new Usuario(123, 123, "Java", "VESPERTINO", "Jorge Milanes"),
    ]

    return lista
}

function generaError() {
    $(document).ready(function () {
        $('#alerta').show()
    })

}

function generaDatos(elemento) {
    alert(elemento.nombre+ " su curso es "+elemento.curso+ "y se efectua de forma "+elemento.hora)

}
