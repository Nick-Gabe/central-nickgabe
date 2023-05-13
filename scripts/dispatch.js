const { addPost } = require('./addPost');
const { paramsToObj } = require('./utils/paramsToObj');

const [node, cmd, social, url, ...paramsArray] = process.argv;

const params = paramsToObj(paramsArray);

if (!social) {
  console.debug('Por favor insira o nome da rede social');
  process.exit();
}
if (!url) {
  console.debug('Por favor insire o URL da postagem');
  process.exit();
}

addPost({ social, url, params: paramsArray });
