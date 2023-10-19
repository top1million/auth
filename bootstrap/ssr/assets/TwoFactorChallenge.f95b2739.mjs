import { ref, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, withModifiers, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { J as JetAuthenticationCard } from "./AuthenticationCard.43e5041e.mjs";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo.1bf260a5.mjs";
import { _ as _sfc_main$6 } from "./Button.175f8d18.mjs";
import { _ as _sfc_main$5 } from "./Input.6700974d.mjs";
import { _ as _sfc_main$4 } from "./Label.fd16ae4b.mjs";
import { _ as _sfc_main$3 } from "./ValidationErrors.b7b661d7.mjs";
import _sfc_main$2 from "./WebauthnLogin.c4fc19f1.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./InputError.5e8397a2.mjs";
import "./WaitForKey.58a68540.mjs";
import "./methods.813b66ac.mjs";
import "@simplewebauthn/browser";
const _sfc_main = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  props: {
    two_factor: Boolean,
    remember: Boolean,
    publicKey: Object
  },
  setup(__props) {
    const recovery = ref(false);
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const recoveryCodeInput = ref(null);
    const codeInput = ref(null);
    const toggleRecovery = async () => {
      recovery.value ^= true;
      await nextTick();
      if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = "";
      } else {
        codeInput.value.focus();
        form.recovery_code = "";
      }
    };
    const submit = () => {
      form.post(route("two-factor.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Two-factor Confirmation" }, null, _parent));
      _push(ssrRenderComponent(JetAuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.publicKey) {
              _push2(`<div${_scopeId}><h1 class="mb-4 max-w-xl text-gray-600 dark:text-gray-400"${_scopeId}> Please confirm access to your account by validating your security key. </h1>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                remember: __props.remember,
                publicKey: __props.publicKey
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.two_factor) {
              _push2(`<div${_scopeId}><div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
              if (!recovery.value) {
                _push2(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
              } else {
                _push2(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$3, { class: "mb-4" }, null, _parent2, _scopeId));
              _push2(`<form${_scopeId}>`);
              if (!recovery.value) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$4, {
                  for: "code",
                  value: "Code"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  id: "code",
                  ref_key: "codeInput",
                  ref: codeInput,
                  modelValue: unref(form).code,
                  "onUpdate:modelValue": ($event) => unref(form).code = $event,
                  type: "text",
                  inputmode: "numeric",
                  class: "mt-1 block w-full",
                  autofocus: "",
                  autocomplete: "one-time-code"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$4, {
                  for: "recovery_code",
                  value: "Recovery Code"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  id: "recovery_code",
                  ref_key: "recoveryCodeInput",
                  ref: recoveryCodeInput,
                  modelValue: unref(form).recovery_code,
                  "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autocomplete: "one-time-code"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}><button type="button" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-slate-100 underline cursor-pointer"${_scopeId}>`);
              if (!recovery.value) {
                _push2(`<!--[--> Use a recovery code <!--]-->`);
              } else {
                _push2(`<!--[--> Use an authentication code <!--]-->`);
              }
              _push2(`</button>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: ["ml-4", { "opacity-25": unref(form).processing }],
                disabled: unref(form).processing
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Log in `);
                  } else {
                    return [
                      createTextVNode(" Log in ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.publicKey ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("h1", { class: "mb-4 max-w-xl text-gray-600 dark:text-gray-400" }, " Please confirm access to your account by validating your security key. "),
                createVNode(_sfc_main$2, {
                  remember: __props.remember,
                  publicKey: __props.publicKey
                }, null, 8, ["remember", "publicKey"])
              ])) : createCommentVNode("", true),
              __props.two_factor ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, [
                  !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                  ], 64))
                ]),
                createVNode(_sfc_main$3, { class: "mb-4" }),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  !recovery.value ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_sfc_main$4, {
                      for: "code",
                      value: "Code"
                    }),
                    createVNode(_sfc_main$5, {
                      id: "code",
                      ref_key: "codeInput",
                      ref: codeInput,
                      modelValue: unref(form).code,
                      "onUpdate:modelValue": ($event) => unref(form).code = $event,
                      type: "text",
                      inputmode: "numeric",
                      class: "mt-1 block w-full",
                      autofocus: "",
                      autocomplete: "one-time-code"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_sfc_main$4, {
                      for: "recovery_code",
                      value: "Recovery Code"
                    }),
                    createVNode(_sfc_main$5, {
                      id: "recovery_code",
                      ref_key: "recoveryCodeInput",
                      ref: recoveryCodeInput,
                      modelValue: unref(form).recovery_code,
                      "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                      type: "text",
                      class: "mt-1 block w-full",
                      autocomplete: "one-time-code"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])),
                  createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                    createVNode("button", {
                      type: "button",
                      class: "text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-slate-100 underline cursor-pointer",
                      onClick: withModifiers(toggleRecovery, ["prevent"])
                    }, [
                      !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(" Use a recovery code ")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Use an authentication code ")
                      ], 64))
                    ], 8, ["onClick"]),
                    createVNode(_sfc_main$6, {
                      class: ["ml-4", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log in ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
