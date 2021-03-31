/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import firebase from 'firebase/app';
import admin from 'firebase-admin';
import crypto from 'crypto';
import 'firebase/database';

const fetchRealtimeRank = async (adminId) => {
  const path = `admin/${adminId}/`;
  const database = firebase.database();
  const tournaments = await database.ref(path).once('value');
  return tournaments.val();
};

const deleteTournament = async (adminId, tournamentId) => {
  const path = `admin/${adminId}/${tournamentId}/`;
  const tournamentListPath = `tournament/`;
  const database = firebase.database();
  const tournamentListRef = await database
    .ref(tournamentListPath)
    .once('value');
  const tournamentList = tournamentListRef.val();
  let delId = '';
  Object.keys(tournamentList).forEach((key) => {
    if (tournamentList[key].id === tournamentId) delId = key;
  });
  delete tournamentList[delId];
  await database.ref(tournamentListPath).set(tournamentList);
  await database.ref(path).set({});
};

const createTournament = async (adminId, holesData, tournamentName) => {
  const date = new Date().toISOString();
  const tournamentId = crypto.createHash('sha256').update(date).digest('hex');
  const holes = {};
  Object.keys(holesData).forEach((hole) => {
    const { par, strokeIndex } = holesData[hole];
    holes[hole] = {
      par: par,
      strokeIndex: strokeIndex,
      score: 0,
      stroke: 0,
      sandShot: 0,
      sandSave: false,
      penalty: 0,
      fairway: null,
      gir: false,
      putt: 0,
      upDown: false,
      createDate: date,
      updateDate: date,
    };
  });

  const data = {
    name: 'Default Name',
    phonenumber: '6666666666',
    holes: holes,
  };
  const path = `admin/${adminId}/${tournamentId}/`;
  const tournamentListPath = `tournament/`;
  const database = firebase.database();
  const tournamentListRef = await database.ref(tournamentListPath).push();
  await tournamentListRef.set({ id: tournamentId });
  await database
    .ref(path)
    .set({ '000': data, isComplete: false, name: tournamentName });
};

const addUser = async (adminId, tournamentId, userInfo) => {
  let max = 0;
  const { name, phonenumber } = userInfo;
  const database = firebase.database();
  const holePath = `admin/${adminId}/${tournamentId}/000/holes`;
  const userPath = `admin/${adminId}/${tournamentId}/`;
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

const deleteUser = async (adminId, tournamentId, userId) => {
  const path = `admin/${adminId}/${tournamentId}/`;
  const database = firebase.database();
  const dataRef = await database.ref(path).once('value');
  const data = dataRef.val();
  delete data[userId];
  await database.ref(path).set(data);
};

const deleteUsers = async (validUserId, tournament) => {
  let idx = '001';
  const toMigrate = {};
  const adminAuth = admin.auth();
  validUserId.forEach(async (validId) => {
    toMigrate[idx] = tournament[validId];
    idx = String(Number(idx) + 1).padStart(3, '0');
    await adminAuth.deleteUser(validId);
  });
};

const removeTournamentFromList = async (tournamentId) => {
  const database = firebase.database();
  const tournamentListPath = `tournament/`;
  const tournamentListRef = await database
    .ref(tournamentListPath)
    .once('value');
  const tournamentList = tournamentListRef.val();
  let delId = '';
  Object.keys(tournamentList).forEach((key) => {
    if (tournamentList[key].id === tournamentId) delId = key;
  });
  delete tournamentListRef[delId];
  await database.ref(tournamentListPath).set(tournamentList);
};

const completeTournament = async (adminId, tournamentId) => {
  const path = `admin/${adminId}/${tournamentId}/`;
  const database = firebase.database();
  const dataRef = await database.ref(path).once('value');
  const tournament = dataRef.val();
  const validUserId = Object.keys(tournament).map((userId) => {
    if (userId.length > 3) return userId;
  });
  await deleteUsers(validUserId, tournament);
  await removeTournamentFromList(tournamentId);
};

export default {
  fetchRealtimeRank,
  deleteTournament,
  createTournament,
  addUser,
  deleteUser,
  completeTournament,
};
