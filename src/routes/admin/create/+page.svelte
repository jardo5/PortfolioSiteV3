<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import isLoggedIn from '../../../utilities/isLoggedIn';
	import { collection, addDoc, getFirestore } from 'firebase/firestore';
	import { storage } from '../../../firebase';
	import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

	onMount(() => {
		if (!$isLoggedIn) {
			goto('/login');
		}
	});

	const dispatcher = createEventDispatcher();
	let form;
	let submissionStatus = '';

	async function handleSubmit(event) {
		try {
			event.preventDefault();
			const imageFile = form.image.files[0];
			const title = form.title.value;
			const description = form.description.value;
			const tags = form.tags.value.split(',').map((tag) => tag.trim());
			const githubLink = form.githubLink.value;

			const storageRef = ref(storage, `images/${imageFile.name}`);
			await uploadBytes(storageRef, imageFile);
			const imageUrl = await getDownloadURL(storageRef);

			const db = getFirestore();
			const newProjectRef = await addDoc(collection(db, 'projects'), {
				title,
				description,
				imageUrl,
				tags,
				githubLink
			});
			form.reset();
			submissionStatus = 'Submitted!';

			dispatcher('sendProjDetails', { ...newProjectRef, title, description, imageUrl, tags });
		} catch (error) {
			console.log('Error adding document: ', error);
			submissionStatus = `Error Check Console`;
		}
	}
</script>

<div class="flex h-screen w-full items-center justify-center" in:fade={{ duration: 2000 }}>
	<section id="card" class="h-3/5 w-1/4 lg:w-3/4 md:w-3/4 sm:w-full">
		<form class="h-full w-full" bind:this={form}>
			<div class="flex h-full w-full flex-col items-center justify-center text-black">
				<h1 class="py-4 text-4xl font-bold text-white underline">Create New Project</h1>
				<input
					required
					type="file"
					name="image"
					accept="image/*"
					class="my-2 h-12 w-1/2 rounded-md border-2 border-solid border-gray-300 p-2"
				/>
				<input
					required
					type="text"
					name="title"
					placeholder="Title"
					class="my-2 h-12 w-1/2 rounded-md border-2 border-solid border-gray-300 p-2"
				/>
				<input
					required
					type="text"
					name="description"
					placeholder="Description"
					class=" my-2 h-12 w-1/2 rounded-md border-2 border-solid border-gray-300 p-2"
				/>
				<input
					required
					type="text"
					name="tags"
					placeholder="Tags"
					class=" my-2 h-12 w-1/2 rounded-md border-2 border-solid border-gray-300 p-2"
				/>
				<input
					required
					type="text"
					name="githubLink"
					placeholder="GitHub Link"
					class="my-2 h-12 w-1/2 rounded-md border-2 border-solid border-gray-300 p-2"
				/>
				<button
					type="submit"
					on:click|preventDefault={handleSubmit}
					class="my-2 rounded-2xl bg-blue-500 px-6 py-2 text-white">Submit</button
				>
				<p
					class="my-2 w-1/2 text-center text-lg font-bold"
					class:success={submissionStatus === 'Submitted!'}
					class:error={submissionStatus.startsWith('Error')}
				>
					{#if submissionStatus === 'Submitted!'}
						<span class="text-green-600">Submitted!</span>
					{:else if submissionStatus.startsWith('Error')}
						<span class="text-red-600">Error!</span>
					{/if}
				</p>
			</div>
		</form>
	</section>
</div>

<style>
	#card {
		@apply rounded-[10px] border border-solid border-[rgba(_255,255,255,0.18_)] backdrop-blur-[_9px_];
		background: rgba(255, 255, 255, 0.25);
		-webkit-backdrop-filter: blur(9px);
		backdrop-filter: blur(9px);
	}
</style>
