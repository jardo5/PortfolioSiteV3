<script>
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade={{ duration: 2000 }}
	class="flex h-full w-screen flex-col justify-center gap-4 overflow-y-scroll pt-12 pb-12 font-FiraCode lg:items-center lg:pt-4 md:items-center md:pt-4 sm:pt-4"
>
	<div class="my-6 flex flex-col items-center justify-center gap-2 lg:my-0 md:my-0 sm:my-0">
		<!--TODO: Change color-->
		<h1
			class="flex flex-row bg-gradient-to-r from-blue-600 to-white bg-clip-text text-4xl text-transparent"
		>
			<span class="">&#60;</span>
			<span class="mr-2">Uses</span>
			<span class="">&#47;</span>
			<span class="">&#62;</span>
		</h1>
		<h3 class="text-xl">My Daily Setup & Tools</h3>
		<h3 class="text-sm">Last Update: 3/23/23</h3>
	</div>
	<div
		class="flex w-full flex-row justify-center gap-12 overflow-clip lg:w-3/4 lg:flex-col lg:gap-4 md:w-3/4 md:flex-col md:gap-4 sm:mx-1 sm:flex-col sm:gap-4"
	>
		<div
			id="card"
			class="flex h-2/3 w-1/4 flex-col overflow-y-scroll text-center text-white lg:w-full md:w-full sm:h-2/3 sm:w-full"
		>
			<h1 class="w-full text-2xl">Hardware</h1>
			<ul class="ml-12 list-square text-left">
				<li class="">
					Desktop:
					<ul class="list-square pl-4">
						<li>Case: NZXT H510 White</li>
						<li>CPU: Intel Core i5-8600K</li>
						<li>Ram: Dual Corsair 32GB</li>
						<li>GPU: Nvidia RTX 3060</li>
						<li>
							Storage:
							<ul class="list-square pl-4">
								<li>SSD1: PNY 240GB</li>
								<li>SSD2: Sandisk SSD Plus 1TB</li>
								<li>HDD: Hitachi 4TB</li>
							</ul>
						</li>
						<li>OS: Windows 10 Pro</li>
					</ul>
				</li>

				<li>
					Monitors:
					<ul class="list-square pl-4">
						<li>BenQ XL2411Z 24in 144hz</li>
						<li>BenQ Zowie 24in XL2411p 144hz</li>
						<li>BenQ Zowie 24in XL2411p 144hz</li>
					</ul>
				</li>
				<li>Keyboard: Logitech G915</li>
				<li>Mouse: Logitech G305</li>
				<li>Mousepad: SteelSeries QcK 5XL</li>
				<li>Headphones: SteelSeries Arctis 1 Wireless</li>
				<li>
					Other:
					<ul class="list-square pl-4">
						<li>Phone: iPhone 11 Pro Max 256GB</li>
						<li>Console: Playstation 5 Digital</li>
					</ul>
				</li>
			</ul>
		</div>
		<div
			id="card"
			class="flex h-2/3 w-1/4 flex-col overflow-y-scroll text-center lg:w-full md:w-full sm:h-2/3 sm:w-full"
		>
			<h1 class="w-full text-2xl">Software & Tools</h1>
			<ul class="ml-12 list-square text-left">
				<li class="">
					Software/Tools:
					<ul class="list-square pl-4">
						<li>Browser: Chrome Beta</li>
						<li>
							IDES:
							<ul class="list-square pl-4">
								<li>VSCode</li>
								<li>IntelliJ</li>
								<li>WebStorm</li>
								<li>CLion</li>
							</ul>
						</li>
						<li>Visual Database: MySQL Workbench</li>
						<li>API Testing: Postman</li>
						<li>Design: Figma</li>
						<li>Version Control: Git</li>
						<li>Communication: Discord</li>
					</ul>
				</li>
			</ul>
		</div>
		<div
			id="card"
			class="flex h-2/3 w-1/4 flex-col overflow-y-scroll text-center lg:w-full md:w-full sm:h-2/3 sm:w-full"
		>
			<h1 class="w-full text-2xl">Languages & Frameworks</h1>
			<ul class="ml-12 list-square text-left">
				<li class="">
					Front End Development:
					<ul class="list-square pl-4">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Next.js</li>
						<li>Svelte</li>
						<li>TailwindCSS</li>
						<li>JavaFX</li>
					</ul>
				</li>
				<li class="">
					Back End Development:
					<ul class="list-square pl-4">
						<li>Java</li>
						<li>Python</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>Spring</li>
					</ul>
				</li>
				<li class="">
					Databases & Data:
					<ul class="list-square pl-4">
						<li>MySQL</li>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
					</ul>
				</li>
				<li class="">
					Other:
					<ul class="list-square pl-4">
						<li>Firebase</li>
						<li>Vercel</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	#card {
		@apply rounded-[10px] border border-solid border-[rgba(_255,255,255,0.18_)] backdrop-blur-[_9px_];
		background: rgba(255, 255, 255, 0.25);
		-webkit-backdrop-filter: blur(9px);
		backdrop-filter: blur(9px);
	}
</style>
