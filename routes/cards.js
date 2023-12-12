const router = require('express').Router();
const {
  addCard, getCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/', getCard);
router.post('/', addCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
