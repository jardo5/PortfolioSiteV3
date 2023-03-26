<script>
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';
  import { getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
  import { getDownloadURL, ref } from 'firebase/storage';
  import { db, storage } from '../../firebase';
  import { goto } from '$app/navigation';
  import isLoggedIn from '../../utilities/isLoggedIn';

  let projects = [];
  let imageUrls = {};

  onMount(async () => {
    if (!isLoggedIn) {
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

  function editProject(project) {
    const url = `/admin/edit/${project.id}`;
    goto(url, { state: { project } });
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

<div class="w-full h-full bg-[url('mainBG.svg')] flex items-center flex-col justify-center">
  <div class="w-full h-12 flex justify-center items-center mt-12">
    <a href="/admin/create" class="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">Add A New Project</a>
  </div>
  <div class="max-w-4xl mx-auto flex justify-center items-center">
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
      <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tags</th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each projects as project}
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                  <img src={imageUrls[project.id]} alt={project.title} class="h-10 w-10 rounded-full mr-2 object-cover border border-black">
                  <span class="font-medium text-gray-800">{project.title}</span>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900">{project.description}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {#each project.tags as tag}
                <span class="inline-block px-2 py-1 text-sm font-semibold text-gray-700 mr-2 rounded-full bg-gray-200">{tag}</span>
                {/each}
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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


