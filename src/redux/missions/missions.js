import {
  FETCH_MISSIONS, JOIN_MISSION, REQUEST_FAILURE, LEAVE_MISSION,
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
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          reserved: false,
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
