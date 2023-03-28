import { c as create_ssr_component, f as createEventDispatcher, d as add_attribute, a as subscribe, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { i as isLoggedIn } from "../../../chunks/isLoggedIn.js";
import "firebase/auth";
import { w as writable } from "../../../chunks/index.js";
import "firebase/firestore";
const login_svelte_svelte_type_style_lang = "";
const css = {
  code: "#card.svelte-15bisee{@apply backdrop-blur-[_9px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)];;background:rgba(255, 255, 255, 0.25);-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px)}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email, password;
  createEventDispatcher();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-10wrrsy_START -->${$$result.title = `<title>Secret Login</title>`, ""}<!-- HEAD_svelte-10wrrsy_END -->`, ""}

<div class="h-full w-full justify-center flex items-center"><section id="card" class="h-3/5 w-1/4 svelte-15bisee"><form class="h-full w-full"><div class="h-full w-full flex flex-col justify-center items-center text-black"><h1 class="text-2xl py-4 font-bold ">Admin Login</h1>
                <input type="text" name="email" placeholder="Email" class="border-2 border-solid border-gray-300 rounded-md p-2 my-2"${add_attribute("value", email, 0)}>
                <input type="password" name="password" placeholder="Password" class="border-2 border-solid border-gray-300 rounded-md p-2 my-2"${add_attribute("value", password, 0)}>
                <button type="submit" class="bg-blue-500 text-white rounded-2xl px-6 py-2 my-2">Login</button></div></form></section></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errorMessage, $$unsubscribe_errorMessage;
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  const errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  $$unsubscribe_errorMessage();
  $$unsubscribe_isLoggedIn();
  return `${$$result.head += `<!-- HEAD_svelte-1t6mt9y_START -->${$$result.title = `<title>
        Login
    </title>`, ""}<!-- HEAD_svelte-1t6mt9y_END -->`, ""}

<div class="h-screen w-full flex justify-center items-center"><div class="h-full w-full p-8 rounded-md flex flex-col items-center"><span class="${[
    "text-red-600 absolute font-extrabold text-8xl my-2 text-center animate-pulseFade",
    $errorMessage != "" ? "visible" : ""
  ].join(" ").trim()}">${escape($errorMessage)}</span>
        ${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
