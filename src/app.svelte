<script>
    import { Router, Route } from '@sveltejs/kit';
    import Login from './routes/Login.svelte';
    import Admin from './routes/Admin.svelte';
    import authState from './stores/authState';
  </script>
  
  {#if $authState === 'loggedIn'}
    <Router>
      <Route path="/admin">
        <Admin />
      </Route>
    </Router>
  {:else}
    <Login />
  {/if}
  