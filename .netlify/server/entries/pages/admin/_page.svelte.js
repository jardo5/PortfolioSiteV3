import { c as create_ssr_component, a as subscribe, o as onDestroy, b as each, d as add_attribute, e as escape } from "../../../chunks/index2.js";
import "firebase/firestore";
import "firebase/storage";
import { i as isLoggedIn } from "../../../chunks/isLoggedIn.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  let projects = [];
  let imageUrls = {};
  onDestroy(() => {
    imageUrls = {};
  });
  $$unsubscribe_isLoggedIn();
  return `<div class="w-full h-screen flex items-center flex-col justify-center"><div class="w-full h-12 flex justify-center items-center mt-12"><a href="/admin/create" class="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">Add A New Project</a></div>
  <div class="max-w-7xl mx-auto flex justify-center items-center"><div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4"><div class="inline-block min-w-full shadow-2xl rounded-lg overflow-auto h-[40rem] shadow-black"><table class="min-w-full leading-normal overflow-auto"><thead><tr><th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tags</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Github Link</th>
              <th class="px-5 py-3 border-b-2 border-gray-600 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th></tr></thead>
          <tbody>${each(projects, (project) => {
    return `<tr><td class="px-5 py-5 border-b border-gray-200 bg-white"><img${add_attribute("src", imageUrls[project.id], 0)}${add_attribute("alt", project.title, 0)} class="w-full h-full object-cover border border-black shadow-2xl"></td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm overflow-hidden"><div class="flex items-center"><span class="font-medium text-gray-800">${escape(project.title)}</span>
                </div></td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm"><p class="text-gray-900">${escape(project.description)}</p></td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm"><div class="flex flex-wrap">${each(project.tags, (tag) => {
      return `<span class="inline-block px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 rounded-full bg-gray-200">${escape(tag)}</span>`;
    })}
                </div></td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm"><a${add_attribute("href", project.githubLink, 0)} target="_blank" class="text-blue-600 hover:underline">Github</a></td>
              <td class="px-5 py-5 border border-gray-200 bg-white text-sm"><div class="flex justify-start"><button class="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition duration-300">Delete</button>
                  <button class="bg-blue-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-blue-600 transition duration-300">Edit</button>
                </div></td>
            </tr>`;
  })}</tbody></table></div></div></div></div>`;
});
export {
  Page as default
};
