const express = require('express');
const router = express.Router();
const {
  getAllContact,
  createContact,
} = require('../middleware/contact');

router.get('/', getAllContact);
router.post('/create', createContact); 


module.exports = router;
