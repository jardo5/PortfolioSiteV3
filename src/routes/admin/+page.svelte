<script>
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
	import { getDownloadURL, ref } from 'firebase/storage';
	import { db, storage } from '../../firebase';
	import { goto } from '$app/navigation';
	import isLoggedIn from '../../utilities/isLoggedIn';

	let projects = [];
	let imageUrls = {};

	onMount(async () => {
		if (!$isLoggedIn) {
			goto('/login');
			return;
		}

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

	function editProject(projectId) {
		goto(`/admin/update/${projectId}`);
	}

	async function deleteProject(projectId) {
		const confirmed = confirm('Are you sure you want to delete this project?');
		if (!confirmed) {
			return;
		}
		try {
			await deleteDoc(doc(db, 'projects', projectId));
			projects = projects.filter((project) => project.id !== projectId);
		} catch (error) {
			console.error('Error deleting project', error);
		}
	}
</script>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<div class="mt-12 flex h-12 w-full items-center justify-center">
		<a
			href="/admin/create"
			class="rounded-md bg-blue-500 py-2 px-4 text-white shadow-md transition duration-300 hover:bg-blue-600"
			>Add A New Project</a
		>
	</div>
	<div class="mx-auto flex max-w-7xl items-center justify-center">
		<div class="-mx-4 px-4 py-4 sm:-mx-8 sm:px-8">
			<div
				class="inline-block h-[40rem] min-w-full overflow-auto rounded-lg shadow-2xl shadow-black"
			>
				<table class="min-w-full overflow-auto leading-normal">
					<thead>
						<tr>
							<th
								class="border-b-2 border-gray-600 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
								>Image</th
							>
							<th
								class="border-b-2 border-gray-600 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
								>Title</th
							>
							<th
								class="border-b-2 border-gray-600 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
								>Description</th
							>
							<th
								class="border-b-2 border-gray-600 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
								>Tags</th
							>
							<th
								class="border-b-2 border-gray-600 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
								>Github Link</th
							>
							<th
								class="border-b-2 border-gray-600 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
								>Actions</th
							>
						</tr>
					</thead>
					<tbody>
						{#each projects as project}
							<tr>
								<td class="border-b border-gray-200 bg-white px-5 py-5">
									<img
										src={imageUrls[project.id]}
										alt={project.title}
										class="h-full w-full border border-black object-cover shadow-2xl"
									/>
								</td>
								<td class="overflow-hidden border-b border-gray-200 bg-white px-5 py-5 text-sm">
									<div class="flex items-center">
										<span class="font-medium text-gray-800">{project.title}</span>
									</div>
								</td>
								<td class="border border-gray-200 bg-white px-5 py-5 text-sm">
									<p class="overflow-ellipsis text-gray-900 line-clamp-5">{project.description}</p>
								</td>
								<td class="border border-gray-200 bg-white px-5 py-5 text-sm">
									<div class="flex flex-wrap">
										{#each project.tags as tag}
											<span
												class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700"
												>{tag}</span
											>
										{/each}
									</div>
								</td>
								<td class="border border-gray-200 bg-white px-5 py-5 text-sm">
									<a href={project.githubLink} target="_blank" class="text-blue-600 hover:underline"
										>Github</a
									>
								</td>
								<td class="border border-gray-200 bg-white px-5 py-5 text-sm">
									<div class="flex flex-col gap-2">
										<button
											class="rounded-md bg-red-500 py-2 px-4 text-white transition duration-300 hover:bg-red-600"
											on:click={() => deleteProject(project.id)}>Delete</button
										>
										<button
											class="rounded-md bg-blue-500 py-2 px-4 text-white transition duration-300 hover:bg-blue-600"
											on:click={() => editProject(project.id)}>Edit</button
										>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
