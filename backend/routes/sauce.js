// const app = require('../app');
// const router = app.Router();
// Importation de notre framework dans notre application
const express = require('express');
// Appel du routeur avec la méthode mise à disposition par Express
const router = express.Router();
// Importation du controller
const sauceController = require('../controllers/sauce');
// On importe le middleware auth pour sécuriser les routes
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const fs = require('fs');
// Différentes routes de l'api
console.log('routerSauce');
// Route qui permet de récupérer toutes les sauces
router.get('/', auth, sauceController.getAllSauces);
// Route qui permet de récupérer une sauce par ID
router.get('/:id', auth, sauceController.getOneSauce);
// Route qui permet de créer une sauce 
router.post('/', auth, multer, sauceController.createSauce);
// Route qui permet de modifié une sauce par ID
router.put('/:id', auth, multer, sauceController.modifySauce);
// Route qui permet de supprimé une sauce par ID
router.delete('/:id', auth, sauceController.deleteSauce );
// Route qui permet de gérer les likes des sauces
router.post('/:id/like', auth, sauceController.likeDislike)


module.exports = router;