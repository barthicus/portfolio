import Document, { Head, Main, NextScript } from 'next/document';
import StoryblokService from '../utils/StoryblokService';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <script
            /* eslint-disable */
            dangerouslySetInnerHTML={{
              __html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`
            }}
            /* eslint-enable */
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
