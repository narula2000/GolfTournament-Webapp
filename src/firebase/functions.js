import firebase from 'firebase/app';
import 'firebase/database';

const createTournament = async (_adminId, _tournamentId, holesData) => {
  const holes = {};
  Object.keys(holesData).forEach((hole) => {
    const { par, strokeIndex } = holesData.hole;
    holes[hole] = {
      par: par,
      strokeIndex: strokeIndex,
      score: 0,
      stroke: par,
      sandShot: 0,
      sandSave: false,
      penalty: 0,
      fairway: null,
      gir: false,
      putt: 0,
      createDate: new Date(),
      updateDate: new Date(),
    };
  });

  const data = {
    name: 'Default Name',
    phonenumber: '6666666666',
    holes: holes,
  };
  const path = `admin/${_adminId}/${_tournamentId}/000`;
  const database = firebase.database();
  database.ref(path).set(data);
};

export default createTournament;
