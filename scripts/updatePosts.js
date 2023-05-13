const posts = require('../public/posts.json');
const { addPost } = require('./addPost');
const { unlinkSync, renameSync } = require('fs');

const updatePost = (index = 0) => {
  const post = posts[index];

  if (index === posts.length) {
    // unlinkSync('public/posts.json');
    renameSync('public/temp_posts.json', 'public/posts2.json');
    return;
  }

  console.log('-'.repeat(30));
  console.log('🚀', `Atualizando posts: ${index + 1}/${posts.length}`);

  addPost({
    social: post.social,
    url: post.url,
    callback: () => updatePost(index + 1),
    path: 'public/temp_posts.json',
  });
};

updatePost(0);
