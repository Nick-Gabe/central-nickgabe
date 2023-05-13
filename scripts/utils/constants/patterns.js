const idTypes = {
  twitter: (url) => url.match(/(?<=status\/)[0-9]+/)[0],
};

const getId = (social, url) => {
  return idTypes[social](url);
};

const urlTypes = {
  twitter: (url) => url.match(/^([^?]+)/i)[0],
};

const cleanUrl = (social, url) => {
  return urlTypes[social](url);
};

module.exports = { getId, cleanUrl };
