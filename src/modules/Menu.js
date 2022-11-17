const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
    platillo: {type: String, require: true},
    origen: String,
    tiempo: Number,
    proteina: Number,
    carbo: Number
  },{
    collection: "Menus",
    timestamps: true
})

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu