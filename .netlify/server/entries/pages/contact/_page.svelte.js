import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1huq8pl_START -->${$$result.title = `<title>Contact</title>`, ""}<!-- HEAD_svelte-1huq8pl_END -->`, ""}

<section class="font-FiraCode h-screen w-full flex justify-center items-center"><div class="w-3/4 h-[85%] rounded-3xl bg-contactWave bg-no-repeat bg-[#ffffffc4] flex flex-row overflow-clip border border-black shadow-2xl drop-shadow-lg"><div class="w-1/2 h-full flex justify-center items-center flex-row"><img src="contactSVG.svg" alt="Contact" width="" height="" class="">
            <hr class="border-r-indigo-400 border-r-4"></div>
        <div class="w-1/2 h-full flex mt-32 items-center flex-col"><h1 class="text-3xl font-extrabold text-black">Contact Me</h1>
            <form class="w-full h-full px-12 "><div class="flex flex-row gap-12"><div class="flex flex-col w-1/2"><label for="name" class="text-2xl text-black">Name</label>
                        <input disabled placeholder="Disabled" type="text" name="name" id="name" class="border-2 border-black bg-gray-200 text-black rounded-2xl p-2"></div>
                    <div class="flex flex-col w-1/2"><label for="email" class="text-2xl text-black">Email</label>
                        <input disabled type="email" name="email" id="email" placeholder="Disabled" class="border-2 border-black bg-gray-200 text-black rounded-2xl p-2"></div></div>
                <div class="flex flex-col flex-grow"><label for="message" class="text-2xl text-black">Message</label>
                    <textarea disabled placeholder="Disabled until further notice, I'm active on LinkedIn." name="message" id="message" cols="30" rows="10" class="flex-grow border-2 resize-none border-black bg-gray-200 text-black rounded-2xl p-2"></textarea></div>
                <div class="flex flex-row justify-center py-4"><button disabled type="submit" class="bg-black text-white rounded-lg p-2 hover:bg-slate-900 w-1/2 lg:w-1/4">Submit</button></div>
                <div class="flex items-center justify-center"><span class="w-1/3 block bg-black h-[1px]"></span>
                    <h1 class="text-black font-black">OR</h1>
                    <span class="w-1/3 block bg-black h-[1px]"></span></div>
                <div class="flex flex-row justify-center gap-5 "><a href="mailto:schuppjarod@gmail.com"><img src="gmail.svg" alt="gmail" height="55px" width="55px"></a>
                    <a href="https://www.linkedin.com/in/jarod-schupp/" target="_blank"><img src="linkedin.svg" alt="linkedin" height="55px" width="55px"></a></div></form></div></div></section>`;
});
export {
  Page as default
};
