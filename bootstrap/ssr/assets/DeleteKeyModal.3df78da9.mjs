import { mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ConfirmationModal.306cb26b.mjs";
import { _ as _sfc_main$3 } from "./DangerButton.58b8facf.mjs";
import { _ as _sfc_main$2 } from "./SecondaryButton.a73b96bc.mjs";
import "./Modal.ac06757f.mjs";
const _sfc_main = {
  __name: "DeleteKeyModal",
  __ssrInlineRender: true,
  props: {
    keyid: Number
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const form = useForm({});
    const deleteKey = () => {
      form.delete(route("webauthn.destroy", props.keyid), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => emit("close")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        show: __props.keyid > 0,
        onClose: ($event) => _ctx.$emit("close")
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete a new key `);
          } else {
            return [
              createTextVNode(" Delete a new key ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Are you sure you would like to delete this key? `);
          } else {
            return [
              createTextVNode(" Are you sure you would like to delete this key? ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              onClick: ($event) => _ctx.$emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: ["ml-2", { "opacity-25": unref(form).processing }],
              onClick: deleteKey,
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete `);
                } else {
                  return [
                    createTextVNode(" Delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                onClick: ($event) => _ctx.$emit("close")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$3, {
                class: ["ml-2", { "opacity-25": unref(form).processing }],
                onClick: deleteKey,
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Delete ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webauthn/Partials/DeleteKeyModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
