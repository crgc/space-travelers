import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../pages/Profile'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

it('Profile page renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Profile /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});