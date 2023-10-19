import { ref, computed, onMounted, nextTick, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./SecondaryButton.a73b96bc.mjs";
import { _ as _sfc_main$4 } from "./Button.175f8d18.mjs";
import _sfc_main$1 from "./RegisterKey.97f51283.mjs";
import _sfc_main$5 from "./DeleteKeyModal.3df78da9.mjs";
import _sfc_main$2 from "./UpdateKey.a60d82e8.mjs";
import { w as webAuthnNotSupportedMessage } from "./methods.813b66ac.mjs";
import { browserSupportsWebAuthn, startRegistration } from "@simplewebauthn/browser";
import "./Label.fd16ae4b.mjs";
import "./Input.6700974d.mjs";
import "./InputError.5e8397a2.mjs";
import "./WaitForKey.58a68540.mjs";
import "./ConfirmationModal.306cb26b.mjs";
import "./Modal.ac06757f.mjs";
import "./DangerButton.58b8facf.mjs";
const _sfc_main = {
  __name: "WebauthnKeys",
  __ssrInlineRender: true,
  props: {
    webauthnKeys: Array,
    publicKey: Object
  },
  setup(__props) {
    const props = __props;
    const isSupported = ref(true);
    const errorMessage = ref("");
    const register = ref(false);
    const registerForm = useForm({
      name: ""
    });
    const keyBeingDeleted = ref(null);
    const keyBeingUpdated = ref(null);
    const nameUpdate = computed(
      () => keyBeingUpdated.value > 0 ? props.webauthnKeys.find((key) => key.id === keyBeingUpdated.value).name : ""
    );
    onMounted(() => {
      if (!browserSupportsWebAuthn()) {
        isSupported.value = false;
        errorMessage.value = webAuthnNotSupportedMessage();
      }
      if (props.publicKey) {
        showRegisterModal();
        nextTick().then(() => registerWaitForKey(props.publicKey));
      }
    });
    const _errorMessage = (name, message) => {
      switch (name) {
        case "InvalidStateError":
          return "This key is already registered. It\u2019s not necessary to register it again.";
        case "NotAllowedError":
          return "The operation either timed out or was not allowed.";
        default:
          return message;
      }
    };
    const showRegisterModal = () => {
      errorMessage.value = "";
      register.value = true;
    };
    const start = () => {
      errorMessage.value = "";
      registerForm.clearErrors();
    };
    const registerWaitForKey = (publicKey) => {
      startRegistration(publicKey).then((data) => webauthnRegisterCallback(data)).catch((error) => {
        errorMessage.value = _errorMessage(error.name, error.message);
      });
    };
    const webauthnRegisterCallback = (data) => {
      registerForm.transform((form) => ({
        ...form,
        ...data
      })).post(route("webauthn.store"), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          register.value = false;
          registerForm.reset();
        },
        onError: (error) => {
          var _a;
          errorMessage.value = (_a = error.email) != null ? _a : error.data.errors.webauthn;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!isSupported.value) {
        _push(`<div>${ssrInterpolate(unref(webAuthnNotSupportedMessage)())}</div>`);
      } else if (register.value) {
        _push(`<div class="p-6 sm:px-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          "error-message": errorMessage.value,
          form: unref(registerForm),
          name: unref(registerForm).name,
          "onUpdate:name": ($event) => unref(registerForm).name = $event,
          onStart: start,
          onStop: ($event) => register.value = false,
          onRegister: registerWaitForKey
        }, null, _parent));
        _push(`</div>`);
      } else if (keyBeingUpdated.value > 0) {
        _push(`<div class="p-6 sm:px-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          keyid: keyBeingUpdated.value,
          "name-update": nameUpdate.value,
          onClose: ($event) => keyBeingUpdated.value = null
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="p-6 sm:px-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800"><h1 class="font-semibold text-xl text-gray-900 dark:text-slate-100 leading-tight mb-8"> Manage your Webauthn Keys </h1>`);
        if (__props.webauthnKeys.length > 0) {
          _push(`<p class="dark:text-gray-100 text-lg bg-teal-50 dark:bg-teal-800 border-t-2 border-teal-200 dark:border-teal-500 rounded-b mb-4 px-4 py-8 shadow-md"> Try `);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("logout"),
            method: "post",
            class: "underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`logging out`);
              } else {
                return [
                  createTextVNode("logging out")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(` and logging back in without password, just using your registered key! </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="shadow dark:shadow-gray-700 overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg"><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800"><thead class="bg-gray-50 dark:bg-slate-800"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"> Name </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider hidden md:block"> Last use </th><th scope="col" class="relative px-6 py-3"><span class="sr-only">Actions</span></th></tr></thead><tbody class="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-800">`);
        if (__props.webauthnKeys.length === 0) {
          _push(`<tr><td colspan="3" class="px-6 py-4 whitespace-nowrap text-center"><em>No keys registered yet</em></td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(__props.webauthnKeys, (key) => {
          _push(`<tr><td class="px-6 py-4 whitespace-nowrap"><strong class="text-sm font-medium text-gray-900 dark:text-slate-100">${ssrInterpolate(key.name)}</strong></td><td class="px-6 py-4 whitespace-nowrap time hidden md:block"><span class="text-sm text-gray-500 dark:text-gray-300">${ssrInterpolate(key.last_active)}</span></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">`);
          _push(ssrRenderComponent(_sfc_main$3, {
            class: "pointer text-indigo-400 dark:text-indigo-600 hover:text-indigo-600 hover:dark:text-indigo-400",
            href: "",
            onClick: ($event) => keyBeingUpdated.value = key.id
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
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$3, {
            class: "ml-2 pointer text-indigo-400 dark:text-indigo-600 hover:text-indigo-600 hover:dark:text-indigo-400",
            onClick: ($event) => keyBeingDeleted.value = key.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Delete `);
              } else {
                return [
                  createTextVNode(" Delete ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="mt-8 text-2xl">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          type: "button",
          onClick: showRegisterModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Register a new key `);
            } else {
              return [
                createTextVNode(" Register a new key ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(ssrRenderComponent(_sfc_main$5, {
        keyid: keyBeingDeleted.value,
        onClose: ($event) => keyBeingDeleted.value = null
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webauthn/WebauthnKeys.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
