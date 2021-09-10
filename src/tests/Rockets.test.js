import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../pages/Rockets';
import store from '../redux/configureStore';

it('Rockets renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Rockets /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
