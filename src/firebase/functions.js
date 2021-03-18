import firebase from 'firebase/app';
import crypto from 'crypto';
import 'firebase/database';

const fetchRealtimeRank = async (_adminId) => {
  const path = `admin/${_adminId}/`;
  const database = firebase.database();
  const tournaments = await database.ref(path).once('value');
  return tournaments.val();
};

const createTournament = async (_adminId, holesData, tournamentName) => {
  const date = new Date();
  const tournamentId = crypto.createHash('sha256').update(date).digest('hex');
  const holes = {};
  Object.keys(holesData).forEach((hole) => {
    const { par, strokeIndex } = holesData[hole];
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
      createDate: String(date),
      updateDate: String(date),
    };
  });

  const data = {
    name: 'Default Name',
    phonenumber: '6666666666',
    holes: holes,
  };
  const path = `admin/${_adminId}/${tournamentId}/`;
  const database = firebase.database();
  await database
    .ref(path)
    .set({ '000': data, isComplete: false, name: tournamentName });
};

const addUser = async (_adminId, _tournamentId, userInfo) => {
  let max = 0;
  const { name, phonenumber } = userInfo;
  const database = firebase.database();
  const holePath = `admin/${_adminId}/${_tournamentId}/000/holes`;
  const userPath = `admin/${_adminId}/${_tournamentId}/`;
  const holesRef = await database.ref(holePath).once('value');
  const usersRef = await database.ref(userPath).once('value');
  const users = usersRef.val();
  Object.keys(users).forEach((userId) => {
    if (userId.length === 3 && Number(userId) > max) {
      max = Number(userId);
    }
  });
  const dummyId = String(max + 1).padStart(3, '0');
  users[dummyId] = {
    name: name,
    phonenumber: phonenumber,
    holes: holesRef.val(),
  };
  await database.ref(userPath).set(users);
};

const deleteUser = async (_adminId, _tournamentId, userId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const dataRef = await database.ref(path).once('value');
  const data = dataRef.val();
  delete data[userId];
  await database.ref(path).set(data);
};

export default { fetchRealtimeRank, createTournament, addUser, deleteUser };
