<script>
    import isLoggedIn from '../utilities/isLoggedIn';
    import { auth } from '../firebase';


    function logout() {
        auth.signOut();
    }
</script>

<header class="bg-secondary h-12 w-full flex font-FiraCode justify-between text-white">
    <div class="h-12 flex items-center">
      <div
        class="h-full w-24 flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover"
      >
        <a id="navText" href="/" class="group">
          <span
            class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
          >
            Home
          </span>
        </a>
      </div>
  
      {#if $isLoggedIn}
        <div
          class="h-full w-24 flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover"
        >
          <a id="navText" href="/admin" class="group">
            <span
              class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
            >
              Panel
            </span>
          </a>
        </div>
        <div
          class="h-full w-24 flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover cursor-pointer"
          on:click={logout} on:keyDown={logout}
        >
          <span
            class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
          >
            Logout
          </span>
        </div>
      {:else}
        <div
          class="h-full w-24 flex justify-center items-center border-navBorder border-x hover:transition-all hover:ease-in-out hover:bg-navHover"
        >
          <a id="navText" href="/login" class="group">
            <span
              class='bg-left-bottom bg-gradient-to-r from-current to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
            >
              Login
            </span>
          </a>
        </div>
      {/if}
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