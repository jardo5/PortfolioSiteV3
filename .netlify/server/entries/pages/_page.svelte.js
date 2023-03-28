import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index2.js";
const RandomLetters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text = "";
  return `<h1>${escape(text)}</h1>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-18v7rw8_START -->${$$result.title = `<title>Jarod Schupp</title>`, ""}<!-- HEAD_svelte-18v7rw8_END -->`, ""}

<section class="bg-no-repeat h-screen w-full justify-between font-FiraCode text-white flex flex-row px-12 animate-fade-in"><section class="flex flex-col justify-center w-1/2"><span class="text-8xl">${validate_component(RandomLetters, "RandomLetters").$$render($$result, {}, {}, {})}</span>
        <h2 class="text-5xl">Software Engineer</h2></section>
    <img class="mx-40" src="undrawCode.svg" alt="undrawCode" height="500px" width="500px"></section>`;
});
export {
  Page as default
};
