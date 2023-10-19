import { mergeProps, withCtx, createVNode, openBlock, createBlock, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Modal.ac06757f.mjs";
const _sfc_main = {
  __name: "ConfirmationModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white dark:bg-gray-800"${_scopeId}><div${_scopeId}><div class="flex items-center px-4 pt-5 pb-4"${_scopeId}><div class="mx-auto shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-6 sm:w-6"${_scopeId}><svg class="h-4 w-4 text-red-600 dark: text-red-400" stroke="currentColor" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"${_scopeId}></path></svg></div><h3 class="ml-3 text-lg"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</h3></div><div class="px-4 pb-4 sm:pb-4 text-center sm:text-left"${_scopeId}><div class="mt-2"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div></div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-900 text-right"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white dark:bg-gray-800" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "flex items-center px-4 pt-5 pb-4" }, [
                    createVNode("div", { class: "mx-auto shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-6 sm:w-6" }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-4 w-4 text-red-600 dark: text-red-400",
                        stroke: "currentColor",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                      ]))
                    ]),
                    createVNode("h3", { class: "ml-3 text-lg" }, [
                      renderSlot(_ctx.$slots, "title")
                    ])
                  ]),
                  createVNode("div", { class: "px-4 pb-4 sm:pb-4 text-center sm:text-left" }, [
                    createVNode("div", { class: "mt-2" }, [
                      renderSlot(_ctx.$slots, "content")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-900 text-right" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ConfirmationModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
