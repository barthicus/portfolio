/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
// import renderer from 'react-test-renderer';

import Footer from './index';
// import Socials from '../Socials';
// import Nav from '../Nav';

it('renders without crashing', () => {
  shallow(<Footer />);
});

// it('includes <Socials />', () => {
//   const footer = mount(<Footer />);
//   expect(footer.containsMatchingElement(<Socials />)).toEqual(true);
// });

// it('includes <Nav />', () => {
//   const footer = mount(<Footer />);
//   expect(footer.containsMatchingElement(<Nav />)).toEqual(true);
// });

it('includes home nav link', () => {
  const footer = shallow(<Footer />);
  expect(footer.find('.logo .nav__link').text()).toEqual(
    'Bartosz Podgruszecki'
  );
});

it('includes copyrights', () => {
  const footer = shallow(<Footer />);
  expect(footer.find('.root-footer__copyrights').text()).toEqual(
    '© 2018 Copyrights by Bartosz Podgruszecki. All Rights Reserved.'
  );
});
