<script>
    import Login from '../../components/login.svelte';
    import { writable } from 'svelte/store';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { browserLocalPersistence, setPersistence } from 'firebase/auth';
    import { auth } from '../../firebase';
    import { setDoc } from 'firebase/firestore';
    import { userDoc } from '../../firebase';
    import { goto } from '$app/navigation';
  
    const authStatus = writable({ loggedIn: false, errorMessage: '' });
  
    let email = '';
    let password = '';
  
    async function signIn(event) {
  console.log('Email:', event.detail.email);
  console.log('Password:', event.detail.password);
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredential = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password);
    await setDoc(userDoc(userCredential.user.uid), { email: userCredential.user.email });
    authStatus.set({ loggedIn: true, errorMessage: '' }); // Update auth status
    goto('/admin');
  } catch (error) {
    console.log(error);
    authStatus.set({ loggedIn: false, errorMessage: error.message }); // Update auth status with error message
  }
}

  </script>

<svelte:head>
    <title>
        Login
    </title>
</svelte:head>

<div class="h-full w-full flex justify-center items-center">
    <div class="h-full w-full p-8 rounded-md flex flex-col items-center">
      {#if $authStatus.errorMessage}
        <p class="text-red-600 font-extrabold text-2xl my-2 text-center">
          {$authStatus.errorMessage}
        </p>
      {/if}
      <Login on:login={signIn} />
    </div>
  </div>
  