<!-- src/routes/admin/edit/[slug]/+page.svelte -->
<script context="module">
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';
  import { getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
  import { getDownloadURL, ref } from 'firebase/storage';
  import { db, storage } from '../../firebase';
  import { goto } from '$app/navigation';
  import isLoggedIn from '../../utilities/isLoggedIn';
  import { getDoc, setDoc } from 'firebase/firestore';
  

  onMount(function() {
    if (!isLoggedIn) {
      goto('/login');
      return;
    }
  });

  export async function load({ params }){
    const docSnap = await doc(db, 'projects', params.projectId);
    if (!docSnap.exists()) {
        return {
            status: 404,
            redirect: "/admin"
        }
        } else {
            return {
              status: 200,
              props: {
                blog: { ...docSnap.data(), id: docSnap.id }
          }
      };

  }

</script>

{#if project}
  <h1>{project.title}</h1>
  <!-- Edit the project information -->
  <button on:click={saveChanges}>Save Changes</button>
{:else}
  <p>Loading...</p>
{/if}