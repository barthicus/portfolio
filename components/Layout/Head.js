/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import NextHead from 'next/head';

const Head = props => (
  <>
    <NextHead>
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || ''} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#05DFC6" />
      <link rel="icon" href={require('../../static/img/favicon.png')} />
      <link
        rel="apple-touch-icon-precomposed"
        href={require('../../static/img/favicon.png')}
      />
      <meta name="robots" content="noindex" />
      {props.children}
    </NextHead>
  </>
);

export default Head;
