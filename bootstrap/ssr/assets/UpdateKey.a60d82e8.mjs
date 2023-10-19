import { ref, watch, nextTick, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./Label.fd16ae4b.mjs";
import { _ as _sfc_main$2 } from "./Input.6700974d.mjs";
import { _ as _sfc_main$3 } from "./InputError.5e8397a2.mjs";
import { _ as _sfc_main$5 } from "./Button.175f8d18.mjs";
import { _ as _sfc_main$4 } from "./SecondaryButton.a73b96bc.mjs";
const _sfc_main = {
  __name: "UpdateKey",
  __ssrInlineRender: true,
  props: {
    keyid: Number,
    nameUpdate: String
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const form = useForm({
      name: ""
    });
    const nameInput = ref(null);
    const updateKey = () => {
      form.put(route("webauthn.update", props.keyid), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          form.reset();
          nextTick().then(() => emit("close"));
        }
      });
    };
    watch(
      () => props.nameUpdate,
      (value) => {
        form.name = value;
        nextTick().then(() => nameInput.value.focus());
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "keyname",
        value: "Key name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        class: "mt-1 block",
        id: "keyname",
        ref_key: "nameInput",
        ref: nameInput,
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        onKeyup: updateKey
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="mt-5">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        onClick: ($event) => _ctx.$emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancel `);
          } else {
            return [
              createTextVNode(" Cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        class: ["ms-2", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update `);
          } else {
            return [
              createTextVNode(" Update ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webauthn/Partials/UpdateKey.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
