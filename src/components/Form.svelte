<script>
  import SignInButton from "./Login/SignInButton.svelte";

  let agree = false;
  let show = false;
  let email = "";
  let pw = "";
  let repw = "";

  export let signup;
  // Submit Form to Firebase
  // let hashedPw;
  // db = firebase.firestore();
  // function Submit() {
  //     const users = db.collection("users");
  //     let usersRef = users.doc(email);
  //     bcrypt.hash(pw, 11, (err, hash) => {
  //         hashedPw = hash;
  //     });
  //     usersRef.get()
  //     .then((docSnapshot) => {
  //         if (docSnapshot.exists) {
  //             alert('Email have been registed')
  //         } else {
  //         usersRef.set({
  //             email: email,
  //             password: hashedPw
  //         })
  //         alert('Signup successfully!!!')
  //         }
  //     }).catch( () => {
  //         alert('error');
  //     });
  // }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  form {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
    -webkit-box-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 52px;
    width: 50vw;
    width: 22rem;
    background: #fff;
    padding: 10px 42px;
    border-radius: 18px;
    color: #444;
  }
  h1 {
    text-align: center;
    font-size: 2.4rem;
    padding: 12px 0;
  }
  input[type="password"],
  input[type="email"],
  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 16px;
    box-sizing: border-box;
    display: inline-block;
    color: #444;
    background: none !important;
    border: none;
    border-bottom: 2px solid #444;
    font-size: 18px;
    outline: none;
    opacity: 0.4;
    transition: 0.2s;
  }
  input:focus {
    opacity: 1;
  }

  label {
    font-size: 18px;
  }
  button:disabled {
    opacity: 0.5;
  }
  .submit-btn {
    background: none;
    border: 1px solid #444444;
    color: #444444;
    padding: 16px 36px;
    width: 100%;
    margin: 12px 0px;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    z-index: 998;
  }
  .submit-btn::after {
    content: "";
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 100%;
    background: #444;
    transition: 0.3s;
    font-size: 18px;
    z-index: -1;
  }
  .submit-btn:not(:disabled):hover::after,
  .submit-btn:not(:disabled):hover {
    color: #fff;
    left: 0;
    top: 0;
    cursor: pointer;
  }
  .social-btn {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
    -webkit-box-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 20rem;
  }
  .notmatch {
    border-color: red !important;
    position: relative;
    transition: 0.3s;
  }
  .notmatch::after {
    content: "PASSWORD NOT MATCH!";
    font-weight: 900;
    padding: 12px 8px;
    border-radius: 8px;
    color: #fff;
    background: red;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 140%;
    left: 0%;
    border: none;
    z-index: 999;
  }
  @media only screen and (max-width: 880px) {
    .social-btn {
      margin: 12px 0;
    }
  }
</style>

<!-- ########################### CSS Style ################################# -->
<!-- ########################### HTML ################################# -->

<div class="container">
  
  <form action="" method="POST" autocomplete="off">
    {#if signup}
    <h1>ĐĂNG KÝ</h1>
    {:else}
    <h1>Đăng nhập</h1>
    {/if}
    <div>
      <label for="email">
        Email
        <input
          bind:value={email}
          type="email"
          name="email"
          placeholder="enter your email" />
      </label>
      <label for="pw">
        Password
        <input
          style="margin-left: 12px;"
          type="checkbox"
          on:click={() => (show = !show)} />
        show
        {#if show}
          <input bind:value={pw} type="text" name="pw" placeholder="password" />
        {:else}
          <input
            bind:value={pw}
            type="password"
            name="pw"
            placeholder="password" />
        {/if}
      </label>
      {#if signup}
        <label for="confirm-pw" class:notmatch={pw != repw}>
          Confirm password
          <input
            class:notmatch={pw != repw}
            bind:value={repw}
            type="password"
            name="confirm-pw"
            placeholder="confirm password" />
        </label>
      {/if}
      <input type="checkbox" />
      Remember me
      <br />
      {#if signup}
      <input type="checkbox" bind:checked={agree} />
      Agree to our
      <a href=".">Terms & Privacy</a>
      {/if}
      <br />
      {#if signup}
      <button
        class="submit-btn"
        type="submit"
        disabled={!agree || pw != repw || pw == '' || email == ''}>
        Sign up
      </button>
      {:else}
      <button
        class="submit-btn"
        type="submit"
        disabled={pw == '' || email == ''}>
        Sign up
      </button>
      {/if}
    </div>
    <div class="social-btn">
      <SignInButton provider={'google'} />
      <SignInButton provider={'facebook'} />
    </div>
    {#if signup}
    <a href="../login">Đã có tài khoản?</a>
    {:else}
    <a href="../signup">Chưa có tài khoản?</a>
    {/if}
  </form>

</div>
