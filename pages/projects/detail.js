/* eslint no-underscore-dangle: ["error", { "allow": ["_uid"] }] */
// import axios from 'axios';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
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

// const getImagePlaceholders = async images =>
//   Promise.all(
//     images.map(async image => {
//       const path = image.filename.replace('//a.storyblok.com', '');
//       const url = `https://img2.storyblok.com/10x0${path}?token=1JC7F3RQROnZQiYukvhW5wtt`;
//       const response = await axios.get(url, {
//         responseType: 'arraybuffer'
//       });
//       return {
//         ...image,
//         base64: Buffer.from(response.data, 'binary').toString('base64')
//       };
//     })
//   );

const getScreenByTitle = (screens, title) =>
  screens && screens.find(screen => screen.name === title);

const getImageDimensions = filename => ({
  width: filename
    .match(/\/[0-9]+x[0-9]+\//)[0]
    .split('x')[0]
    .replace('/', ''),
  height: filename
    .match(/\/[0-9]+x[0-9]+\//)[0]
    .split('x')[1]
    .replace('/', '')
});

const getImagesForPhotoswipe = images =>
  images &&
  images.map(image => ({
    src: image.filename,
    w: getImageDimensions(image.filename).width,
    h: getImageDimensions(image.filename).height,
    title: image.name
  }));

export default class ProjectDetailsPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    online: PropTypes.string,
    github: PropTypes.string,
    tags: PropTypes.array,
    code_fragments: PropTypes.array,
    assets: PropTypes.array,
    slug: PropTypes.string.isRequired
  };

  static defaultProps = {
    tags: null,
    online: null,
    github: null,
    code_fragments: null,
    assets: null
  };

  state = {
    isPhotoswipeOpen: false,
    photoswipeIndex: 0
  };

  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query);

    const storyBlockContent = await StoryblokService.get(
      `cdn/stories${asPath}`
    );

    const projectData = storyBlockContent.data.story;

    // const imagePlaceholders = await getImagePlaceholders(
    //   storyBlockContent.data.story.content.assets
    // );

    const screens =
      projectData.content.assets &&
      projectData.content.assets.filter(asset => asset.name !== 'thumb');

    const codeFragments =
      projectData.content.code_fragments &&
      projectData.content.code_fragments.length > 0
        ? projectData.content.code_fragments
        : null;

    const photoswipeConfig = {
      history: false,
      preload: [1, 1],
      showHideOpacity: true,
      mouseUsed: true
    };

    return {
      ...projectData.content,
      slug: projectData.slug,
      screens,
      codeFragments,
      photoswipeScreens: getImagesForPhotoswipe(screens),
      photoswipeConfig,
      thumbnail:
        getScreenByTitle(projectData.content.assets, 'thumb') ||
        (screens && screens[0]),
      phoneScreen: getScreenByTitle(screens, 'phone view'),
      tabletScreen: getScreenByTitle(screens, 'tablet view'),
      desktopScreen: getScreenByTitle(screens, 'desktop view')
      // imagePlaceholders
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
    if (window.location.hash === '') return;
    setTimeout(() => this.scrollToSection(window.location.hash, 500), 1000);
  }

  getMdContent(mdContent, classname) {
    if (!mdContent) return;
    return (
      <div
        /* eslint-disable-next-line */
        dangerouslySetInnerHTML={{ __html: marked(mdContent) }}
        className={classname}
      />
    );
  }

  // Temporary disable dynamic image inlining using base64
  // due to axios CORS problem on Storyblok.com side
  // getImagePlaceholder(filename) {
  //   if (!filename) return;

  //   const { base64 } = this.props.imagePlaceholders.find(
  //     image => image.filename === filename
  //   );
  //   const extension = filename.split('.').pop();
  //   return `data:image/${extension};base64,${base64}`;
  // }

  getImagePlaceholder(filename) {
    if (!filename) return;
    return this.getResizedImage(filename, '10x0', false);
  }

  getResizedImage(filename, newSize, skipGif = true) {
    const extension = filename.split('.').pop();
    const newWidth = newSize.split('x')[0];
    const newHeight = newSize.split('x')[1];
    if (getImageDimensions(filename).width <= newWidth) return filename;
    if (getImageDimensions(filename).height <= newHeight) return filename;
    if (extension === 'gif' && skipGif) return filename;
    const path = filename.replace('//a.storyblok.com', '');
    return `https://img2.storyblok.com/${newSize}${path}`;
  }

  // getScreenIndexByUid(screens, uid) {
  //   return screens.findIndex(screen => screen._uid === uid);
  // }

  getScreenIndexByFilename(screens, filename) {
    return screens.findIndex(screen => screen.filename === filename);
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

  handleOpen = (e, filename) => {
    e.preventDefault();

    const { screens } = this.props;

    this.setState(state => ({
      ...state,
      isPhotoswipeOpen: true,
      photoswipeIndex: this.getScreenIndexByFilename(screens, filename)
    }));
  };

  ucfirst(string) {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const {
      cat,
      online,
      screens,
      photoswipeScreens,
      photoswipeConfig,
      thumbnail,
      phoneScreen,
      tabletScreen,
      desktopScreen,
      title,
      intro,
      desc,
      stack,
      tags,
      released,
      github,
      codeFragments,
      slug
    } = this.props;
    return (
      <Layout>
        <Head
          title={`${title} | Bartosz Podgruszecki Portfolio`}
          description={intro}
        />
        {photoswipeScreens && (
          <PhotoSwipe
            isOpen={this.state.isPhotoswipeOpen}
            items={photoswipeScreens}
            onClose={this.state.handleClose}
            options={{ ...photoswipeConfig, index: this.state.photoswipeIndex }}
          />
        )}
        <section className="section section--project">
          <div className="header">
            {thumbnail && (
              <LazyImage
                src={thumbnail.filename}
                alt={`${slug} tablet view`}
                className="header__bg"
                placeholder={({ imageProps, ref }) => (
                  <img
                    ref={ref}
                    className="header__bg"
                    width="227"
                    src={this.getImagePlaceholder(thumbnail.filename)}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  /* eslint-disable */
                  <img {...imageProps} />
                  /* eslint-enable */
                )}
              />
            )}
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
                  {tags &&
                    tags.map(tag => (
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
                  {desktopScreen && (
                    <a
                      href={desktopScreen.filename}
                      onClick={e => this.handleOpen(e, desktopScreen.filename)}
                      className="images__link images__link--desktop"
                      title={`${title} desktop view`}
                    >
                      <LazyImage
                        src={this.getResizedImage(
                          desktopScreen.filename,
                          '540x0'
                        )}
                        alt={`${title} desktop view`}
                        className="images__img images__img--loaded"
                        placeholder={({ imageProps, ref }) => (
                          <img
                            ref={ref}
                            className="images__img"
                            width="540"
                            src={this.getImagePlaceholder(
                              desktopScreen.filename
                            )}
                            alt={imageProps.alt}
                          />
                        )}
                        actual={({ imageProps }) => (
                          /* eslint-disable */
                          <img {...imageProps} />
                          /* eslint-enable */
                        )}
                      />
                    </a>
                  )}
                  {tabletScreen && (
                    <a
                      href={tabletScreen.filename}
                      onClick={e => this.handleOpen(e, tabletScreen.filename)}
                      className="images__link images__link--tablet"
                      title={`${title} tablet view`}
                    >
                      <LazyImage
                        src={this.getResizedImage(
                          tabletScreen.filename,
                          '227x0'
                        )}
                        alt={`${title} tablet view`}
                        className="images__img images__img--loaded"
                        placeholder={({ imageProps, ref }) => (
                          <img
                            ref={ref}
                            className="images__img"
                            width="227"
                            src={this.getImagePlaceholder(
                              tabletScreen.filename
                            )}
                            alt={imageProps.alt}
                          />
                        )}
                        actual={({ imageProps }) => (
                          /* eslint-disable */
                          <img {...imageProps} />
                          /* eslint-enable */
                        )}
                      />
                    </a>
                  )}
                  {phoneScreen && (
                    <a
                      href={phoneScreen.filename}
                      onClick={e => this.handleOpen(e, phoneScreen.filename)}
                      className="images__link images__link--phone"
                      title={`${title} phone view`}
                    >
                      <LazyImage
                        src={this.getResizedImage(
                          phoneScreen.filename,
                          '107x0'
                        )}
                        width={phoneScreen.width}
                        alt={`${title} phone view`}
                        className="images__img images__img--loaded"
                        placeholder={({ imageProps, ref }) => (
                          <img
                            ref={ref}
                            className="images__img"
                            width={phoneScreen.width}
                            src={this.getImagePlaceholder(phoneScreen.filename)}
                            alt={imageProps.alt}
                          />
                        )}
                        actual={({ imageProps }) => (
                          /* eslint-disable */
                          <img {...imageProps} />
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
                      {!github && codeFragments && screens && (
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
                    {codeFragments && (
                      <a
                        href="#code-fragments"
                        onClick={() => this.scrollToSection('#code-fragments')}
                        className="button button--outlined"
                      >
                        Code preview
                      </a>
                    )}
                    {screens && (
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
            {codeFragments && (
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

            {screens && (
              <>
                <SvgIcon icon="colorBar" className="color-bar" />
                <div className="columns screens">
                  <div className="column">
                    <h2 id="screens">Screens & Screencasts</h2>
                    <div className="columns">
                      {screens.map(screen => (
                        <figure className="column screen" key={screen.filename}>
                          <a
                            href={screen.filename}
                            onClick={e => this.handleOpen(e, screen.filename)}
                            className="screen__link"
                            title={screen.name}
                          >
                            <LazyImage
                              src={this.getResizedImage(
                                screen.filename,
                                '800x0'
                              )}
                              width={screen.width}
                              alt={screen.name}
                              className="screen__img screen__img--loaded"
                              placeholder={({ imageProps, ref }) => (
                                <img
                                  ref={ref}
                                  className="screen__img"
                                  width={screen.width}
                                  src={this.getImagePlaceholder(
                                    screen.filename
                                  )}
                                  alt={imageProps.alt}
                                />
                              )}
                              actual={({ imageProps }) => (
                                /* eslint-disable */
                                <img {...imageProps} />
                                /* eslint-enable */
                              )}
                            />
                          </a>
                          <figcaption className="screen__title">
                            {screen.name}
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
