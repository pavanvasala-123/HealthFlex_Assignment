const express = require('express');
const tweetController = require('../controllers/tweetController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, tweetController.postTweet);
router.get('/:userId/timeline', authMiddleware, tweetController.fetchTimeline);

module.exports = router;
