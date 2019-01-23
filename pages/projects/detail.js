/* eslint no-underscore-dangle: ["error", { "allow": ["_uid"] }] */
/* eslint import/no-dynamic-require: 0 */
/* eslint global-require: 0 */
import dynamic from 'next/dynamic';
import { Component } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import marked from 'marked';
import { PhotoSwipe } from 'react-photoswipe';
import { LazyImage } from 'react-lazy-images';
import StoryblokService from '../../utils/StoryblokService';
import Layout from '../../components/Layout/index';
import SvgIcon from '../../components/SvgIcon';
import Head from '../../components/Layout/Head';

import './detail.scss';
import 'react-photoswipe/lib/photoswipe.css';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'));

export default class ProjectDetailsPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    online: PropTypes.string,
    github: PropTypes.string,
    tags: PropTypes.array,
    code_fragments: PropTypes.array,
    screens: PropTypes.array,
    slug: PropTypes.string.isRequired
  };

  static defaultProps = {
    tags: null,
    online: null,
    github: null,
    code_fragments: null,
    screens: null
  };

  constructor(props) {
    super(props);

    const { screens } = this.props;

    this.state = {
      isPhotoswipeOpen: false,
      photoswipeIndex: 0,
      phoneScreen: this.getScreenByTitle(screens, 'phone view'),
      tabletScreen: this.getScreenByTitle(screens, 'tablet view'),
      desktopScreen:
        this.getScreenByTitle(screens, 'desktop view') || screens[0]
    };
  }

  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query);

    const storyBlockContent = await StoryblokService.get(
      `cdn/stories${asPath}`
    );

    return {
      ...storyBlockContent.data.story.content,
      slug: storyBlockContent.data.story.slug
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
    if (window.location.hash === '') return;
    setTimeout(() => this.scrollToSection(window.location.hash, 500), 1000);
  }

  getMdContent(mdContent, classname) {
    return (
      <div
        /* eslint-disable-next-line */
        dangerouslySetInnerHTML={{ __html: marked(mdContent) }}
        className={classname}
      />
    );
  }

  getScreenByTitle(screens, title) {
    return screens.find(screen => screen.title === title);
  }

  getScreenIndexByUid(screens, uid) {
    return screens.findIndex(screen => screen._uid === uid);
  }

  scrollToSection = (elSelector, speed = 200) => {
    const position = document.querySelector(elSelector).offsetTop - 120;
    animateScrollTo(position, { speed });
  };

  handleClose = () => {
    this.setState(state => ({
      ...state,
      isPhotoswipeOpen: false,
      photoswipeIndex: 0
    }));
  };

  handleOpen = (e, uid) => {
    e.preventDefault();

    const { screens } = this.props;

    this.setState(state => ({
      ...state,
      isPhotoswipeOpen: true,
      photoswipeIndex: this.getScreenIndexByUid(screens, uid)
    }));
  };

  convertImagesForPhotoswipe(images) {
    return images.map(image => ({
      src: image.source,
      w: image.width,
      h: image.height,
      title: image.title
    }));
  }

  ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const {
      cat,
      online,
      screens,
      thumb,
      title,
      intro,
      desc,
      stack,
      tags,
      released,
      github,
      code_fragments: codeFragments,
      slug
    } = this.props;
    return (
      <Layout>
        <Head
          title={`${title} | Bartosz Podgruszecki Portfolio`}
          description={intro}
        />
        <PhotoSwipe
          isOpen={this.state.isPhotoswipeOpen}
          items={this.convertImagesForPhotoswipe(screens)}
          onClose={this.state.handleClose}
          options={{ history: false, index: this.state.photoswipeIndex }}
        />
        <section className="section section--project">
          <div className="header">
            <img src={thumb} alt="" className="header__bg" />
            <h1 className="header__title">{title}</h1>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column is-half text">
                <h2>Description</h2>
                {this.getMdContent(desc, 'text__desc')}

                <h2>Technologies</h2>
                {this.getMdContent(stack, 'text__stack')}

                <div className="tags">
                  {tags.map(tag => (
                    <span className="tags__tag" title={tag} key={tag}>
                      <SvgIcon icon={tag} />
                    </span>
                  ))}
                </div>

                <h2>Released</h2>
                <div className="released">
                  <SvgIcon icon="calendar" />
                  <p>{released}</p>
                </div>
              </div>
              <div className="column column--centered is-half">
                <div className="images">
                  {this.state.desktopScreen && (
                    <a
                      href={this.state.desktopScreen.source}
                      onClick={e =>
                        this.handleOpen(e, this.state.desktopScreen._uid)
                      }
                      className="images__link images__link--desktop"
                      title="Desktop View"
                    >
                      <LazyImage
                        src={require(`../../static/img/projects/${slug}/desktop.png?size=540`)}
                        // width={this.state.desktopScreen.width}
                        width="540"
                        alt={`${slug} desktop view`}
                        className="images__img"
                        placeholder={({ imageProps, ref }) => (
                          <img
                            ref={ref}
                            className="images__img"
                            width="540"
                            src={require(`../../static/img/projects/${slug}/desktop.png?lqip`)}
                            alt={imageProps.alt}
                          />
                        )}
                        actual={({ imageProps }) => (
                          /* eslint-disable */
                          <img
                            {...imageProps}
                            className="images__img images__img--loaded"
                          />
                          /* eslint-enable */
                        )}
                      />
                    </a>
                  )}
                  {this.state.tabletScreen && (
                    <a
                      href={this.state.tabletScreen.source}
                      onClick={e =>
                        this.handleOpen(e, this.state.tabletScreen._uid)
                      }
                      className="images__link images__link--tablet"
                      title="Tablet View"
                    >
                      <LazyImage
                        src={require(`../../static/img/projects/${slug}/tablet.png?size=227`)}
                        width="227"
                        alt={`${slug} tablet view`}
                        className="images__img"
                        placeholder={({ imageProps, ref }) => (
                          <img
                            ref={ref}
                            className="images__img"
                            width="227"
                            src={require(`../../static/img/projects/${slug}/tablet.png?lqip`)}
                            alt={imageProps.alt}
                          />
                        )}
                        actual={({ imageProps }) => (
                          /* eslint-disable */
                          <img
                            {...imageProps}
                            className="images__img images__img--loaded"
                          />
                          /* eslint-enable */
                        )}
                      />
                    </a>
                  )}
                  {this.state.phoneScreen && (
                    <a
                      href={this.state.phoneScreen.source}
                      onClick={e =>
                        this.handleOpen(e, this.state.phoneScreen._uid)
                      }
                      className="images__link images__link--phone"
                      title="Phone View"
                    >
                      <LazyImage
                        src={require(`../../static/img/projects/${slug}/phone.gif`)}
                        width={this.state.phoneScreen.width}
                        alt={`${slug} phone view`}
                        className="images__img"
                        placeholder={({ imageProps, ref }) => (
                          <img
                            ref={ref}
                            className="images__img"
                            width={this.state.phoneScreen.width}
                            src={require(`../../static/img/projects/${slug}/phone.png?lqip`)}
                            alt={imageProps.alt}
                          />
                        )}
                        actual={({ imageProps }) => (
                          /* eslint-disable */
                          <img
                            {...imageProps}
                            className="images__img images__img--loaded"
                          />
                          /* eslint-enable */
                        )}
                      />
                    </a>
                  )}
                </div>
                <div className="online-source">
                  <div className="text">
                    <p className="text__title">{this.ucfirst(cat)}</p>
                    <p className="text__desc">
                      {!github && (
                        <>
                          This is commercial project and is not available on
                          GitHub.
                        </>
                      )}
                      {!github &&
                        codeFragments.length > 1 &&
                        screens.length > 1 && (
                          <>
                            <br />
                            Code fragments and screens are available.
                          </>
                        )}
                    </p>
                  </div>
                  <div className="buttons">
                    {online && online !== 'commercial' && (
                      <a
                        href={online}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-online button"
                      >
                        See online
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button--outlined"
                      >
                        GitHub
                      </a>
                    )}
                    {codeFragments.length > 1 && (
                      <a
                        href="#code-fragments"
                        onClick={() => this.scrollToSection('#code-fragments')}
                        className="button button--outlined"
                      >
                        Code preview
                      </a>
                    )}
                    {screens.length > 1 && (
                      <a
                        href="#screens"
                        onClick={() => this.scrollToSection('#screens')}
                        className="button button--outlined"
                      >
                        Screens
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {codeFragments.length > 1 && (
              <>
                <SvgIcon icon="colorBar" className="color-bar" />
                <div className="columns code-fragments">
                  <div className="column">
                    <h2 id="code-fragments">Code examples</h2>
                    <div className="columns">
                      {codeFragments.map(fragment => (
                        <figure className="column" key={fragment._uid}>
                          <SyntaxHighlighter language={fragment.lang}>
                            {fragment.content}
                          </SyntaxHighlighter>
                          <figcaption className="file">
                            {fragment.filename}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {screens.length > 1 && (
              <>
                <SvgIcon icon="colorBar" className="color-bar" />
                <div className="columns screens">
                  <div className="column">
                    <h2 id="screens">Screens & Screencasts</h2>
                    <div className="columns">
                      {screens.map(screen => (
                        <figure className="column screen" key={screen._uid}>
                          <a
                            href={screen.source}
                            onClick={e => this.handleOpen(e, screen._uid)}
                            className="screen__link"
                          >
                            <LazyImage
                              src={require(`../../static/img/projects/${slug}/phone.png`)}
                              width={screen.width}
                              alt={screen.title}
                              className="screen__img"
                              placeholder={({ imageProps, ref }) => (
                                <img
                                  ref={ref}
                                  className="screen__img"
                                  width={screen.width}
                                  src={require(`../../static/img/projects/${slug}/phone.png?lqip`)}
                                  alt={imageProps.alt}
                                />
                              )}
                              actual={({ imageProps }) => (
                                /* eslint-disable */
                                <img
                                  {...imageProps}
                                  className="screen__img screen__img--loaded"
                                />
                                /* eslint-enable */
                              )}
                            />
                          </a>
                          <figcaption className="screen__title">
                            {screen.title}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </Layout>
    );
  }
}
