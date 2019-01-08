import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import RwdInfo from '../RwdInfo';
import './scss/index.scss';

const Layout = props => (
  <>
    <Head>
      <title>Portfolio</title>
      <meta name="description" content="Moje portfolio." />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#05DFC6" />
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:300,400,500&amp;subset=latin-ext&family=Armata"
        rel="stylesheet"
      />
      <link rel="icon" href="/static/img/favicon.png" />
      <link rel="apple-touch-icon-precomposed" href="/static/img/favicon.png" />
    </Head>
    <Header />
    <main>{props.children}</main>
    <ScrollToTop />
    <RwdInfo />
    <Footer />
  </>
);

export default Layout;
