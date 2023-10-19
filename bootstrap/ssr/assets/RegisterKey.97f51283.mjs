import { ref, onMounted, nextTick, watch, computed, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Label.fd16ae4b.mjs";
import { _ as _sfc_main$3 } from "./Input.6700974d.mjs";
import { _ as _sfc_main$1 } from "./InputError.5e8397a2.mjs";
import { _ as _sfc_main$5 } from "./SecondaryButton.a73b96bc.mjs";
import { _ as _sfc_main$6 } from "./Button.175f8d18.mjs";
import _sfc_main$4 from "./WaitForKey.58a68540.mjs";
const _sfc_main = {
  __name: "RegisterKey",
  __ssrInlineRender: true,
  props: {
    errorMessage: String,
    name: String,
    form: Object
  },
  emits: ["start", "stop", "register", "update:name"],
  setup(__props, { emit }) {
    const props = __props;
    const registering = ref(false);
    const error = ref(props.errorMessage);
    const nameInput = ref(null);
    onMounted(() => {
      props.form.reset();
      nextTick().then(() => nameInput.value.focus());
    });
    watch(
      () => props.errorMessage,
      (value) => {
        error.value = value;
      }
    );
    const processing = computed(() => registering.value === true || props.form.processing);
    const begin = () => {
      registering.value = true;
      error.value = "";
      nextTick().then(() => emit("start"));
      axios.post(route("webauthn.store.options")).then((response) => {
        if (response.data !== void 0) {
          registerWaitForKey(response.data.publicKey);
        } else {
          nextTick().then(() => registerWaitForKey(response.props.publicKey));
        }
      }).catch((e) => {
        stop();
        error.value = e.response.data.errors[0];
      });
    };
    const registerWaitForKey = (publicKey) => {
      if (registering.value === true) {
        emit("register", publicKey);
      }
    };
    const stop = () => {
      registering.value = false;
      nextTick().then(() => emit("stop"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: __props.form.errors.register,
        class: "mt-2"
      }, null, _parent));
      _push(`<div class="mt-4" style="${ssrRenderStyle(!processing.value || __props.form.errors.name ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: "name",
        value: "Key name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        type: "text",
        class: "mt-1 block w-3/4",
        id: "name",
        ref_key: "nameInput",
        ref: nameInput,
        value: __props.name,
        onInput: ($event) => _ctx.$emit("update:name", $event.target.value),
        required: "",
        onKeyup: ($event) => begin()
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        message: __props.form.errors.name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="mt-4" style="${ssrRenderStyle(registering.value ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        "error-message": error.value,
        form: __props.form,
        onRetry: ($event) => begin()
      }, null, _parent));
      _push(`</div><div class="mt-5 flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        onClick: ($event) => stop()
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
      _push(ssrRenderComponent(_sfc_main$6, {
        class: ["ms-2", { "opacity-25": processing.value }],
        disabled: processing.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Submit `);
          } else {
            return [
              createTextVNode(" Submit ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webauthn/Partials/RegisterKey.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
