import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { ZiggyVue } from "ziggy-js/dist/vue.m.js";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.vue": () => import("./assets/Index.320b745f.mjs"), "./Pages/API/Partials/ApiTokenManager.vue": () => import("./assets/ApiTokenManager.bee54d2f.mjs"), "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword.9fd6f631.mjs"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword.2facbc33.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login.fd0269cb.mjs"), "./Pages/Auth/Register.vue": () => import("./assets/Register.33dbda74.mjs"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword.745edbbf.mjs"), "./Pages/Auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge.f95b2739.mjs"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail.3a57981e.mjs"), "./Pages/Dashboard.vue": () => import("./assets/Dashboard.de88c950.mjs"), "./Pages/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy.4e0ba722.mjs"), "./Pages/Profile/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm.f06f817e.mjs"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": () => import("./assets/LogoutOtherBrowserSessionsForm.ad76cdf4.mjs"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": () => import("./assets/TwoFactorAuthenticationForm.508effa3.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm.2a49eeed.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm.b9b2437a.mjs"), "./Pages/Profile/Show.vue": () => import("./assets/Show.8c581fda.mjs"), "./Pages/TermsOfService.vue": () => import("./assets/TermsOfService.7603ce9e.mjs"), "./Pages/Webauthn/Partials/DeleteKeyModal.vue": () => import("./assets/DeleteKeyModal.3df78da9.mjs"), "./Pages/Webauthn/Partials/RegisterKey.vue": () => import("./assets/RegisterKey.97f51283.mjs"), "./Pages/Webauthn/Partials/UpdateKey.vue": () => import("./assets/UpdateKey.a60d82e8.mjs"), "./Pages/Webauthn/Partials/WaitForKey.vue": () => import("./assets/WaitForKey.58a68540.mjs"), "./Pages/Webauthn/WebauthnKeys.vue": () => import("./assets/WebauthnKeys.e26c14fc.mjs"), "./Pages/Webauthn/WebauthnLogin.vue": () => import("./assets/WebauthnLogin.c4fc19f1.mjs"), "./Pages/Welcome.vue": () => import("./assets/Welcome.560abc08.mjs") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(ZiggyVue, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    }
  })
);
