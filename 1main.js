let get_cantidad = document.getElementById("cantidad")

let get_categoria = document.getElementById("inputState")

let boton_resumen = document.getElementById("resumen")

let boton_borrar = document.getElementById("borrar")

let total_a_pagar = document.getElementById("total-a-pagar")

let total




function mostrar_total () {

   // let categoria = get_categoria.options[get_categoria.selectedIndex].value
   get_cantidad = document.getElementById("cantidad")

   get_categoria = document.getElementById("inputState")

    
    let cantidad = get_cantidad.value

    let categoria = get_categoria.options[get_categoria.selectedIndex].text

    console.log(categoria)


    switch (categoria) {
        case "Jubilados":
            total = ((200 * cantidad) * 0.2)
            total_a_pagar.value = "Total a Pagar: $" + total
            break;
        case "Estudiantes":
            total = ((200 * cantidad) * 0.5)
            total_a_pagar.value = "Total a Pagar: $" + total
            break;
        case "Niños":
            total = ((200 * cantidad) * 0.85)
            total_a_pagar.value = "Total a Pagar: $" + total
            break;
    
        default:
            total = "Total a Pagar: $"
            total_a_pagar.value = "Total a Pagar: $" + " hubo un problema"
            break;
    }
}


function borrar_total (){
    total_a_pagar.value = "Total a Pagar: $"
    get_cantidad.value = ""
    get_categoria = document.getElementById("inputState").selectedIndex = 0
}






boton_borrar.addEventListener("click",  borrar_total)



boton_resumen.addEventListener("click", mostrar_total)








