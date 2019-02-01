/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({ title, description, children }) => (
  <>
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#05DFC6" />
      <link rel="icon" href={require('../../static/img/favicon.png')} />
      <link
        rel="apple-touch-icon-precomposed"
        href={require('../../static/img/favicon.png')}
      />
      {children}
    </NextHead>
  </>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};

Head.defaultProps = {
  title: '',
  description: '',
  children: null
};

export default Head;
