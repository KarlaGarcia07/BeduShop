const Menu = require('../modules/Menu')

// READ
function obtenerMenus(req, res){
    Menu.find()
    .then(data => res.status(200).send(data))
}

// CREATE
function crearMenu(req, res){
    const info = req.body;
    const prod = new Menu(info)
    prod.save()
    .then(data => res.send(data))
}

// DELETE
function eliminarMenu(req,res){
    const saucer = req.body.platillo;
    Menu.findOneAndDelete({platillo : saucer})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

// UPDATE
function modificarMenu(req, res){
    const saucer = req.params.platillo;
    const nuevaInfo = req.body;
    Menu.findOneAndUpdate({platillo : saucer}, nuevaInfo)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

module.exports = {
    obtenerMenus,
    crearMenu,
    modificarMenu,
    eliminarMenu
}