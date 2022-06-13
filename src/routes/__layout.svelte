<script>
  import "$root/styles/styles.scss";
  import { session } from "$app/stores";
  import { dev } from "$app/env";

  import Login from "$root/components/auth/login.svelte";
  import Logout from "$root/components/auth/logout.svelte";
</script>

<svelte:head>
  <title>SvelteKit Auth</title>
</svelte:head>

<nav>
  {#if dev}
    <h1>YOU'RE IN DEV YOU DUMMY</h1>
  {/if}

  {#if !$session}
    <Login />
  {/if}

  {#if $session}
    <Logout />
  {/if}

  <p>Session: {JSON.stringify($session)}</p>
</nav>

<slot />
