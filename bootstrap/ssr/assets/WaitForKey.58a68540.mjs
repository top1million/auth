import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Button.175f8d18.mjs";
const _sfc_main = {
  __name: "WaitForKey",
  __ssrInlineRender: true,
  props: {
    errorMessage: String,
    form: Object
  },
  emits: ["retry"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.errorMessage !== "") {
        _push(`<div class="form-error-message mb3"><div class="relative rounded border border-red-400 bg-red-100 px-4 py-3 dark:border-red-600 dark:bg-red-900" role="alert"><p class="font-bold text-red-700 dark:text-red-300">${ssrInterpolate(__props.errorMessage)}</p>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          class: "mt-4",
          onClick: ($event) => _ctx.$emit("retry")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Retry `);
            } else {
              return [
                createTextVNode(" Retry ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!--[-->`);
        if (__props.form.processing) {
          _push(`<div class="mb-4 flex rounded-b border-t-4 border-teal-500 bg-teal-100 px-4 py-8 shadow-md dark:bg-teal-900 dark:shadow-gray-700" role="alert"><div class="me-2 text-teal-800 dark:text-teal-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" class="h-8 w-8" viewBox="-50 0 700 600"><g transform="matrix(42.857142857142854,0,0,42.857142857142854,0,0)"><g><polyline points="5.62 7.38 11.5 1.5 13.5 3.5"></polyline><line x1="9.25" y1="3.75" x2="11" y2="5.5"></line><circle cx="3.5" cy="9.5" r="3"></circle></g></g></svg></div><p class="text-2xl font-bold text-teal-900 dark:text-teal-100"> Validating key\u2026 </p></div>`);
        } else if (!__props.form.hasErrors) {
          _push(`<div class="mb-4 flex rounded-b border-t-4 border-indigo-500 bg-indigo-100 px-4 py-8 shadow-md dark:bg-indigo-900 dark:shadow-gray-700"><div class="me-2 text-indigo-800 dark:text-indigo-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" class="h-8 w-8" viewBox="-50 0 700 600"><g transform="matrix(42.857142857142854,0,0,42.857142857142854,0,0)"><g><polyline points="5.62 7.38 11.5 1.5 13.5 3.5"></polyline><line x1="9.25" y1="3.75" x2="11" y2="5.5"></line><circle cx="3.5" cy="9.5" r="3"></circle></g></g></svg></div><p class="text-2xl font-bold text-indigo-900 dark:text-indigo-100"> Waiting for key\u2026 </p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webauthn/Partials/WaitForKey.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
