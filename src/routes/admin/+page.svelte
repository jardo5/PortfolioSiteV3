<script>
  import { onMount } from 'svelte';
  import { auth } from '../../firebase';
  import { goto } from '$app/navigation';
  import isLoggedIn from '../../utilities/isLoggedIn';

  onMount(() => {
    if (!$isLoggedIn) {
      goto('/login');
    }
  });
</script>

<div>
  sdsdsdsd
</div>
