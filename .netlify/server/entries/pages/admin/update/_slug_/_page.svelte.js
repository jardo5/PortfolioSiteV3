import { c as create_ssr_component, a as subscribe, o as onDestroy, d as add_attribute } from "../../../../../chunks/index2.js";
import { p as page } from "../../../../../chunks/stores.js";
import "firebase/firestore";
import "firebase/storage";
import "../../../../../chunks/isLoggedIn.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#card.svelte-1a53jd2{@apply backdrop-blur-[_9px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)];;background:rgba(255, 255, 255, 0.25);-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let form;
  let project = {};
  onDestroy(() => {
    project = {};
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="h-screen w-full justify-center flex items-center"><section id="card" class="h-4/5 w-1/4 svelte-1a53jd2"><form class="h-full w-full"${add_attribute("this", form, 0)}><div class="h-full w-full flex flex-col justify-center items-center text-black"><h1 class="text-4xl py-4 font-bold text-white underline">Update Project</h1>
        ${project.imageUrl ? `<img${add_attribute("src", project.imageUrl, 0)} alt="Project" class="w-1/2 h-auto my-2 rounded-md">` : ``}
        <input required type="file" name="image" accept="image/*" class="border-2 h-12 w-1/2 border-solid border-gray-300 rounded-md p-2 my-2">
        <input required type="text" name="title" placeholder="Title" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2"${add_attribute("value", project.title, 0)}>
        <input required type="text" name="description" placeholder="Description" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2"${add_attribute("value", project.description, 0)}>
        <input required type="text" name="tags" placeholder="Tags" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2"${add_attribute("value", project.tags, 0)}>
        <input required type="text" name="githubLink" placeholder="GitHub Link" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
        <button type="submit" class="bg-blue-500 text-white rounded-2xl px-6 py-2 my-2">Save</button></div></form></section></div>`;
});
export {
  Page as default
};
