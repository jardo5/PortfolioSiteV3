<script>
    import { onMount, onDestroy } from 'svelte';
    import { getDocs, collection } from 'firebase/firestore';
    import { getDownloadURL, ref } from 'firebase/storage';
    import { db, storage } from '../../firebase';
  
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
  
  <div class="flex flex-wrap justify-center gap-4 font-FiraCode mt-12">
    {#each projects as project}
      <div id="card" class="p-4 rounded-md flex flex-col">
        <img src={imageUrls[project.id]} alt={project.title} class="h-40 object-cover mb-2 rounded-md border border-black">
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-lg font-bold mb-2">{project.title}</h2>
          <p class="text-sm text-gray-300 mb-2">{project.description}</p>
          <div class="flex flex-wrap">
            {#each project.tags as tag}
              <span class="cursor-pointer flex items-center justify-center bg-[#5976f554] p-3 h-6 rounded-2xl border-[#5976f5f8] gap-1 w-fit border transition ease-in-out delay-100 hover:bg-[#5976f5d7] hover:border-[#5976f5]">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  