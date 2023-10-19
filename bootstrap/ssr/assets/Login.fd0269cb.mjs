import { ref, watch, onMounted, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { J as JetAuthenticationCard } from "./AuthenticationCard.43e5041e.mjs";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo.1bf260a5.mjs";
import { _ as _sfc_main$8 } from "./Button.175f8d18.mjs";
import { _ as _sfc_main$4 } from "./SecondaryButton.a73b96bc.mjs";
import { _ as _sfc_main$6 } from "./Input.6700974d.mjs";
import { _ as _sfc_main$7 } from "./Checkbox.2c1d8116.mjs";
import { _ as _sfc_main$5 } from "./Label.fd16ae4b.mjs";
import { _ as _sfc_main$2 } from "./ValidationErrors.b7b661d7.mjs";
import _sfc_main$3 from "./WebauthnLogin.c4fc19f1.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./InputError.5e8397a2.mjs";
import "./WaitForKey.58a68540.mjs";
import "./methods.813b66ac.mjs";
import "@simplewebauthn/browser";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String,
    publicKey: Object,
    userName: String
  },
  setup(__props) {
    const props = __props;
    const webauthn = ref(true);
    const publicKeyRef = ref(null);
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    watch(() => props.publicKey, (value) => {
      publicKeyRef.value = value;
    });
    onMounted(() => {
      publicKeyRef.value = props.publicKey;
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    const reload = () => {
      publicKeyRef.value = null;
      webauthn.value = true;
      router.reload({ only: ["publicKey"] });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
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
            _push2(ssrRenderComponent(_sfc_main$2, { class: "mb-4" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.publicKey && webauthn.value) {
              _push2(`<div${_scopeId}><div class="mb-4 text-lg text-gray-900 dark:text-slate-100 text-center"${_scopeId}>${ssrInterpolate(__props.userName)}</div><div class="mb-4 max-w-xl text-gray-600 dark:text-gray-400"${_scopeId}> Connect with your security key </div>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                remember: true,
                "public-key": publicKeyRef.value
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                class: "mr-2 mt-4",
                onClick: ($event) => webauthn.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Use your password `);
                  } else {
                    return [
                      createTextVNode(" Use your password ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<form${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                for: "email",
                value: "Email"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                id: "email",
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                type: "email",
                class: "mt-1 block w-full",
                required: "",
                autofocus: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                for: "password",
                value: "Password"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                id: "password",
                modelValue: unref(form).password,
                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                type: "password",
                class: "mt-1 block w-full",
                required: "",
                autocomplete: "current-password"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                checked: unref(form).remember,
                "onUpdate:checked": ($event) => unref(form).remember = $event,
                name: "remember"
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-2 text-sm text-gray-600 dark:text-gray-200"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
              if (__props.canResetPassword) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("password.request"),
                  class: "underline text-sm text-gray-600 hover:text-gray-900 dark:text-slate-100"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Forgot your password? `);
                    } else {
                      return [
                        createTextVNode(" Forgot your password? ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$8, {
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
              _push2(`</div>`);
              if (publicKeyRef.value) {
                _push2(`<div class="block mt-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$4, {
                  class: "mr-2",
                  onClick: reload
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Use your security key `);
                    } else {
                      return [
                        createTextVNode(" Use your security key ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</form>`);
            }
          } else {
            return [
              createVNode(_sfc_main$2, { class: "mb-4" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              __props.publicKey && webauthn.value ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "mb-4 text-lg text-gray-900 dark:text-slate-100 text-center" }, toDisplayString(__props.userName), 1),
                createVNode("div", { class: "mb-4 max-w-xl text-gray-600 dark:text-gray-400" }, " Connect with your security key "),
                createVNode(_sfc_main$3, {
                  remember: true,
                  "public-key": publicKeyRef.value
                }, null, 8, ["public-key"]),
                createVNode(_sfc_main$4, {
                  class: "mr-2 mt-4",
                  onClick: withModifiers(($event) => webauthn.value = false, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Use your password ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : (openBlock(), createBlock("form", {
                key: 2,
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$5, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$6, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$5, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$6, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$7, {
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event,
                      name: "remember"
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-200" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 dark:text-slate-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(_sfc_main$8, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                publicKeyRef.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "block mt-4"
                }, [
                  createVNode(_sfc_main$4, {
                    class: "mr-2",
                    onClick: withModifiers(reload, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Use your security key ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ], 40, ["onSubmit"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
