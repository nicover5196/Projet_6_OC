// Importation du router Express
const express = require('express');
const router = express.Router();

// Importation du controller User 
const userCtrl = require('../controllers/user');

// Importation des fonctions controllers (Route Post pour envoyée les informations)
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
