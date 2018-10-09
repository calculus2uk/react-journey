import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

//Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

const firebaseConfig = {
  apiKey: 'AIzaSyCX1TJVtVUFg8VGkaWH8BdsLsHPXVLgmXk',
  authDomain: 'reactclientpanel-832bb.firebaseapp.com',
  databaseURL: 'https://reactclientpanel-832bb.firebaseio.com',
  projectId: 'reactclientpanel-832bb',
  storageBucket: 'reactclientpanel-832bb.appspot.com',
  messagingSenderId: '106842823148'
};

// react-reducx-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance

firebase.initializeApp(firebaseConfig);

//Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

//Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument, rfConfig as optional second
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

// Check for settings in localStorage

if (localStorage.getItem('settings') === null) {
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };

  //SET TO localStorage
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}
// Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
