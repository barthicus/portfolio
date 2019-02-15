/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Socials from './index';

it('renders without crashing', () => {
  shallow(<Socials />);
});
