<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
	import { db, storage } from '../../../../firebase';
	import isLoggedIn from '../../../../utilities/isLoggedIn';

	let form;
	let project = {};
	let projectId;

	onMount(async () => {
		projectId = $page.params.slug;
		if (!isLoggedIn) {
			goto('/login');
			return;
		}

		const projectDoc = doc(db, 'projects', projectId);
		const docSnapshot = await getDoc(projectDoc);

		if (docSnapshot.exists()) {
			project = docSnapshot.data();
			project.id = docSnapshot.id;
			project.tags = project.tags.join(', ');
		} else {
			console.log('No such document!');
		}
	});

	onDestroy(() => {
		project = {};
	});

	async function handleSubmit(event) {
		event.preventDefault();
		const imageFile = form.image.files[0];
		const title = form.title.value;
		const description = form.description.value;
		const tags = form.tags.value.split(',').map((tag) => tag.trim());
		const githubLink = form.githubLink.value;

		let imageUrl = project.imageUrl;

		if (imageFile) {
			const imageRef = ref(storage, `images/${imageFile.name}`);
			await uploadBytes(imageRef, imageFile);
			imageUrl = await getDownloadURL(imageRef);
		}

		const projectRef = doc(db, 'projects', projectId);
		await updateDoc(projectRef, {
			title,
			description,
			imageUrl,
			tags,
			githubLink
		});

		goto('/admin');
	}
</script>

<div class="flex h-screen w-full items-center justify-center" in:fade={{ duration: 2000 }}>
	<section id="card" class="h-fit w-2/4 lg:w-4/6 md:w-3/6 sm:w-5/6">
		<form class="h-full w-full" bind:this={form}>
			<div class="flex h-full w-full flex-col items-center justify-center text-black">
				<h1 class="py-4 text-4xl font-bold text-white underline">Update Project</h1>
				{#if project.imageUrl}
					<img src={project.imageUrl} alt="Project" class="my-2 h-auto w-1/2 rounded-md" />
				{/if}
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
					bind:value={project.title}
				/>
				<input
					required
					type="text"
					name="description"
					placeholder="Description"
					class=" my-2 h-12 w-1/2 rounded-md border-2 border-solid border-gray-300 p-2"
					bind:value={project.description}
				/>
				<input
					required
					type="text"
					name="tags"
					placeholder="Tags"
					class=" my-2 h-12 w-1/2 rounded-md border-2 border-solid border-gray-300 p-2"
					bind:value={project.tags}
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
					class="my-2 rounded-2xl bg-blue-500 px-6 py-2 text-white">Save</button
				>
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
