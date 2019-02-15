/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Layout from './index';

it('renders without crashing', () => {
  shallow(
    <Layout>
      <></>
    </Layout>
  );
});
