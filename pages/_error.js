import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/index';

import './error.scss';

export default class Error extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number.isRequired
  };

  static getInitialProps({ res, err }) {
    let statusCode = null;
    if (res) {
      ({ statusCode } = res);
    } else {
      ({ statusCode } = err);
    }
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <section className="section section--error">
          <h1 className="section__title">Page not found</h1>
          <div className="container">
            <p>
              {this.props.statusCode
                ? `An error ${this.props.statusCode} occurred on server.`
                : 'An error occurred on client.'}
            </p>
          </div>
        </section>
      </Layout>
    );
  }
}
