/* eslint-env jest */

import { shallow, mount } from 'enzyme';
import React from 'react';

import SvgIcon from './index';

it('renders without crashing', () => {
  shallow(<SvgIcon icon="test" />);
});

it('includes text label if no svg icon was found', () => {
  const svgIcon = shallow(<SvgIcon icon="test" />);
  expect(svgIcon.find('.no-svg').text()).toEqual('test');
});

it('includes SVG element if svg icon was found', () => {
  const svgIcon = mount(<SvgIcon icon="arrowUp" />);
  expect(svgIcon.find('svg')).toHaveLength(1);
});
