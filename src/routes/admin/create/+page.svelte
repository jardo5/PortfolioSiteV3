<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import isLoggedIn from '/src/utilities/isLoggedIn';
    import { collection, addDoc, getFirestore } from "firebase/firestore";
    import { storage } from "../../../firebase";
    import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
  
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
            const tags = form.tags.value.split(",").map((tag) => tag.trim());
            const githubLink = form.githubLink.value;

            const storageRef = ref(storage, `images/${imageFile.name}`);
            await uploadBytes(storageRef, imageFile);
            const imageUrl = await getDownloadURL(storageRef);

            const db = getFirestore();
            const newProjectRef = await addDoc(collection(db, "projects"), {
                title,
                description,
                imageUrl,
                tags,
                githubLink,
            });
            form.reset();
            submissionStatus = "Submitted!";
  
            dispatcher("sendProjDetails", { ...newProjectRef, title, description, imageUrl, tags });
        } catch (error) {
            console.log("Error adding document: ", error);
            submissionStatus = `Error Check Console`;
        }
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

<div class="h-screen w-full justify-center flex items-center" in:fade="{{duration: 2000}}">
    <section id="card" class="h-3/5 w-1/4">
      <form class="h-full w-full" bind:this={form}>
        <div class="h-full w-full flex flex-col justify-center items-center text-black">
          <h1 class="text-4xl py-4 font-bold text-white underline">Create New Project</h1>
          <input required type="file" name="image" accept="image/*" class="border-2 h-12 w-1/2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="title" placeholder="Title" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="description" placeholder="Description" class=" h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="tags" placeholder="Tags" class=" h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="githubLink" placeholder="GitHub Link" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <button type="submit" on:click|preventDefault={handleSubmit} class="bg-blue-500 text-white rounded-2xl px-6 py-2 my-2">Submit</button>
          <p class="my-2 text-lg font-bold text-center w-1/2" class:success={submissionStatus === "Submitted!"} class:error={submissionStatus.startsWith("Error")}>
            {#if submissionStatus === "Submitted!"}
              <span class="text-green-600">Submitted!</span>
            {:else if submissionStatus.startsWith("Error")}
            <span class="text-red-600">Error!</span>
            {/if}
          </p>
        </div>
      </form> 
    </section>
  </div>
  