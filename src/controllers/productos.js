const Producto = require('../modules/Producto')

// READ
function obtenerProductos(req, res){
    Producto.find()
    .then(data => res.status(200).send(data))
}

// CREATE
function crearProducto(req, res){
    const info = req.body;
    const prod = new Producto(info)
    prod.save()
    .then(data => res.send(data))
}

// DELETE
function eliminarProducto(req,res){
    const name = req.body.nombre;
    console.log('name', name)
    Producto.findOneAndDelete({nombre : name})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

// UPDATE
function modificarProducto(req, res){
    const name = req.params.nombre;
    const nuevaInfo = req.body;
    Producto.findOneAndUpdate({nombre : name}, nuevaInfo)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

module.exports = {
    obtenerProductos,
    crearProducto,
    modificarProducto,
    eliminarProducto
}