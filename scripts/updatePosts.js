const posts = require('../public/posts.json');
const { addPost } = require('./addPost');
const { renameSync } = require('fs');

const updatePost = (index = 0) => {
  const post = posts[index];

  console.log('-'.repeat(30));

  if (index === posts.length) {
    console.log('✅', 'Todos os posts foram atualizados com sucesso!');
    renameSync('public/temp_posts.json', 'public/posts.json');
    return;
  }

  console.log('🚀', `Atualizando posts: ${index + 1}/${posts.length}`);

  addPost({
    social: post.social,
    url: post.url,
    callback: () => updatePost(index + 1),
    path: 'public/temp_posts.json',
  });
};

updatePost(0);
