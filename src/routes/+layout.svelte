<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
</script>

<body class="flex h-screen w-full flex-col overflow-clip">
	<Navigation />
	<section
		class="flex min-h-[calc(100vh-22rem)] w-full flex-col items-center justify-center bg-transparent text-white"
	>
		<main class="flex h-full w-full flex-col items-center justify-center text-white">
			<slot />
		</main>
	</section>
	<div class="bottom-0 bg-transparent fill-white text-white">
		<footer class="h-22 flex w-full flex-row items-center justify-center gap-1">
			<span class="block h-[1px] w-1/3 bg-white" />
			<div class="flex flex-row items-center justify-center">
				<a href="https://www.linkedin.com/in/jarod-schupp/" target="_blank">
					<svg
						class=""
						xmlns="http://www.w3.org/2000/svg"
						width="45"
						height="45"
						viewBox="-2 -2 24 24"
						><g fill="currentColor"
							><path
								d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"
							/><path
								d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10z"
							/></g
						></svg
					>
				</a>
				<a href="https://github.com/jardo5" target="_blank">
					<svg
						class=""
						xmlns="http://www.w3.org/2000/svg"
						width="55"
						height="55"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12s.18.05.18.12Zm-1-.15c0 .07 0 .15.14.17a.15.15 0 0 0 .2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07Zm1.42-.05c-.09 0-.15.08-.14.16s.09.11.19.09s.15-.09.14-.16s-.09-.1-.19-.09ZM11.9 4A7.83 7.83 0 0 0 4 12.07A8.29 8.29 0 0 0 9.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21c0 0-.74-.52.05-.51a1.67 1.67 0 0 1 1.24.85a1.69 1.69 0 0 0 2.36.69a1.83 1.83 0 0 1 .51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 0 1 7.7 9.7a3.21 3.21 0 0 1 .08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 0 1 4.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 0 1 .08 2.24a2.61 2.61 0 0 1 .83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 0 1 .5 1.5v2.77a.42.42 0 0 0 .56.4A8.22 8.22 0 0 0 20 12.07A8 8 0 0 0 11.9 4ZM7.14 15.41v.17a.12.12 0 0 0 .17 0s0-.11 0-.18s-.13-.03-.17.01Zm-.35-.27s0 .1.07.13a.09.09 0 0 0 .14 0s0-.1-.07-.13s-.12-.03-.14 0Zm1 1.18v.21c0 .07.17.08.21 0s0-.14 0-.21s-.13-.05-.17 0Zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 0 0 0-.21c-.05-.08-.13-.11-.19-.07Z"
						/></svg
					>
				</a>
				<a href="mailto:schuppjarod@gmail.com" target="_blank">
					<svg
						class=""
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						width="45"
						height="45"
						viewBox="0 0 512 512"
						style="enable-background:new 0 0 512 512;"
						xml:space="preserve"
						><g
							><polygon class="st0" points="368.8,176 143.2,176 256,266.6 	" /><polygon
								class="st0"
								points="136,176 136,325.7 223.4,260.7 	"
							/><polygon class="st0" points="256,292.2 235.1,272 136,336 376,336 276.9,272 	" /><path
								class="st0"
								d="M256,6C117.9,6,6,117.9,6,256s111.9,250,250,250s250-111.9,250-250S394.1,6,256,6z M256,476	c-121.5,0-220-98.5-220-220S134.5,36,256,36s220,98.5,220,220S377.5,476,256,476z"
							/><polygon class="st0" points="376,325.7 376,176 288.6,260.6 	" /></g
						></svg
					>
				</a>
			</div>
			<span class="block h-[1px] w-1/3 bg-white" />
		</footer>
	</div>
</body>

<style>
	body {
		background-image: url('/mainBG.svg');
	}

	body::-webkit-scrollbar {
		display: none;
	}
</style>
