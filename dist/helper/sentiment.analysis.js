const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();
const sentimentScores = {
    'positive': 5,
    'somewhat positive': 4,
    'neutral': 3,
    'somewhat negative': 2,
    'negative': 1,
};
classifier.addDocument('I love this product!', 'positive');
classifier.addDocument('This product is amazing!', 'positive');
classifier.addDocument('This product is good.', 'somewhat positive');
classifier.addDocument('This product is okay.', 'neutral');
classifier.addDocument('I had a bad experience with this product.', 'negative');
classifier.addDocument('This product is terrible.', 'negative');
classifier.addDocument('This product is the best thing I have ever bought!', 'positive');
classifier.addDocument('I love this product and recommend it to everyone!', 'positive');
classifier.addDocument('This product is amazing, I can\'t believe how well it works.', 'positive');
classifier.addDocument('I am very impressed with this product, it exceeded my expectations.', 'positive');
classifier.addDocument('This product is good, but there is room for improvement.', 'somewhat positive');
classifier.addDocument('I like this product, but I have some reservations.', 'somewhat positive');
classifier.addDocument('This product is okay, but it could be better.', 'neutral');
classifier.addDocument('I have mixed feelings about this product, it has both good and bad qualities.', 'neutral');
classifier.addDocument('This product is not very good, I wouldn\'t recommend it.', 'somewhat negative');
classifier.addDocument('I am disappointed with this product, it did not live up to my expectations.', 'somewhat negative');
classifier.addDocument('This product is terrible, I regret buying it.', 'negative');
classifier.addDocument('I had a bad experience with this product, it broke after a few uses.', 'negative');
classifier.addDocument('This product is a waste of money, I do not recommend it.', 'negative');
classifier.addDocument('I would never buy this product again, it was a complete disappointment.', 'negative');
classifier.addDocument('I absolutely love this product, it has changed my life!', 'positive');
classifier.addDocument('This product is fantastic, it works exactly as advertised.', 'positive');
classifier.addDocument('I am very happy with this purchase, it was worth every penny.', 'positive');
classifier.addDocument('This product is pretty good, I would recommend it to others.', 'somewhat positive');
classifier.addDocument('I have no complaints about this product, it does what it\'s supposed to do.', 'neutral');
classifier.addDocument('I\'m not sure how I feel about this product, it has some good features but also some drawbacks.', 'neutral');
classifier.addDocument('This product is not great, but it\'s not terrible either.', 'neutral');
classifier.addDocument('I was disappointed with this product, it did not meet my expectations.', 'somewhat negative');
classifier.addDocument('This product is not worth the price, there are better options available.', 'somewhat negative');
classifier.addDocument('I had a bad experience with this product, it broke after a few days.', 'negative');
classifier.addDocument('This product is terrible, I would not recommend it to anyone.', 'negative');
classifier.addDocument('I regret buying this product, it was a waste of money.', 'negative');
classifier.addDocument('I would never buy from this company again, their products are low quality.', 'negative');
classifier.addDocument('This product is a complete scam, don\'t waste your money.', 'negative');
classifier.addDocument('I hate this product, it doesn\'t work and is a total ripoff.', 'negative');
classifier.addDocument("product service is ok ok", 'neutral');
classifier.train();
exports.classifyComments = (comment) => {
    const words = tokenizer.tokenize(comment.toLowerCase());
    const classification = classifier.classify(words);
    const sentimentScore = sentimentScores[classification];
    return sentimentScore;
};
//# sourceMappingURL=sentiment.analysis.js.map