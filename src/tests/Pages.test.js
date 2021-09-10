import React from 'react';
import renderer from 'react-test-renderer';
import Rockets from '../pages/Rockets'
import Missions from '../pages/Missions'
import Profile from '../pages/Profile'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

/* describe('Pages render correctly', () => {
  it('when Rockets page is rendered', () => {
    const tree = renderer
      .create(<Provider store={store}><Rockets /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('when Missions page is rendered', async () => {
    const tree = renderer
      .create(<Provider store={store}><Missions /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('when Profile page is rendered', () => {
    const tree = renderer
      .create(<Provider store={store}><Profile /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
}); */

it('when Rockets page is rendered', () => {
  const tree = renderer
    .create(<Provider store={store}><Rockets /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});