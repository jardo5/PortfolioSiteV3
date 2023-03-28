<script>
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';
  import { getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
  import { getDownloadURL, ref } from 'firebase/storage';
  import { db, storage } from '../../firebase';
  import { goto } from '$app/navigation';
  import isLoggedIn from '@/utilities/isLoggedIn';


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

<div class="w-full h-screen flex items-center flex-col justify-center">
  <div class="w-full h-12 flex justify-center items-center mt-12">
    <a href="/admin/create" class="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">Add A New Project</a>
  </div>
  <div class="max-w-7xl mx-auto flex justify-center items-center">
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
      <div class="inline-block min-w-full shadow-2xl rounded-lg overflow-auto h-[40rem] shadow-black">
        <table class="min-w-full leading-normal overflow-auto">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tags</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Github Link</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each projects as project}
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white">
                <img src={imageUrls[project.id]} alt={project.title} class="w-full h-full object-cover border border-black shadow-2xl">
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm overflow-hidden">
                <div class="flex items-center">
                  <span class="font-medium text-gray-800">{project.title}</span>
                </div>
              </td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                <p class="text-gray-900">{project.description}</p>
              </td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                <div class="flex flex-wrap">
                  {#each project.tags as tag}
                  <span class="inline-block px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 rounded-full bg-gray-200">{tag}</span>
                  {/each}
                </div>
              </td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                <a href={project.githubLink} target="_blank" class="text-blue-600 hover:underline">Github</a>
              </td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                <div class="flex justify-start">
                  <button class="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition duration-300" on:click={() => deleteProject(project.id)}>Delete</button>
                  <button class="bg-blue-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-blue-600 transition duration-300" on:click={() => editProject(project.id)}>Edit</button>
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


