<script>
    import isLoggedIn from '../utilities/isLoggedIn.js';
    import { auth } from '../firebase';
    import { fly } from 'svelte/transition';
 
  


    function logout() {
        auth.signOut().then(() => {
            window.location.reload();
        });
    }

    let isMenuOpen = false;

    function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>


<header class="bg-secondary h-12 w-full flex font-FiraCode justify-between text-white z-10">
    <div class="h-12 flex justify-center items-center  md:hidden lg:hidden xl:hidden 2xl:hidden">
      <aside class="">
        <button id="hamburger-btn" class="p-2 focus:outline-none" on:click={toggleMenu}>
          <svg viewBox="0 0 20 20" class="w-6 h-6">
              <path fill="currentColor" d="M3 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"></path>
          </svg>
        </button>
        {#if isMenuOpen}
        <nav id="menu" class="absolute bg-secondary w-44 h-fit border-t shadow-2xl overflow-clip" in:fly="{{ x: -200, duration: 2000 }}" out:fly="{{ x: -200, duration: 2000 }}">
          <div class="h-12 w-full flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover">
            <a id="" href="/" class="group">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Home
                </span>
            </a>
        </div>
          <div class="h-12 w-full flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover">
            <a id="" href="/about" class="group">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    About
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border hover:bg-navHover">
            <a id="" href="/projects" class="group">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Projects
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-b hover:bg-navHover">
            <a id="" href="/contact" class="group">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Contact
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-b hover:bg-navHover">
            <a id="" href="/resume" class="group">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Resume
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-b hover:bg-navHover">
            <a id="" href="/uses" class="group">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Uses
                </span>
            </a>
        </div>
        {#if $isLoggedIn}
        <div
          class="h-12 w-full flex justify-center items-center border-navBorder border-b hover:transition-all hover:ease-in-out hover:bg-navHover"
        >
          <a id="" href="/admin" class="group">
            <span
              class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
            >
              Panel
            </span>
          </a>
        </div>
        <div
          class="h-12 w-full flex justify-center items-center border-navBorder border-b hover:transition-all hover:ease-in-out hover:bg-navHover cursor-pointer"
          on:click={logout} on:keydown={logout}
        >
          <span
            class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
          >
            Logout
          </span>
        </div>
      {:else}
        <div
          class="h-12 w-full flex justify-center items-center border-navBorder border-b hover:transition-all hover:ease-in-out hover:bg-navHover"
        >
          <a id="" href="/login" class="group">
            <span
              class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
            >
              Login
            </span>
          </a>
        </div>
      {/if}
        </nav>
        {/if}
      </aside>
    </div>
    <div class="h-12 flex items-center sm:hidden">
      <div
        class="h-12 w-full flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover"
      >
        <a id="" href="/" class="group w-24 flex justify-center items-center">
          <span
            class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
          >
            Home
          </span>
        </a>
      </div>
  
      {#if $isLoggedIn}
        <div
          class="h-12 w-full flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover"
        >
          <a id="" href="/admin" class="group w-24">
            <span
              class='justify-center flex bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
            >
              Panel
            </span>
          </a>
        </div>
        <div
          class="h-12 w-full flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover cursor-pointer"
          on:click={logout} on:keydown={logout}
        >
          <span
            class='w-24 justify-center flex bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
          >
            Logout
          </span>
        </div>
      {:else}
        <div
          class="h-12 w-full flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover"
        >
          <a id="" href="/login" class="group w-24 flex justify-center items-center">
            <span
              class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
            >
              Login
            </span>
          </a>
        </div>
      {/if}
    </div>
    <nav class="h-12 flex flex-row sm:hidden">
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover">
            <a id="" href="/about" class="group w-24 flex justify-center items-center">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    About
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-r hover:bg-navHover">
            <a id="" href="/projects" class="group w-24 flex justify-center items-center">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Projects
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-r hover:bg-navHover">
            <a id="" href="/contact" class="group w-24 flex justify-center items-center">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Contact
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-r hover:bg-navHover">
            <a id="" href="/resume" class="group w-24 flex justify-center items-center">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Resume
                </span>
            </a>
        </div>
        <div class="h-12 w-full flex justify-center items-center border-navBorder border-r hover:bg-navHover">
            <a id="" href="/uses" class="group w-24 flex justify-center items-center">
                <span class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    Uses
                </span>
            </a>
        </div>
    </nav>
</header>