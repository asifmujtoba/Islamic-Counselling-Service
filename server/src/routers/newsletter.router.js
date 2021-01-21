const express = require('express');
const router = express.Router();
const {
  getAllNewsletter,
  createNewsletter,
} = require('../middleware/newsletter');

router.get('/', getAllNewsletter);
router.post('/create', createNewsletter); 


module.exports = router;
