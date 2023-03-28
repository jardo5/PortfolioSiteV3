import { c as create_ssr_component, o as onDestroy, b as each, d as add_attribute, e as escape } from "../../../chunks/index2.js";
import "firebase/firestore";
import "firebase/storage";
import "../../../chunks/isLoggedIn.js";
/* empty css                                                     */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#card.svelte-1o9it3a{@apply backdrop-blur-[_9px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)];;background:rgba(255, 255, 255, 0.25);-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [];
  let imageUrls = {};
  onDestroy(() => {
    imageUrls = {};
  });
  $$result.css.add(css);
  return `<div class="h-full w-screen flex flex-wrap justify-center gap-4 font-FiraCode pt-12 pb-12 overflow-auto">${each(projects, (project) => {
    return `<div id="card" class="p-4 rounded-md flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 svelte-1o9it3a"><img${add_attribute("src", imageUrls[project.id], 0)}${add_attribute("alt", project.title, 0)} class="h-40 object-cover mb-2 rounded-md border border-black">
        <div class="flex flex-col justify-center items-center h-full"><h2 class="text-lg font-bold mb-2">${escape(project.title)}</h2>
          <p class="text-sm text-gray-300 mb-2">${escape(project.description)}</p>
          <div class="flex flex-wrap">${each(project.tags, (tag) => {
      return `<span class="cursor-pointer flex items-center justify-center bg-[#5976f554] p-3 h-6 rounded-2xl border-[#5976f5f8] gap-1 w-fit border transition ease-in-out delay-100 hover:bg-[#5976f5d7] hover:border-[#5976f5]">${escape(tag)}</span>`;
    })}</div>
          ${project.githubLink ? `<a${add_attribute("href", project.githubLink, 0)} target="_blank" class="text-sm text-gray-300 underline py-5">Github</a>` : ``}</div>
      </div>`;
  })}</div>`;
});
export {
  Page as default
};
