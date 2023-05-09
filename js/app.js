const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className ="card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class= "price">$${product.precios}</p>
    `;
    
    shopContent.append(content);

    let Agrega = document.createElement("button");
    Agrega.className = "Agregar";
    Agrega.innerText = "Agregar";

    content.append(Agrega);

    Agrega.addEventListener("click" , () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if(repeat) {
        carrito.map((prod) => {
            if (prod.id === product.id){
            prod.cantidad++;
            }
        })
    } else {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precios: product.precios,
            cantidad: product.cantidad,
        });
    }
        console.log(carrito);
        console.log(carrito.length)
        carritoConter();
        saveLocal();
    });
    
    Agrega.addEventListener("click" , () => {
        Swal.fire ({ 
        position: 'top-end',
        icon: 'success',
        title: 'El Producto Fue Agregado Al Carrito',
        showConfirmButton: false,
        timer: 1500

        });
    });
});

carritoConter();

// set item 
 const saveLocal =() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
 }

// get iten

