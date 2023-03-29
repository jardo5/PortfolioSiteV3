<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from "svelte/transition";
    let email, password;
    const dispatcher = createEventDispatcher()
    function login(event) {
        event.preventDefault()
        dispatcher('login', {
            email,
            password
        })
    }
</script>

<style>
    #card {
        @apply backdrop-blur-[_9px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)];
  background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(9px);
    backdrop-filter: blur(9px);
    }
</style>

<svelte:head>
    <title>Secret Login</title>
</svelte:head>

<div class="h-full w-full justify-center flex items-center" in:fade="{{duration: 2000}}">
    <section id="card" class="h-3/5 w-fit p-12">
        <form class="h-full w-full">
            <div class="h-full w-full flex flex-col justify-center items-center text-black">
                <h1 class="text-2xl py-4 font-bold ">Admin Login</h1>
                <input type="text" bind:value={email} name="email" placeholder="Email" class="border-2 border-solid border-gray-300 rounded-md p-2 my-2">
                <input type="password" bind:value={password} name="password" placeholder="Password" class="border-2 border-solid border-gray-300 rounded-md p-2 my-2">
                <button type="submit" on:click|preventDefault={login} class="bg-blue-500 text-white rounded-2xl px-6 py-2 my-2">Login</button>
            </div>
        </form> 
    </section>
</div>