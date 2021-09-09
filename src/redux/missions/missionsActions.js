import axios from 'axios';
import {
  REQUEST_FAILURE, FETCH_MISSIONS, JOIN_MISSION, LEAVE_MISSION,
} from './missionsTypes';

export const getInfo = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const fetchFailure = (err) => ({
  type: REQUEST_FAILURE,
  err,
});

export const join = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leave = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const spaceXAPI = {
  getMissions() {
    const missions = axios.get('https://api.spacexdata.com/v3/missions')
      .then((response) => response.data);
    return missions;
  },
};

export const getMissions = () => (dispatch) => {
  spaceXAPI.getMissions().then((response) => {
    dispatch(getInfo(
      response.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      })),

    ));
  });
};
