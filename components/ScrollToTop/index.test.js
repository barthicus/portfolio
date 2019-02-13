/* eslint-env jest */

import { shallow, mount } from 'enzyme';
import React from 'react';

import ScrollToTop from './index';
import SvgIcon from '../SvgIcon';

it('renders without crashing', () => {
  shallow(<ScrollToTop />);
});

it('includes <SvgIcon />', () => {
  const scrollToTop = mount(<ScrollToTop />);
  expect(
    scrollToTop.containsMatchingElement(
      <SvgIcon icon="arrowUp" className="scrolltop__svg" />
    )
  ).toEqual(true);
});

it('includes text label', () => {
  const scrollToTop = shallow(<ScrollToTop />);
  expect(scrollToTop.find('.scrolltop__text').text()).toEqual('to top');
});
