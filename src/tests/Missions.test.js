import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../pages/Missions';
import store from '../redux/configureStore';

it('Missions page renders correctly', async () => {
  const tree = renderer
    .create(<Provider store={store}><Missions /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
