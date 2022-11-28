const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const methodOverride = require('method-override');
const path = require('path');

const routeProducts = require('./src/routes/routeProducts');


let app = express();

app.use(cors({
    credentials:true,
    origin: "*"
}));




//routes
app.use('/', routeProducts);

app.use(express.static(path.join(__dirname, '/public')));





// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');


app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());








app.listen(3000, () => {  // servidor para testes
    console.log("Servidor rodando na porta 3333")
})