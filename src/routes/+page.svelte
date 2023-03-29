<script>
	import RandomLetters from '../components/randomLetters.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Jarod Schupp</title>
</svelte:head>

<section
	in:fade={{ duration: 2000 }}
	class="animate-fade-in flex h-screen w-full flex-row items-center justify-between px-12 font-FiraCode text-white lg:flex-col lg:items-center lg:justify-around lg:px-0 md:flex-col md:items-center md:justify-around md:px-0 sm:flex-col sm:items-center sm:justify-around sm:px-0"
>
	<section class="flex h-1/2 w-1/2 flex-col justify-center sm:mt-12 sm:w-full">
		<span
			class="text-8xl lg:flex lg:items-center lg:justify-center lg:text-6xl md:flex md:items-center md:justify-center md:text-5xl sm:flex sm:items-center sm:justify-center sm:text-5xl"
		>
			<RandomLetters />
		</span>
		<h2
			class="text-5xl lg:flex lg:items-center lg:justify-center lg:text-4xl md:flex md:items-center md:justify-center md:text-3xl sm:flex sm:items-center sm:justify-center sm:text-3xl"
		>
			Software Engineer
		</h2>
	</section>
	<img class="mx-12" src="undrawCode.svg" alt="undrawCode" height="500px" width="500px" />
</section>

<style>
</style>
