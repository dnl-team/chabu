<script>
  import { signInWithFacebook, signInWithGoogle } from '../../providers/firebase/auth'
  export let provider
</script>


{#if provider === 'google'}
  <button on:click={signInWithGoogle} class="google">
    Sign in with Google
  </button>
{:else if provider === 'facebook'}
  <button on:click={signInWithFacebook} class="facebook">
    Sign in with facebook
  </button>
{:else}
  <div>No provider was provided as a prop</div>
{/if}

<style>
  .google, .facebook {
    font-size: 1.2rem;
    font-family: Roboto;
    width: 100%;
    border-radius: 32px;
    padding: 12px 22px;
    transition: .3s;
    cursor: pointer;
    border: none;
    margin: 10px 0;
  }
  .google {
    color: #fff;
    background: #0984e3;
  }
  .facebook {
    background: #4267b2;
    color: #fff;
  }
  .facebook:hover, .google:hover {
    transform: scale(1.05);
  }
</style>