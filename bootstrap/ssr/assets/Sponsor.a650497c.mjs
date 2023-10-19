import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const Sponsor_vue_vue_type_style_index_0_scoped_e77ce487_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "https://github.com/sponsors/asbiin",
    rel: "noopener noreferrer",
    title: "Sponsor me on GitHub",
    target: "_blank",
    class: "px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-slate-400 dark:border-slate-600 rounded-md text-gray-900 dark:text-gray-100 tracking-widest hover:bg-gray-200 hover:dark:bg-gray-800 active:bg-gray-200 active:dark:bg-gray-800 focus:outline-none focus:border-gray-900 focus:dark:border-gray-100 focus:ring focus:ring-gray-300 focus:dark:ring-gray-700 disabled:opacity-25"
  }, _attrs))} data-v-e77ce487><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="inline icon-sponsor mr-1 align-middle color-fg-sponsors overflow-visible" fill="currentColor" data-v-e77ce487><path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z" data-v-e77ce487></path></svg><span class="align-middle" data-v-e77ce487>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(` Sponsor me! `);
  }, _push, _parent);
  _push(`</span></a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Sponsor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sponsor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e77ce487"]]);
export {
  Sponsor as S
};
