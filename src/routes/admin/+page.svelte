<script>
    import { onMount } from 'svelte';
    import { auth } from '../../firebase';
    import { goto } from '$app/navigation';
    import { writable } from 'svelte/store';
    
    const isLoggedIn = writable(false);
  
    onMount(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          isLoggedIn.set(true);
          goto('/admin');
        } else {
          isLoggedIn.set(false);
          goto('/login');
        }
      });
  
      return () => {
        unsubscribe();
      }
    });
  </script>
  <div>
    sdsdsdsds
  </div>
  
  