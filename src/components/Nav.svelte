<script>
	let isOpen = false;

	let change = () => {
		isOpen = !isOpen;
	}

</script>

<nav class='nav'>
	
	<div class='nav__logo'> 
		<a href=".">Chabu</a>
	</div>
	<label on:click={change} for="nav-btn" class='nav-btn'>
		<i></i>
		<i></i>
		<i></i>
	</label>
	<input type="checkbox" name='nav-btn' id='nav-btn'>

	<div class:open={isOpen} class="nav__menu">
		<div class="nav__menu__links">
			<a href="." on:click={change}>Trang chủ</a>
			<a href="about" on:click={change}>About</a>
			<a href="/howtouse" on:click={change}>Cách dùng</a>
			<a href="/contact" on:click={change}>Liên hệ</a>
		</div>
		<div class="nav__login-btn">
			<a href="/login" on:click={change}>Đăng&nbsp;nhập</a>
		</div>
	</div>

	
</nav>

<style>
	* {
		color: #444;
		padding: 0;
		margin: 0;
	}
	input[name='nav-btn'] {
		position: absolute;
		visibility: hidden;
	}
	nav {
		z-index: 999;
		display: flex;
		width: 100%;
		height: 80px;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		font-family: Roboto;
	}
	.nav__logo {
		margin-left: 32px;
		font-size: 2.5rem;
		font-weight: 900;
		font-family: 'Lobster Two';
	}
	.nav__menu {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.nav__menu__links {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.nav__menu__links a {
		margin: 0 32px;
		letter-spacing: 6px;
		position: relative;
		overflow: hidden;
	}
	.nav__menu__links a::after {
		content: '';
		position: absolute;
		width: 95%;
		height: 3px;
		bottom: -2px;
		left: -100%;
		background: #444;
		transition: .3s;
	}
	.nav__menu__links a:hover::after {
		left: 0;
	}	
	.nav__login-btn {
		margin-right: 42px;
	}
	.nav__login-btn a {
		border: 3px solid #444;
		padding: 12px 36px;
		border-radius: 12px;
		transition: .3s;
	}
	.nav__login-btn a:hover {
		background: #444;
		color: #fff;
	}
	@media only screen and (max-width: 768px) {
		.nav__menu {
			width: 100%;
			height: 100vh;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: #eee;
			position: fixed;
			top: 0;
			margin-left: 100%;
			transition: all ease-out .4s
		}
		.nav__menu__links {
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			font-size: 3rem;
		}
		.nav__menu__links a{
			margin: 22px 0;
		}
		.nav__login-btn {
			margin: 42px 0;
			font-size: 2rem;
			border-color: #fff;
		}
		.nav-btn i {
			border: 2px solid #000;
			width: 26px;
			display: block;	
			margin: 5px;
		}
		.nav-btn {
			margin-right: 22px;
			z-index: 999;
		}
		.open {
			margin-left: 0%;
		}
	}
</style>