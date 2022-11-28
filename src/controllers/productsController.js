const path = require('path');
const fs = require("fs");
const { Game } = require('../database/models');


const productsController = {
    index : async (req, res) => {
        let games = await Game.findAll();

        console.log(games);
        
       return res.render('products');
    
    }
}

module.exports = productsController;