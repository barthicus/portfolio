/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Header from './index';

it('renders without crashing', () => {
  shallow(<Header router={{}} />);
});
