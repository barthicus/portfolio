/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import ProjectsList from './index';

it('renders without crashing', () => {
  shallow(<ProjectsList projects={[]} />);
});
