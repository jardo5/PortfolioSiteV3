import { c as create_ssr_component, a as subscribe, f as createEventDispatcher, d as add_attribute } from "../../../../chunks/index2.js";
import { i as isLoggedIn } from "../../../../chunks/isLoggedIn.js";
import "firebase/firestore";
import "firebase/storage";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#card.svelte-4pgime{@apply backdrop-blur-[_9px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)];;background:rgba(255, 255, 255, 0.25);-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  createEventDispatcher();
  let form;
  let submissionStatus = "";
  $$result.css.add(css);
  $$unsubscribe_isLoggedIn();
  return `<div class="h-screen w-full justify-center flex items-center"><section id="card" class="h-3/5 w-1/4 svelte-4pgime"><form class="h-full w-full"${add_attribute("this", form, 0)}><div class="h-full w-full flex flex-col justify-center items-center text-black"><h1 class="text-4xl py-4 font-bold text-white underline">Create New Project</h1>
          <input required type="file" name="image" accept="image/*" class="border-2 h-12 w-1/2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="title" placeholder="Title" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="description" placeholder="Description" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="tags" placeholder="Tags" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <input required type="text" name="githubLink" placeholder="GitHub Link" class="h-12 w-1/2 border-2 border-solid border-gray-300 rounded-md p-2 my-2">
          <button type="submit" class="bg-blue-500 text-white rounded-2xl px-6 py-2 my-2">Submit</button>
          <p class="${[
    "my-2 text-lg font-bold text-center w-1/2",
    " " + (submissionStatus.startsWith("Error") ? "error" : "")
  ].join(" ").trim()}">${`${submissionStatus.startsWith("Error") ? `<span class="text-red-600">Error!</span>` : ``}`}</p></div></form></section></div>`;
});
export {
  Page as default
};
