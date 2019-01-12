import Head from './Head';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import RwdInfo from '../RwdInfo';
import StoryblokService from '../../utils/StoryblokService';
import './scss/index.scss';

const Layout = ({ children }) => (
  <>
    <Head title="Portfolio" description="Portfolio" />
    <main>{children}</main>
    <ScrollToTop />
    <RwdInfo />
    <Footer />
    {StoryblokService.bridge()}
  </>
);

export default Layout;
