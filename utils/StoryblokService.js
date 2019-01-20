/* eslint no-underscore-dangle: ["error", { "allow": ["_uid"] }] */
import StoryblokClient from 'storyblok-js-client';

class StoryblokService {
  constructor() {
    this.devMode = process.env.NODE_ENV !== 'production'; // Always loads draft in devMode
    this.token = this.devMode
      ? '1JC7F3RQROnZQiYukvhW5wtt'
      : 'Bc7OwWaIz7eCIIF7bN2VgAtt';
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    });

    this.query = {};
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  }

  get(slug, params) {
    const newParams = params || {};

    if (
      this.getQuery('_storyblok') ||
      this.devMode ||
      (typeof window !== 'undefined' && window.storyblok)
    ) {
      newParams.version = 'draft';
    }

    if (
      typeof window !== 'undefined' &&
      typeof window.StoryblokCacheVersion !== 'undefined'
    ) {
      newParams.cv = window.StoryblokCacheVersion;
    }

    return this.client.get(slug, newParams);
  }

  initEditor(reactComponent) {
    if (window.storyblok) {
      window.storyblok.init();
      window.storyblok.on(['change', 'published'], () =>
        window.location.reload(true)
      );
      window.storyblok.on('input', event => {
        if (
          reactComponent.state &&
          reactComponent.state.pageContent &&
          event.story.content._uid === reactComponent.state.pageContent._uid
        ) {
          reactComponent.setState({
            pageContent: window.storyblok.addComments(
              event.story.content,
              event.story.id
            )
          });
        }
      });
    }
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query[param];
  }

  bridge() {
    if (!this.getQuery('_storyblok') && !this.devMode) {
      return '';
    }
    return (
      <script
        src={`//app.storyblok.com/f/storyblok-latest.js?t=${this.token}`}
      />
    );
  }
}

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
