/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
// import renderer from 'react-test-renderer';

import Footer from './index';

describe('With Enzyme', () => {
  it('renders footer', () => {
    const footer = shallow(<Footer />);

    expect(footer.find('.logo .nav__link').text()).toEqual(
      'Bartosz Podgruszecki'
    );
    expect(footer.find('.root-footer__copyrights').text()).toEqual(
      '© 2018 Copyrights by Bartosz Podgruszecki. All Rights Reserved.'
    );
  });
});

// describe('With Snapshot Testing', () => {
//   it('renders footer', () => {
//     const component = renderer.create(<Footer />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
