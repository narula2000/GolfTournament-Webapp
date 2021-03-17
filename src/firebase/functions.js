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
  const path = `admin/${_adminId}/${_tournamentId}/000/`;
  const database = firebase.database();
  await database.ref(path).set(data);
};

const addUser = async (_adminId, _tournamentId, userInfo) => {
  let max = 0;
  const { name, phonenumber } = userInfo;
  const database = firebase.database();
  const holePath = `admin/${_adminId}/${_tournamentId}/000/holes`;
  const userPath = `admin/${_adminId}/${_tournamentId}/`;
  const holes = await database.ref(holePath).once('value');
  const users = await database.ref(userPath).once('value');
  Object.keys(users).forEach((userId) => {
    if (userId.length === 3 && Number(userId) > max) {
      max = Number(userId);
    }
  });
  users[max + 1] = { name: name, phonenumber: phonenumber, holes: holes };
  await database.ref(userPath).set(users);
};

const deleteUser = async (_adminId, _tournamentId, userId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const data = await database.ref(path).once('value');
  delete data[userId];
  await database.ref(path).set(data);
};

export default { createTournament, addUser, deleteUser };
