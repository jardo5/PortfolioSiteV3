import { writable } from 'svelte/store';
import { auth } from '../../firebase';

const authState = writable('initializing');

auth.onAuthStateChanged((user) => {
  if (user) {
    authState.set('loggedIn');
  } else {
    authState.set('loggedOut');
  }
});

export default authState;
