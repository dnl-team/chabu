<script>
	import Nav from './Nav.svelte'
    export let segment;
    let formInput = [
        {value: '', type: 'email', name: 'email', content: 'Email'},
        {value: '', type: 'password', name: 'password', content: 'Password'},
        {value: '', type: 'password', name: 'confirm-password', content: 'Retype password'}
    ];

    let agree = false;
    let show = false;
    let pw = '';
    let repw = '';
    let value = '';
    t = 'password';
    $: type = show ? 'text' : 'password'

    function t() {
        console.log(pw);
    }
</script>

<style>

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 0px 20px;
    }
    h1 {
        text-align: center;
        letter-spacing: 5px;
    }
    input[type='password'],
    input[type='email'],
    input[type='text']{
        width: 100%;
        padding: 12px 20px;
        margin-bottom: 16px;
        box-sizing: border-box;

        display: inline-block;
        color:#fff;
        background: none;
        border: none;
        border-bottom: 2px solid #ccc;
        font-size: 18px;
        outline: none;
        opacity: 0.5;
        transition: 0.2s;
    }
    input:focus {
        opacity: 1;
    }
    ::placeholder {
        color: #fff;
    }
    label {
        font-size: 18px;
    }
    button:disabled {
        opacity: 0.5;
    }
    .submit-btn {
        background: none;
        border: 1px solid #2ecc71;
        color: #2ecc71;
        padding: 16px 36px;
        width: 100%;
        margin: 10px 0px;
        position: relative;
        overflow: hidden;
        border-radius: 6px;
    }
    .submit-btn::after {
        z-index: -11;
        content:'';
        width: 110%;
        height: 110%;
        position: absolute;
        left:0;
        top: 100%;
        background: #2ecc71;
        transition: .3s;
        font-size: 18px;
    }
    .submit-btn:not(:disabled):hover::after, .submit-btn:not(:disabled):hover {
        color: #fff;
        left:0;
        top: 0;
        cursor: pointer;
    }
    .social-btn {
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        width: 320px;
    }
    .google-btn {
        width: 100%;
        background: none;
        border-radius: 5px;
        border: 1px solid #e74c3c;
        color: #e74c3c;
        padding: 12px 22px;
        transition: .3s;
        cursor: pointer;
    }
    .facebook-btn {
        width: 100%;
        background: none;
        border-radius: 5px;
        border: 1px solid #3498db;
        color: #3498db;
        padding: 12px 22px;
        transition: .3s;
        cursor: pointer;
    }
    .google-btn:hover {
        background: #e74c3c;
        color: #fff;
    }
    .facebook-btn:hover {
        background: #3498db;
        color:#fff;
    }
    .fab {
        margin-right: 32px;
    }
    .notmatch {
        border-color: red !important;
        position: relative;
        transition: .3s;

    }
    .notmatch::after {
        content: "PASSWORD NOT MATCH!";
        font-weight: 900;
        padding: 12px 8px;
        border-radius: 8px;
        color: #c0392b;
        background: #ecf0f1;
        text-align: center;
        position: absolute;
        width: 200px;
        top:100%;
        left:25%;
        border: none;
    }

</style>


<Nav {segment}/>
<form action="">
    <h1>Sign up</h1>
    <div>
        <label for="email">
            Email
            <input type="email" name='email' placeholder="enter your email">
        </label>
        <label for="pw">
            Password
            <input style="margin-left: 12px;" type="checkbox" on:click="{() => show=!show}"> show
            {#if show}
                <input bind:value={pw} type='text' name='pw' placeholder="password">
            {:else}
                <input bind:value={pw} type='password' name='pw' placeholder="password">
            {/if}
        </label>
        <label for="confirm-pw" class:notmatch={pw != repw}>
            Confirm password
            <input class:notmatch={pw != repw} bind:value={repw}  type="password" name='confirm-pw' placeholder="confirm password">
        </label>
        <input type="checkbox"> Remember me <br/>
        <input type="checkbox" bind:checked={agree}> By creating an account you agree to our <a href='#'>Terms & Privacy</a> <br>
        <button class='submit-btn' type="submit" disabled={!agree}>Sign up</button>
    </div>
    <div class="social-btn">
        <button class="google-btn"><i class="fab fa-google"></i>Signup with Google</button>
        <button class="facebook-btn"><i class="fab fa-facebook-f"></i>Signup with Facebook</button>
    </div>
</form>

