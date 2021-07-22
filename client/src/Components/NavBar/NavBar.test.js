import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './NavBar';

configure({adapter: new Adapter()});

describe('<NavBar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('Deberia renderizar Dos <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });
  it('El primer Link deberia cambiar a la ruta /home', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home'); 
  });
})