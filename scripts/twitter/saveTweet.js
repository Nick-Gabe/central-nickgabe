const { cleanUrl, getId } = require('../utils/constants/patterns');
const { writeFileSync, readFileSync } = require('fs');

const saveTweet = (
  { type, url, date, full, image, title, description, tags },
  callback,
  path = 'public/posts.json'
) => {
  const id = getId('twitter', url);
  const cleanedUrl = cleanUrl('twitter', url);

  let posts;
  try {
    const file = readFileSync(path, { encoding: 'utf-8' });
    posts = JSON.parse(file);
  } catch {
    posts = [];
  }

  const newPost = {
    type: type,
    social: 'twitter',
    id: id,
    date: date,
    url: cleanedUrl,
    title: title.trim(),
    description: description.trim(),
    full: full.trim(),
    image: image,
    tags: tags
  };

  console.debug(newPost);

  const newPosts = [...posts, newPost].filter(
    (post, index, source) =>
      index === source.map((p) => p.id).lastIndexOf(post.id)
  );

  writeFileSync(path, JSON.stringify(newPosts, null, 2), { encoding: 'utf-8' });
  console.log('👌', 'Post salvo com sucesso!');
  callback?.();
};

module.exports = { saveTweet };
