// require de express
const express = require('express')
const app = express() // producto express

const hbs = require('hbs')
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
    // Le digo a HBS en que directorio estarpan todos los parciales
hbs.registerPartials(__dirname + '/views/parciales')



console.log('Pruba12');
//Express HBS engine
app.set('view engine', 'hbs')


//console.log('Pruba13');
app.get('/', (req, res) => { // hace callback  // crear un middleware para filtrar cualquier peticion
    //res.send(salida)
    //console.log('Prueb');
    res.render('home', { // home.hbs
        nombre: 'edgAR CRUZ',
        anio: new Date().getFullYear(),
        nombreCurso: 'NodeJS'
    })
})

app.get('/about', (req, res) => { // hace callback  // crear un middleware para filtrar cualquier peticion
    //res.send(salida)
    //console.log('Prueb');
    res.render('about', { // home.hbs
        anio: new Date().getFullYear(),
        nombreCurso: 'NodeJS'
    })
})


//middleware
/* app.get('/data', (req, res) => {
    res.send('Hola data')
    res.send(salida)
})
 */
app.listen(port, () => {
    console.log(`Escuchando peticiones en puerto ${ port }`);
})