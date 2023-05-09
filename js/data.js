const  dataJson =  document.getElementById("dataJson");

fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.results);

        data.map((item) => {
            const content = document.createElement("div");
            content.innerHTML =`
            <img class= "img.data" src="${item.img}">
            <h3>${item.nombre}</h3>
            <p >$${item.precios}</p>
            `;
            dataJson.append(content);
        });
    });