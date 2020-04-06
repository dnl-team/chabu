<script>
    import {db} from './firestore.js'
    import bcrypt from 'bcryptjs';

    let agree = false;
    let show = false;
    let email = '';
    let pw = '';
    let repw = '';
    let hashedPw;

    // Submit Form to Firebase
    function Submit() {
        const users = db.collection("users");
        let usersRef = users.doc(email);
        bcrypt.hash(pw, 11, (err, hash) => {
            hashedPw = hash;
        });
        usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                alert('Email have been registed')
            } else {
            usersRef.set({
                email: email,
                password: hashedPw
            }) 
            alert('Signup successfully!!!')
            }
        }).catch( () => {
            alert('error');
        });
    }

</script>

<!-- ########################### CSS Style ################################# -->

<style>
    * {
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
    }

    form {
        display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
        display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
        display: -ms-flexbox;      /* TWEENER - IE 10 */
        display: -webkit-flex;     /* NEW - Chrome */
        display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
        -webkit-box-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        margin: 80px 0 10px 0;
    }
    h1 {
        text-align: center;
        letter-spacing: 5px;
        font-size: 3em;
        padding-top: 35px;
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
        background: none !important;
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
        margin: 20px 0px;
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        z-index: 999;
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
        z-index: -1;
    }
    .submit-btn:not(:disabled):hover::after, .submit-btn:not(:disabled):hover {
        color: #fff;
        left:0;
        top: 0;
        cursor: pointer;
    }
    .social-btn {
        display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
        display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
        display: -ms-flexbox;      /* TWEENER - IE 10 */
        display: -webkit-flex;     /* NEW - Chrome */
        display: flex;
        -webkit-box-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 20rem;
    }
    .google-btn {
        color: #e74c3c;
        background: #fff;
    }
    .facebook-btn {
        background: #3498db;
        color: #fff;
    }
    .facebook-btn, .google-btn {
        width: 100%;
        border-radius: 5px;
        padding: 12px 22px;
        transition: .3s;
        cursor: pointer;
        border: none;
        margin: 10px 0;
    }
    .facebook-btn:hover, .google-btn:hover {
        transform: scale(1.05);
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
        z-index: 999;
    }
    @media only screen and (max-width: 880px) {
        .social-btn {
            margin: 12px 0;
        }
    }

</style>

<!-- ########################### HTML ################################# -->


<div class="container">

    <h1>Sign up</h1>

    <form  action="" method="POST" autocomplete="off">
        <div>
            <label for="email">
                Email
                <input bind:value={email} type="email" name='email' placeholder="enter your email">
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
            <input type="checkbox" bind:checked={agree}>Agree to our <a href='#'>Terms & Privacy</a> <br>
            <button on:click|preventDefault={() => Submit()} class='submit-btn' type="submit" disabled={!agree || pw!=repw || pw=='' || email==''}>Sign up</button>
        </div>
        <div class="social-btn">
            <button class="google-btn"><i class="fab fa-google"></i>Signup with Google</button>
            <button class="facebook-btn"><i class="fab fa-facebook-f"></i>Signup with Facebook</button>
        </div>
    </form>

</div>

