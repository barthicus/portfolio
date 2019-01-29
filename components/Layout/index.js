import Router from 'next/router';
import withGA from 'next-ga';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import RwdInfo from '../RwdInfo';
import StoryblokService from '../../utils/StoryblokService';

import './scss/index.scss';

const isDevMode = process.env.NODE_ENV !== 'production';

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <ScrollToTop />
    {isDevMode && <RwdInfo />}
    <Footer />
    {StoryblokService.bridge()}
  </>
);

export default withGA('UA-60021113-3', Router)(Layout);
