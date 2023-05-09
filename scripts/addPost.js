const puppeteer = require('puppeteer');
const posts = require('../public/posts.json');
const { writeFileSync } = require('fs');
const [node, cmd, social, url, ...paramsArray] = process.argv;

const params = paramsArray.reduce((acc, cur) => {
  const [key, value] = cur.slice(2).split('=');
  return { ...acc, [key]: value };
}, {});

if (!social) {
  console.debug('Please provide the social media name');
  process.exit();
}
if (!url) {
  console.debug('Please provide the post url');
  process.exit();
}

(async function () {
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  const page = await browser.newPage();
  console.debug('🧚', 'started');

  await page.goto(url);
  await page.waitForSelector('[data-testid=cellInnerDiv]');

  const image = await page.evaluate(
    () => document.querySelector('[property="og:image"]').content
  );

  const date = await page.evaluate(
    () => document.querySelector('time').dateTime
  );

  const isVideo =
    (await page.$('article:first-of-type [data-testid=playButton]')) !== null
      ? 'video'
      : '';
  const isImage =
    (await page.$('article:first-of-type [data-testid=tweetPhoto]')) !== null
      ? 'image'
      : '';
  const isLink =
    (await page.$(
      'article:first-of-type [data-testid="card.layoutLarge.detail"]'
    )) !== null
      ? 'link'
      : '';

  const threadTweets = await page.evaluate(() => {
    const innerDivs = Array.from(
      document.querySelectorAll('[data-testid=cellInnerDiv]')
    );
    const separator = innerDivs.filter(
      (div) => div.firstChild.childNodes.length === 0
    )[1];
    const separatorIndex = innerDivs.findIndex((div) => div === separator);
    const result = innerDivs
      .slice(0, separatorIndex)
      .filter((div) => div.querySelector('[href="/ImNickGabe"]'))
      .map((div) => div.querySelector('[data-testid=tweetText]').textContent);

    return result;
  });

  browser.close();

  const firstTweet = threadTweets[0];
  const threadAsText = threadTweets.join('\n');

  console.debug('👩‍🎓', firstTweet);

  const firstNewLine = firstTweet.indexOf('\n');
  const sliceEnd = firstNewLine === -1 ? firstTweet.length : firstNewLine;

  const contentType =
    isVideo || threadTweets.length > 1 ? 'text' : isImage || isLink;

  const newPosts = [
    ...posts,
    {
      date: date,
      description: params.description || firstTweet.slice(sliceEnd),
      full: threadAsText,
      id: url.match(/(?<=status\/)[0-9]+/)[0],
      image: image,
      social: social,
      title: params.title || firstTweet.slice(0, sliceEnd),
      type: contentType,
      url: url,
    },
  ].filter(
    (post, index, source) =>
      index === source.map((p) => p.id).lastIndexOf(post.id)
  );

  writeFileSync('public/posts.json', JSON.stringify(newPosts));
  console.debug('👌', 'finished successfully');
})();
