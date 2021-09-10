import axios from 'axios';

const RESERVE_ROCKET = 'rocketstore/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'rocketstore/rockets/CANCEL_RESERVATION';
const FETCH_ROCKETS = 'rocketstore/rockets/FETCH_ROCKETS';
const REQUEST_FAILURE = 'rocketstore/rockets/REQUEST_FAILURE';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case REQUEST_FAILURE:
      return state;
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }

        return { ...rocket, reserved: true };
      });

      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }

        return { ...rocket, reserved: false };
      });

      return newState;
    }

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

export const reserve = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancel = (id) => ({
  type: CANCEL_RESERVATION,
  id,
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
        reserved: false,
      })),
    ));
  });
};

export default reducer;
