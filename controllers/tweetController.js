const tweetService = require('../services/tweetService');

class TweetController {
    async postTweet(req, res) {
        try {
            const { text } = req.body;
            const tweet = await tweetService.postTweet(req.user.id, text);
            res.status(201).json({ message: 'Tweet posted successfully', tweetId: tweet._id });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async fetchTimeline(req, res) {
        try {
            const { userId } = req.params;
            const { cursor } = req.query;
            const timeline = await tweetService.fetchTimeline(userId, cursor);
            res.status(200).json(timeline);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new TweetController();
