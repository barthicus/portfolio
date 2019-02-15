/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Intro from './index';

it('renders without crashing', () => {
  shallow(<Intro />);
});
