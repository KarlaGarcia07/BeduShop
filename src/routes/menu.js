const routerP = require('express').Router();

const {
    obtenerMenus,
    crearMenu,
    modificarMenu,
    eliminarMenu
} = require('../controllers/menus');

routerP.get('/',obtenerMenus)
routerP.post('/', crearMenu)
routerP.put('/:titulo', modificarMenu)
routerP.delete('/', eliminarMenu)

module.exports = routerP;