<script>
    import RandomLetters from '../components/randomLetters.svelte';
    import { fade } from "svelte/transition";
</script>

<style>

</style>

<svelte:head>
    <title>Jarod Schupp</title>
</svelte:head>

<section in:fade="{{duration: 2000}}" class="bg-no-repeat h-screen w-full justify-between font-FiraCode text-white flex flex-row px-12 animate-fade-in">
    <section class="flex flex-col justify-center w-1/2">
        <span class="text-8xl"> 
            <RandomLetters /> 
        </span>
        <h2 class="text-5xl">Software Engineer</h2>
    </section>
    <img class="mx-40" src="undrawCode.svg" alt="undrawCode" height="500px" width="500px">
</section>
