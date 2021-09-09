import {
  FETCH_MISSIONS, REQUEST_FAILURE,
} from './missionsTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          reserved: true,
        };
      });
      return newState;
    }
    case REQUEST_FAILURE:
      return state;

    default:
      return state;
  }
};

export default reducer;
