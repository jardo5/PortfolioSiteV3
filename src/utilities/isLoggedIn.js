import { derived } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import authState from './authState';

onAuthStateChanged(auth, (user) => {
	if (user) {
		authState.set('loggedIn');
	} else {
		authState.set('loggedOut');
	}
});

const isLoggedIn = derived(authState, ($authState) => $authState === 'loggedIn');

export default isLoggedIn;
