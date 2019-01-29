import React from 'react';
import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';
import Header from '../components/Header';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, router };
  }

  componentDidMount() {
    if (!document.documentElement.classList.contains('wf-active')) {
      import('webfontloader').then(WebFontLoader => {
        WebFontLoader.load({
          google: {
            families: ['Rubik:300,400,500:latin-ext', 'Armata']
          }
        });
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Header />
        <PageTransition
          timeout={150}
          classNames="page-transition"
          monkeyPatchScrolling
        >
          <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 150ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 150ms;
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp;
