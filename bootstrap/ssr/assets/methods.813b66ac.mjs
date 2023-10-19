import { computed } from "vue";
const webAuthnNotSupportedMessage = computed(
  () => !window.isSecureContext && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" ? "WebAuthn only supports secure connections. Please load this page with https scheme." : "Your browser doesn\u2019t currently support WebAuthn."
);
export {
  webAuthnNotSupportedMessage as w
};
