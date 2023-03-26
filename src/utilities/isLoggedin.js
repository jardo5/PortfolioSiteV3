// isLoggedIn.js
import { derived } from 'svelte/store';
import { auth } from '../firebase';
import authState from './authState';

auth.onAuthStateChanged((user) => {
  if (user) {
    authState.set('loggedIn');
  } else {
    authState.set('loggedOut');
  }
});

const isLoggedIn = derived(authState, ($authState) => $authState === 'loggedIn');
export default isLoggedIn;
