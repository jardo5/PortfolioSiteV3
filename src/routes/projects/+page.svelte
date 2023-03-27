<script>
    import { onMount, onDestroy } from 'svelte';
    import { getDocs, collection } from 'firebase/firestore';
    import { getDownloadURL, ref } from 'firebase/storage';
    import { db, storage } from '../../firebase';
    import footerVisible from '../+layout.svelte';
  
    let projects = [];
    let imageUrls = {};
  
    onMount(async () => {
      const projectsCollection = collection(db, 'projects');
      const querySnapshot = await getDocs(projectsCollection);
  
      projects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
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

  <style>
    #card {
      @apply backdrop-blur-[_9px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)];
      background: rgba(255, 255, 255, 0.25);
      -webkit-backdrop-filter: blur(9px);
      backdrop-filter: blur(9px);
    }
  </style>
  
  <div class="h-full w-screen flex flex-wrap justify-center gap-4 font-FiraCode pt-12 pb-12 overflow-auto">
    {#each projects as project}
      <div id="card" class="p-4 rounded-md flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
        <img src={imageUrls[project.id]} alt={project.title} class="h-40 object-cover mb-2 rounded-md border border-black">
        <div class="flex flex-col justify-center items-center h-full">
          <h2 class="text-lg font-bold mb-2">{project.title}</h2>
          <p class="text-sm text-gray-300 mb-2">{project.description}</p>
          <div class="flex flex-wrap">
            {#each project.tags as tag}
              <span class="cursor-pointer flex items-center justify-center bg-[#5976f554] p-3 h-6 rounded-2xl border-[#5976f5f8] gap-1 w-fit border transition ease-in-out delay-100 hover:bg-[#5976f5d7] hover:border-[#5976f5]">{tag}</span>
            {/each}
          </div>
          {#if project.githubLink}
            <a href="{project.githubLink}" target="_blank" class="text-sm text-gray-300 underline py-5">Github</a>
          {/if}
        </div>
      </div>
    {/each}
  </div>
  