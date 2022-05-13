// const http = require ('http')
// const { serialize } = require('v8')

// const server = http.createServer ((peticion, respuesta) => {
//     respuesta.end('holahola')
// })

// const connectedServer = server.listen(8080, () => {
//     console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
// })

// server.on("error", error => console.log(`error en el servidor ${error}`))

const express = require('express');
const app = express();
const fs = require ('fs')

app.get('/productos', (req, res) =>{
  res.send(productos);
});

app.get('/productorandom', (req, res) =>{
    res.send(productoRandom);
});

app.listen(8080, () => {
  console.log ('servidor escuchando c:');
});

class Contenedor {

    constructor() {
        this.productos = [];
    }

    save(producto) {
        producto.id = this.productos.length + 1;
        this.productos.push(producto);
        async function guardar_producto() {
            try {
                await fs.promises.appendFile('./productos.txt', JSON.stringify([producto], null, '\t'))
                console.log('guardado')
                console.log(producto.id)
            } catch (err) {
                console.log('error al guardar')
            }
        }
        guardar_producto()
    }

}

let articulo = new Contenedor;
productos = [
{
    title: 'Lapicera',
    price: 100,
    thumbnail: 'http://www.google.com.ar'
}, {
    title: 'Cartuchera',
    price: 150,
    thumbnail: 'http://www.google.com.ar'
}, {
    title: 'Lapiz',
    price: 50,
    thumbnail: 'http://www.google.com.ar'
}
];

for (i in productos)
    articulo.save(productos[i]);


let productoRandom = Math.floor(Math.random()*productos.length);
let rValue = productos[productoRandom];
console.log(rValue)

