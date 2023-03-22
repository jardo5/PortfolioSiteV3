<script>
    import "../app.css";
</script>

<style>
</style>

<!-- TODO: Reconsider Background -->
<!-- 393d3f, 62929e, 546a7b  -->
<!-- Make Whole Div Clickable-->

<body class="h-screen w-full flex flex-col">
        <header class="bg-secondary h-12 w-full justify-end flex font-FiraCode text-white items-center">
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
        </header>

        <slot />
        
</body>