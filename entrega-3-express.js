const express = require('express');
const app = express();

app.get('/productos', (req, res) =>{
  res.send(productos);
});

app.listen(8080, () => {
  console.log ('servidor escuchando c:');
});

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