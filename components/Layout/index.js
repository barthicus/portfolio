import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './scss/index.scss';

const Layout = props => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:300,400,500&amp;subset=latin-ext&family=Armata"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main>{props.children}</main>
    <ScrollToTop />
    <Footer />
  </>
);

export default Layout;
