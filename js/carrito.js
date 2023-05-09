
    const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display ="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header";
    modalHeader.innerHTML =`
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click" , () => {
        modalContainer.style.display ="none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement ("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precios}</p> 
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}<p>
        <span class="sumar"> + </span>
        <P>Total: ${product.cantidad * product.precios}<p>
        
        `;

     modalContainer.append(carritoContent);

     let restar= carritoContent.querySelector(".restar")
     restar.addEventListener("click", () => {
        if (product.cantidad !== 1){
            product.cantidad--;
        }
        saveLocal();
        pintarCarrito();
        
     });

     let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () =>  {
        product.cantidad++;
        saveLocal();
        pintarCarrito();
    });

        let eliminar = document.createElement("span");
        eliminar.innerText ="❌";
        eliminar.className ="delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click" , eliminarProducto);
        
        eliminar.addEventListener ("click", () => { 
            Swal.fire ({
                position: 'top-end',
                icon: 'warning',
                title: 'El Producto Fue Eliminado del Carrito',
                showConfirmButton: false,
                timer: 1500
            });
        });

    });

    const total = carrito.reduce ((acc, el ) => acc + el.precios * el.cantidad, 0 );

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalBuying);
    };

    verCarrito.addEventListener("click", pintarCarrito);


    const eliminarProducto = () => {
        const foundId = carrito.find ((Element) => Element.id);

        carrito = carrito.filter((carritoId) =>{
            return carritoId !== foundId;
        });
        carritoConter();
        saveLocal();
        pintarCarrito();
    };

    
    const carritoConter = () =>{
        cantidadCarrito.style.display = "block";

        const carritoLength = carrito.length;

        localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

        cantidadCarrito.innerText=JSON.parse(localStorage.getItem("carritoLength"));
    };

    carritoConter();
     

    
