<script>
	import isLoggedIn from '../../utilities/isLoggedIn';
	import Login from '../../components/login.svelte';
	import {
		browserLocalPersistence,
		setPersistence,
		signInWithEmailAndPassword
	} from 'firebase/auth';
	import { onMount } from 'svelte';
	import { auth, userDoc } from '../../firebase';
	import { goto } from '$app/navigation';
	import { setDoc } from 'firebase/firestore';
	import { writable } from 'svelte/store';

	const errorMessage = writable('');

	const errorMessages = [
		'Please Stop',
		'No really, stop it',
		'Got nothing better to do?',
		'Ok last warning stop....or else'
	];

	onMount(() => {
		$isLoggedIn && goto('/admin');
	});

	async function signIn(event) {
		try {
			await setPersistence(auth, browserLocalPersistence);
			let user = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password);
			await setDoc(userDoc(auth.currentUser.uid), {
				username: user.user.displayName,
				email: user.user.email
			});
			goto('./admin');
		} catch (error) {
			console.log('Error signing in: ', error);
			const currentMessageIndex = errorMessages.indexOf($errorMessage);
			if (currentMessageIndex < errorMessages.length - 1) {
				errorMessage.set(errorMessages[currentMessageIndex + 1]);
			} else {
				goto('/');
			}
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex h-screen w-full items-center justify-center">
	<div class="flex h-full w-full flex-col items-center rounded-md p-8">
		<span
			class="absolute my-2 animate-pulseFade text-center text-8xl font-extrabold text-red-600"
			class:visible={$errorMessage != ''}
		>
			{$errorMessage}
		</span>
		<Login on:login={signIn} />
	</div>
</div>
