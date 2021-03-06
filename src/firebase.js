import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
	apiKey            : 'AIzaSyD0POfyqJBW5F2JndDkZITDHQCiGAsTL60',
	authDomain        : 'mcity-8ddd1.firebaseapp.com',
	projectId         : 'mcity-8ddd1',
	storageBucket     : 'mcity-8ddd1.appspot.com',
	messagingSenderId : '831777453930',
	appId             : '1:831777453930:web:88b28081e21d65d478d713',
	measurementId     : 'G-TDP7CEL61C'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach((item) => {
// 	matchesCollection.add(item);
// });

// cityDb.players.forEach((item) => {
// 	playersCollection.add(item);
// });

// cityDb.positions.forEach((item) => {
// 	positionsCollection.add(item);
// });

// cityDb.promotions.forEach((item) => {
// 	promotionsCollection.add(item);
// });

// cityDb.teams.forEach((item) => {
// 	teamsCollection.add(item);
// });

export { firebase, matchesCollection, playersCollection, positionsCollection, promotionsCollection, teamsCollection };
