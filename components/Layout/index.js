import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import RwdInfo from '../RwdInfo';
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
    <RwdInfo />
    <Footer />
  </>
);

export default Layout;
