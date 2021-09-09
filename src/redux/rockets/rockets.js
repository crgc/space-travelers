import axios from 'axios';

const FETCH_ROCKETS = 'rocketstore/rockets/FETCH_ROCKETS';
const REQUEST_FAILURE = 'rocketstore/rockets/REQUEST_FAILURE';

const initialState = {
  rockets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case REQUEST_FAILURE:
      return state;

    default:
      return state;
  }
};

export const getInfo = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchFailure = (err) => ({
  type: REQUEST_FAILURE,
  err,
});

const spaceXAPI = {
  getRockets() {
    const rockets = axios.get('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.data);
    return rockets;
  },
};

export const getRockets = () => (dispatch) => {
  spaceXAPI.getRockets().then((response) => {
    dispatch(getInfo(
      response.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        description: rocket.description,
        image_url: rocket.flickr_images[0],
      })),
    ));
  });
};

export default reducer;
