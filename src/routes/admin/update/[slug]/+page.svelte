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
    });

    goto('/admin');
  }
</script>


<style>
  #card {
    @apply backdrop-blur-[_9px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)];
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(9px);
    backdrop-filter: blur(9px);
  }
</style>

<div class="h-full w-full justify-center flex items-center" in:fade="{{duration: 2000}}">
  <section id="card" class="h-3/5 w-1/4">
    <form class="h-full w-full" bind:this={form}>
      <div class="h-full w-full flex flex-col justify-center items-center text-black">
        <h1 class="text-4xl py-4 font-bold text-white underline">Update Project</h1>
        {#if project.imageUrl}
          <img src="{project.imageUrl}" alt="Project Image" class="w-1/2 h-auto my-2 rounded-md">
        {/if}
        <input required type="file" name="image" accept="image/*" class="border-2 h-12 w-1/2 border-solid border-gray-300 rounded-md p-2 my-2">
        <input required type="text" name="title" placeholder="Title" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2" bind:value={project.title}>
        <input required type="text" name="description" placeholder="Description" class=" h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2" bind:value={project.description}>
        <input required type="text" name="tags" placeholder="Tags" class=" h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2" bind:value={project.tags}>
        <button type="submit" on:click|preventDefault={handleSubmit} class="bg-blue-500 text-white rounded-2xl px-6 py-2 my-2">Save</button>
      </div>
    </form>
  </section>
</div>

