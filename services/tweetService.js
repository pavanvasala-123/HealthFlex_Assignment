const Tweet = require("../models/Tweet");

class TweetService {
  async postTweet(userId, text) {
    const tweet = new Tweet({ userId, text });
    await tweet.save();
    return tweet;
  }

  async fetchTimeline(userId, cursor, limit = 10) {
    const query = { userId };
    if (cursor) {
      query._id = { $lt: cursor };
    }
    return Tweet.find(query).sort({ createdAt: -1 }).limit(limit);
  }
}

module.exports = new TweetService();
