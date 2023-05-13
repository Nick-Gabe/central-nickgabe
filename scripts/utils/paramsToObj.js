const paramsToObj = (paramsArray) => {
  return paramsArray.reduce((acc, cur) => {
    const [key, value] = cur.slice(2).split('=');
    return { ...acc, [key]: value };
  }, {});
};

module.exports = { paramsToObj };
