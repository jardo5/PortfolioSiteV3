<script>
    import { fade } from 'svelte/transition';
</script>

<svelte:head>
    <title>Resume</title>
</svelte:head>

<section
    in:fade={{ duration: 2000 }}
    class="flex flex-col justify-center items-center h-screen w-full font-mono text-white ">

    <img src="Jarod-Schupp-Resume-1.png" alt="Resume" class="w-fit h-3/4 mb-4 aspect-auto border-2 bg-white border-secondary"/>
</section>
