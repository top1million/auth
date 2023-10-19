import { useSSRContext, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AppLayout.9bd37437.mjs";
import _sfc_main$4 from "./WebauthnKeys.e26c14fc.mjs";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Sponsor.a650497c.mjs";
import "./SecondaryButton.a73b96bc.mjs";
import "./Button.175f8d18.mjs";
import "./RegisterKey.97f51283.mjs";
import "./Label.fd16ae4b.mjs";
import "./Input.6700974d.mjs";
import "./InputError.5e8397a2.mjs";
import "./WaitForKey.58a68540.mjs";
import "./DeleteKeyModal.3df78da9.mjs";
import "./ConfirmationModal.306cb26b.mjs";
import "./Modal.ac06757f.mjs";
import "./DangerButton.58b8facf.mjs";
import "./UpdateKey.a60d82e8.mjs";
import "./methods.813b66ac.mjs";
import "@simplewebauthn/browser";
const _sfc_main$2 = {};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ApplicationLogo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="p-6 sm:px-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800"><div class="mt-8 text-2xl dark:text-slate-100"> Laravel-webauthn </div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    webauthnKeys: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-slate-200 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-slate-200 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-slate-900 overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { webauthnKeys: __props.webauthnKeys }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-slate-900 overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode(_sfc_main$1),
                    createVNode(_sfc_main$4, { webauthnKeys: __props.webauthnKeys }, null, 8, ["webauthnKeys"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
