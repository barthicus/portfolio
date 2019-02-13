/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import SvgIcon from './index';

it('renders without crashing', () => {
  shallow(<SvgIcon />);
});
