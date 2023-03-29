<script>
	import { onMount, onDestroy } from 'svelte';
	import { getDocs, collection } from 'firebase/firestore';
	import { getDownloadURL, ref } from 'firebase/storage';
	import { db, storage } from '../../firebase';
	import { fade } from 'svelte/transition';

	let projects = [];
	let imageUrls = {};

	onMount(async () => {
		const projectsCollection = collection(db, 'projects');
		const querySnapshot = await getDocs(projectsCollection);

		projects = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));

		for (let i = 0; i < projects.length; i++) {
			const project = projects[i];
			const imageRef = ref(storage, project.imageUrl);
			const downloadURL = await getDownloadURL(imageRef);
			projects[i].imageUrl = downloadURL;
			imageUrls[project.id] = downloadURL;
		}
	});

	onDestroy(() => {
		imageUrls = {};
	});
</script>

<div
	in:fade={{ duration: 2000 }}
	class="flex h-full w-screen flex-wrap justify-center gap-4 overflow-auto pt-12 pb-12 font-FiraCode"
>
	{#each projects as project}
		<div
			id="card"
			class="flex w-1/4 flex-col rounded-md p-4 xl:w-1/4 lg:w-2/3 md:w-4/6 sm:mx-12 sm:w-full"
		>
			<img
				src={imageUrls[project.id]}
				alt={project.title}
				class="mb-2 h-40 rounded-md border border-black object-cover"
			/>
			<div class="flex h-full flex-col items-center justify-center">
				<h2 class="mb-2 text-lg font-bold">{project.title}</h2>
				<p class="mb-2 text-sm text-gray-300">{project.description}</p>
				<div class="flex flex-wrap">
					{#each project.tags as tag}
						<span
							class="flex h-6 w-fit cursor-pointer items-center justify-center gap-1 rounded-2xl border border-[#5976f5f8] bg-[#5976f554] p-3 transition delay-100 ease-in-out hover:border-[#5976f5] hover:bg-[#5976f5d7]"
							>{tag}</span
						>
					{/each}
				</div>
				{#if project.githubLink}
					<a href={project.githubLink} target="_blank" class="py-5 text-sm text-gray-300 underline"
						>Github</a
					>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	#card {
		@apply rounded-[10px] border border-solid border-[rgba(_255,255,255,0.18_)] backdrop-blur-[_9px_];
		background: rgba(255, 255, 255, 0.25);
		-webkit-backdrop-filter: blur(9px);
		backdrop-filter: blur(9px);
	}
</style>
