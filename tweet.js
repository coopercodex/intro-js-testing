class Tweet {
constructor(userName, statement, link) {
    this.sender = userName;
    this.content = statement;
    this.link = link || 'no link provided';
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
}

    like() {
         this.likes += 1;
    }

    retweet() {
        this.retweets += 1;
    }
    reply(replies) {
        this.replies.push(replies);
        this.replyCount += 1;
    }
}

module.exports = Tweet;
