<script>
    import RandomLetters from '../components/randomLetters.svelte';
    import { fade } from "svelte/transition";
</script>

<style>

</style>

<svelte:head>
    <title>Jarod Schupp</title>
</svelte:head>

<section in:fade="{{duration: 2000}}" class="h-screen w-full justify-between items-center font-FiraCode text-white flex flex-row px-12 animate-fade-in sm:flex-col sm:items-center sm:px-0 sm:justify-around md:flex-col md:items-center md:px-0 md:justify-around lg:flex-col lg:items-center lg:px-0 lg:justify-around">
    <section class="flex flex-col justify-center w-1/2 h-1/2 sm:w-full sm:mt-12">
        <span class="text-8xl sm:text-5xl sm:items-center sm:justify-center sm:flex md:text-5xl md:items-center md:justify-center md:flex lg:text-6xl lg:items-center lg:justify-center lg:flex"> 
            <RandomLetters /> 
        </span>
        <h2 class="text-5xl sm:text-3xl sm:items-center sm:justify-center sm:flex md:text-3xl md:items-center md:justify-center md:flex lg:text-4xl lg:items-center lg:justify-center lg:flex">Software Engineer</h2>
    </section>
    <img class="mx-12" src="undrawCode.svg" alt="undrawCode" height="500px" width="500px">
</section>
