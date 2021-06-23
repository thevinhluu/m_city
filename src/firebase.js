import firebase from 'firebase/app';
import 'firebase/auth';

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

export { firebase };
