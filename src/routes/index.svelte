<svelte:head>
	<title>Chabu - Nơi quản lí việc học, và học nhóm online hiệu quả</title>
</svelte:head>
<main>
    <div class='intro'>
        <h1>Chabu</h1>
        <p>Nơi quản lí việc học, và học nhóm online hiệu quả</p>
        <div class="intro__btn">
            <a href="/signup" class='signup-btn'>Đăng kí ngay</a>
            <a href="." class='learnmore-btn'>Tìm hiểu thêm</a>
        </div>
        
    </div>
    
</main>

<style>

	* {
		margin:0;
		padding:0;
	}
    .intro {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: 7rem;
        letter-spacing: 5px;
        position: relative;
        opacity: 0;
        animation: fadein 0.6s 0.4s forwards;

    }
    .intro p {
        opacity: 0;
        font-size: 18px;
        letter-spacing: 2px;
        padding: 6px;
        text-align: justify;
        position: relative;
        animation: fadein 0.7s 0.6s forwards;
    }
    h1::after, .intro p::after {
        content: '';
        width: 100%;
        height: 100%;
        background: #444;
        position: absolute;
        top:0;
        left:0;
        z-index: 9999;
        animation: swipe 1s ease-in-out forwards;
        opacity: 0;
    }
    
    h1::after {
        animation-delay: 0.3s;
    }
    .intro p::after {
        animation-delay: 0.6s;
    }
    
    .intro__btn {
        display: flex;
        justify-content: space-between;
    }
    .signup-btn, .learnmore-btn {
        margin: 0 16px;
        margin-top: 22px;
        padding: 12px 32px;
        border: 1px solid #444;
        font-size: 22px;
        border-radius: 8px;
        animation: appear 1s;
    }
    
    .signup-btn {
        color: #3498db;
        border: 1px solid #3498db;
        transition: .3s ease;
    }
    .signup-btn:hover {
        color: #fff;
        background: #3498db;
    }
    .learnmore-btn {
        border: none;
        color: #fff;
        background:#e74c3c;
    }
    @keyframes appear {
        from {
            opacity:0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes fadein {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }   
    }
    @keyframes swipe {
        0% {
            opacity: 0;
            width: 100%;
        }
        10% {
            opacity: 1;
            width: 100%;
        }
        to {
            opacity: 1;
            width: 0%;
        }
    }
    @media only screen and (max-width: 500px) {
        .intro__btn {
            flex-direction: column;
        }
    }
</style>