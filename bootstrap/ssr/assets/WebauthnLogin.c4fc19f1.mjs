import { ref, watch, onMounted, nextTick, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./InputError.5e8397a2.mjs";
import { _ as _sfc_main$3 } from "./Button.175f8d18.mjs";
import _sfc_main$1 from "./WaitForKey.58a68540.mjs";
import { w as webAuthnNotSupportedMessage } from "./methods.813b66ac.mjs";
import { browserSupportsWebAuthn, startAuthentication } from "@simplewebauthn/browser";
const _sfc_main = {
  __name: "WebauthnLogin",
  __ssrInlineRender: true,
  props: {
    publicKey: Object,
    remember: Boolean
  },
  setup(__props) {
    const props = __props;
    const isSupported = ref(true);
    const errorMessage = ref("");
    const processing = ref(false);
    const authForm = useForm({});
    watch(
      () => props.publicKey,
      (value) => {
        errorMessage.value = "";
        loginWaitForKey(value);
      }
    );
    onMounted(() => {
      if (!browserSupportsWebAuthn()) {
        isSupported.value = false;
        errorMessage.value = webAuthnNotSupportedMessage();
      }
      if (props.publicKey) {
        loginWaitForKey(props.publicKey);
      }
    });
    const _errorMessage = (name, message) => {
      switch (name) {
        case "InvalidStateError":
          return "Unexpected error on login.";
        case "NotAllowedError":
          return "The operation either timed out or was not allowed.";
        default:
          return message;
      }
    };
    const start = () => {
      errorMessage.value = "";
      router.reload({ only: ["publicKey"] });
    };
    const stop = () => {
      processing.value = false;
    };
    const loginWaitForKey = (publicKey) => {
      processing.value = true;
      nextTick().then(() => startAuthentication(publicKey)).then((data) => webauthnLoginCallback(data)).catch((error) => {
        errorMessage.value = _errorMessage(error.name, error.message);
      });
    };
    const webauthnLoginCallback = (data) => {
      authForm.transform(() => ({
        ...data,
        remember: props.remember ? "on" : ""
      })).post(route("webauthn.auth"), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => stop(),
        onError: (error) => {
          var _a;
          errorMessage.value = (_a = error.message) != null ? _a : error.data.errors[0];
          stop();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!isSupported.value) {
        _push(`<div>${ssrInterpolate(unref(webAuthnNotSupportedMessage)())}</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          "error-message": errorMessage.value,
          form: unref(authForm),
          onRetry: ($event) => start()
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          message: unref(authForm).errors.data,
          class: "mt-2"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "ms-2",
          onClick: ($event) => start(),
          style: !processing.value ? null : { display: "none" }
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
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webauthn/WebauthnLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
