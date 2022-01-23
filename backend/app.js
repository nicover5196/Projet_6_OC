// Importation de notre framework dans notre application
const express = require('express');
// Importation de mongoose
const mongoose = require('mongoose');
// Créer une const "application" express
const app = express();
//Importation de userRoute
const userRoutes = require('./routes/user');
const path = require('path');


// Connexion à notre base de données pour commencer à créer des routes serveur afin d'en bénéficier.
// -- -- -- -- -- -- -- --
mongoose.connect('mongodb+srv://nicover:tripel@cluster0.7badm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
// -- -- -- -- -- -- -- --    

// Sécurité CORS
// -- -- -- -- -- -- -- --
app.use((req, res, next) => {
    // accéder à notre API depuis n'importe quelle origine ( '*' ) ;
    res.setHeader('Access-Control-Allow-Origin', '*');
    // ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // envoyer des requêtes avec les méthodes mentionnées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// -- -- -- -- -- -- -- --

// Middleware global pour gérer la demande POST et extraire l'objet JSON de la demande
// BodyParser est intégré à Express désormais :
// app.use(bodyParser.json());
app.use(express.json());


// chargez le module de routage dans l’application :
const sauceRoute =  require('./routes/sauce');
console.log('app');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoute);
app.use('/api/auth', userRoutes);

// -- -- -- -- -- -- -- --


// Exporter l'application pour l'utilisation vers les autres fichiers
module.exports = app;