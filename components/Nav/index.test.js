/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Nav from './index';

it('renders without crashing', () => {
  shallow(<Nav router={{}} />);
});
