const puppeteer = require('puppeteer');

const fetchTweet = async (url, params) => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  const page = await browser.newPage();
  console.debug('🧚', 'Iniciando...');

  await page.goto(url);
  await page.waitForSelector('[data-testid=cellInnerDiv] [href="/ImNickGabe"]');

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
      .map((div) => {
        const elements = Array.from(
          div.querySelectorAll('[data-testid=tweetText]>*')
        )
          .filter((item) => {
            const roleLink =
              item?.parentElement?.parentElement?.parentElement?.parentElement?.getAttribute(
                'role'
              );
            return roleLink !== 'link';
          })
          .map((item) => item.alt || item.textContent)
          .join('');

        return elements;
      });
    return result;
  });

  browser.close();

  const firstTweet = threadTweets[0];
  const threadAsText = threadTweets.join('\n');

  const firstNewLine = firstTweet.indexOf('\n');
  const sliceEnd = firstNewLine === -1 ? firstTweet.length : firstNewLine;

  const contentType =
    isVideo || threadTweets.length > 1 ? 'text' : isImage || isLink;

  const defaultImage = 'https://pbs.twimg.com/profile_images';

  return {
    url,
    date,
    image: image.startsWith(defaultImage) ? '' : image,
    type: contentType || 'text',
    full: threadAsText,
    title: params.title || firstTweet.slice(0, sliceEnd),
    description: params.description || firstTweet.slice(sliceEnd),
    tags: params.tags.split(',').map((str) => str.trim()),
  };
};

module.exports = { fetchTweet };
