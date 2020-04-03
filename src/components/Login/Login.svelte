<script>
  import { signOut } from '../../providers/firebase'
  import { authStore } from '../../stores/auth'
  import Profile from '../User/Profile.svelte'
  import SignInButton from './SignInButton.svelte'
</script>

<style>
  section {
    margin-bottom: 1rem;
  }
</style>

<section>
  {#if $authStore.status === 'in'}
    <Profile {...$authStore.user} />
    <button on:click={signOut}>Logout</button>
  {:else}
    <SignInButton provider={'google'} />
    <SignInButton provider={'facebook'} />
  {/if}
</section>