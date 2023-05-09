const productos = [
    {nombre: "canasta de huevos", precios:19000},
    {nombre: "leche", precios:3500},
    {nombre: "pan tajado", precios:5300},
    {nombre: "queso", precios:7000},
    {nombre: "mantequilla", precios:5400},
];
let carrito = []

let seleccion = prompt ("Hola desea comprar algun producto si o no")

while(seleccion != "si" && seleccion !="no") {
    alert ("por favor ingresa si o no")
    seleccion = prompt ("Hola desea comprar algun producto si o no")
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + "" + producto.precios + "$" );
    alert(todoslosProductos.join("-"))
    } 
    else if (seleccion == "no") {
    alert("Gracias por venir, Hasta pronto")
} 

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "canasta de huevos" || producto == "leche" || producto == "pan tajado" || producto == "queso" || producto == "mantequilla"){
        switch (producto) {
            case "canasta de huevos":
                precio = 19000;
                break;
            case "leche":
                precio = 3500;
                break;
            case "pan tajado":
                precio = 5300;
                break;
            case "queso":
                precio = 7000;
                break;
            case "mantequilla":
                precio = 5400;
                break;
            default:
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades quieres llevar"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }
    else{
        alert("no tenemos ese producto")
    }
    
    seleccion = prompt ("desea seguir comprando ?")
    
    while ( seleccion === "no"){
        alert("gracias por la compra! hasta pronto")
        carrito.forEach((carritoFinal) =>{
            console.log(`productos: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades , 0)
console.log (`El total a pagar por su compra es: ${total}`)