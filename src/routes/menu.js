const routerM = require('express').Router();

const {
    obtenerMenus,
    crearMenu,
    modificarMenu,
    eliminarMenu
} = require('../controllers/menus');

routerM.get('/',obtenerMenus)
routerM.post('/', crearMenu)
routerM.put('/:platillo', modificarMenu)
routerM.delete('/', eliminarMenu)

module.exports = routerM;