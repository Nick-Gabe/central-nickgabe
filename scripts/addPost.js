const { fetchTweet } = require('./twitter/fetchTweet');
const { saveTweet } = require('./twitter/saveTweet');

const socialMedias = {
  twitter: async (url, params = {}, callback, path) => {
    const tweet = await fetchTweet(url, params);
    saveTweet(tweet, callback, path);
  },
};

const addPost = async ({ social, url, params, callback, path }) => {
  return socialMedias[social](url, params, callback, path);
};

module.exports = { addPost };
