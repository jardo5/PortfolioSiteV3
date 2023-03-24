<script>
    import "../app.css";

    import { fade } from "svelte/transition";
    import { writable } from "svelte/store";
    import { slide } from 'svelte/transition';



    const footerVisible = writable(false);
    function toggleFooter(){
        footerVisible.update((value) => !value);
    }

</script>

<style>
</style>

<!-- TODO: Reconsider Background -->
<!-- 393d3f, 62929e, 546a7b  -->
<!-- Make Whole Div Clickable-->

<body class="h-screen w-full flex flex-col overflow-clip">
        <header class="bg-secondary h-12 w-full flex font-FiraCode justify-between text-white">
            <div class="h-12 flex items-center">
                <div class="h-full w-24 flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover">
                    <a id="navText" href="/" class="group">
                        <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            Home
                        </span>
                    </a>
                </div>
            </div>
            <nav class="h-12 flex flex-row">
                <div class="h-full w-24 flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover">
                    <a id="navText" href="/about" class="group">
                        <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            About
                        </span>
                    </a>
                </div>
                <div class="h-full w-24 flex justify-center items-center border-navBorder border-r hover:bg-navHover">
                    <a id="navText" href="/projects" class="group">
                        <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            Projects
                        </span>
                    </a>
                </div>
                <div class="h-full w-24 flex justify-center items-center border-navBorder border-r hover:bg-navHover">
                    <a id="navText" href="/contact" class="group">
                        <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            Contact
                        </span>
                    </a>
                </div>
                <div class="h-full w-24 flex justify-center items-center border-navBorder border-r hover:bg-navHover">
                    <a id="navText" href="/resume" class="group">
                        <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            Resume
                        </span>
                    </a>
                </div>
                <div class="h-full w-24 flex justify-center items-center border-navBorder border-r hover:bg-navHover">
                    <a id="navText" href="/uses" class="group">
                        <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            Uses
                        </span>
                    </a>
                </div>
            </nav>
        </header>
        <div class="h-screen bg-black text-white flex flex-col">
            <slot />
            
            <center class="relative bottom-[5%] animate-pulseFade">
                <svg class="fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" on:click={toggleFooter} on:keyup={toggleFooter}>
                    <path fill="currentColor" d="m7 14l5-5l5 5H7Z" />
                </svg>
            </center>
        </div>
        <div>
            {#if $footerVisible}
              <footer transition:slide="{{delay: 200, duration: 700}}" on:click={toggleFooter} on:keyup={toggleFooter} class="flex h-22 justify-center items-center w-full bg-white">
                <div>
                    <svg transition:fade="{{delay: 200, duration: 700}}" xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 24 24"><path fill="currentColor" d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12s.18.05.18.12Zm-1-.15c0 .07 0 .15.14.17a.15.15 0 0 0 .2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07Zm1.42-.05c-.09 0-.15.08-.14.16s.09.11.19.09s.15-.09.14-.16s-.09-.1-.19-.09ZM11.9 4A7.83 7.83 0 0 0 4 12.07A8.29 8.29 0 0 0 9.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21c0 0-.74-.52.05-.51a1.67 1.67 0 0 1 1.24.85a1.69 1.69 0 0 0 2.36.69a1.83 1.83 0 0 1 .51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 0 1 7.7 9.7a3.21 3.21 0 0 1 .08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 0 1 4.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 0 1 .08 2.24a2.61 2.61 0 0 1 .83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 0 1 .5 1.5v2.77a.42.42 0 0 0 .56.4A8.22 8.22 0 0 0 20 12.07A8 8 0 0 0 11.9 4ZM7.14 15.41v.17a.12.12 0 0 0 .17 0s0-.11 0-.18s-.13-.03-.17.01Zm-.35-.27s0 .1.07.13a.09.09 0 0 0 .14 0s0-.1-.07-.13s-.12-.03-.14 0Zm1 1.18v.21c0 .07.17.08.21 0s0-.14 0-.21s-.13-.05-.17 0Zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 0 0 0-.21c-.05-.08-.13-.11-.19-.07Z"/></svg>
                </div>
                <div>
                    <svg transition:fade="{{delay: 200, duration: 700}}" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="-2 -2 24 24"><g fill="currentColor"><path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"/><path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10z"/></g></svg>
                </div>
                </footer>
            {/if}
        </div>
</body>
