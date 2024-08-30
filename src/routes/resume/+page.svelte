<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        const timeout = setTimeout(() => {
            goto('/resume');
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    });

    function onImageLoad() {
        const image = document.querySelector('img');
        image.style.opacity = 1;
    }
</script>

<svelte:head>
    <title>Resume</title>
</svelte:head>

<section
    class="flex flex-col justify-center items-center h-screen w-full font-mono text-white ">

    <img src="/Jarod-Schupp-Resume.png" alt="Resume" class="w-fit h-3/4 mb-4 bg-white aspect-auto border-2 border-secondary"
        on:load={onImageLoad} />
</section>