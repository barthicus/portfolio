/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Header from './index';

describe('With Enzyme', () => {
  it('renders header', () => {
    const header = shallow(<Header />);

    expect(header.find('.navbar')).toBeDefined();
    // expect(header.find('.navbar').text()).toEqual('BARTOSZ PODGRUSZECKI');
  });
});
