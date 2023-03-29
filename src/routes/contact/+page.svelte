<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<section
	in:fade={{ duration: 2000 }}
	class="flex h-screen w-full items-center justify-center font-FiraCode"
>
	<div
		class="flex h-[85%] w-3/4 flex-row overflow-clip overflow-y-auto rounded-3xl border border-black bg-[#ffffffc4] bg-contactWave bg-no-repeat shadow-2xl drop-shadow-lg md:flex-col sm:flex-col"
	>
		<div class="flex h-full w-1/2 flex-row items-center justify-center md:w-full sm:w-full">
			<img src="contactSVG.svg" alt="Contact" width="" height="" class="" />
			<hr class="border-r-4 border-r-indigo-400" />
		</div>
		<div class="mt-32 flex h-full w-1/2 flex-col items-center md:mt-0 md:w-full sm:mt-0 sm:w-full">
			<h1 class="text-3xl font-extrabold text-black md:text-center sm:text-center">Contact Me</h1>
			<form class="h-full w-full px-12">
				<div class="flex flex-row justify-center gap-12">
					<div class="flex w-1/2 flex-col">
						<label for="name" class="text-2xl text-black">Name</label>
						<input
							disabled
							placeholder="Disabled"
							type="text"
							name="name"
							id="name"
							class="rounded-2xl border-2 border-black bg-gray-200 p-2 text-black"
						/>
					</div>
					<div class="flex w-1/2 flex-col">
						<label for="email" class="text-2xl text-black">Email</label>
						<input
							disabled
							type="email"
							name="email"
							id="email"
							placeholder="Disabled"
							class="rounded-2xl border-2 border-black bg-gray-200 p-2 text-black"
						/>
					</div>
				</div>
				<div class="flex flex-col">
					<label for="message" class="text-2xl text-black">Message</label>
					<textarea
						disabled
						placeholder="Disabled until further notice, I'm active on LinkedIn."
						name="message"
						id="message"
						cols="30"
						rows="10"
						class="flex-grow resize-none rounded-2xl border-2 border-black bg-gray-200 p-2 text-black sm:w-full"
					/>
				</div>
				<div class="flex flex-row justify-center py-4">
					<button
						disabled
						type="submit"
						class="w-1/2 rounded-lg bg-black p-2 text-white hover:bg-slate-900 lg:w-1/4"
						>Submit</button
					>
				</div>
				<div class="flex items-center justify-center">
					<span class="block h-[1px] w-1/3 bg-black" />
					<h1 class="font-black text-black">OR</h1>
					<span class="block h-[1px] w-1/3 bg-black" />
				</div>
				<div class="flex flex-row justify-center gap-5">
					<a href="mailto:schuppjarod@gmail.com">
						<img src="gmail.svg" alt="gmail" height="55px" width="55px" />
					</a>
					<a href="https://www.linkedin.com/in/jarod-schupp/" target="_blank">
						<img src="linkedin.svg" alt="linkedin" height="55px" width="55px" />
					</a>
				</div>
			</form>
		</div>
	</div>
</section>

<style>
</style>
