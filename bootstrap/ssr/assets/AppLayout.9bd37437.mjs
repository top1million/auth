import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, ref, computed, watch, onMounted, onUnmounted, unref, renderSlot, openBlock, createBlock, toDisplayString, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from "vue/server-renderer";
import { usePage, Link, Head, router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { S as Sponsor } from "./Sponsor.a650497c.mjs";
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_rdf58RDF = resolveComponent("rdf:RDF");
  const _component_cc58Work = resolveComponent("cc:Work");
  const _component_dc58format = resolveComponent("dc:format");
  const _component_dc58type = resolveComponent("dc:type");
  const _component_dc58title = resolveComponent("dc:title");
  const _component_sodipodi58namedview = resolveComponent("sodipodi:namedview");
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xmlns:svg": "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
    width: "100",
    height: "75",
    viewBox: "0 0 100 75",
    version: "1.1",
    id: "svg21",
    "sodipodi:docname": "final-webauthn-logo-logo-color.svg",
    "inkscape:version": "0.92.4 (5da689c313, 2019-01-14)"
  }, _attrs))}><metadata id="metadata25">`);
  _push(ssrRenderComponent(_component_rdf58RDF, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_cc58Work, { "rdf:about": "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_dc58format, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`image/svg+xml`);
                  } else {
                    return [
                      createTextVNode("image/svg+xml")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_dc58type, { "rdf:resource": "http://purl.org/dc/dcmitype/StillImage" }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_dc58title, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_dc58format, null, {
                  default: withCtx(() => [
                    createTextVNode("image/svg+xml")
                  ]),
                  _: 1
                }),
                createVNode(_component_dc58type, { "rdf:resource": "http://purl.org/dc/dcmitype/StillImage" }),
                createVNode(_component_dc58title)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_cc58Work, { "rdf:about": "" }, {
            default: withCtx(() => [
              createVNode(_component_dc58format, null, {
                default: withCtx(() => [
                  createTextVNode("image/svg+xml")
                ]),
                _: 1
              }),
              createVNode(_component_dc58type, { "rdf:resource": "http://purl.org/dc/dcmitype/StillImage" }),
              createVNode(_component_dc58title)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</metadata>`);
  _push(ssrRenderComponent(_component_sodipodi58namedview, {
    pagecolor: "#ffffff",
    bordercolor: "#666666",
    borderopacity: "1",
    objecttolerance: "10",
    gridtolerance: "10",
    guidetolerance: "10",
    "inkscape:pageopacity": "0",
    "inkscape:pageshadow": "2",
    "inkscape:window-width": "1366",
    "inkscape:window-height": "705",
    id: "namedview23",
    showgrid: "false",
    "inkscape:zoom": "3.4143672",
    "inkscape:cx": "97.553133",
    "inkscape:cy": "20.08323",
    "inkscape:window-x": "-8",
    "inkscape:window-y": "-8",
    "inkscape:window-maximized": "1",
    "inkscape:current-layer": "svg21"
  }, null, _parent));
  _push(`<defs id="defs5"><clipPath id="clip-logo-color"><rect width="1046" height="782" id="rect2" x="0" y="0"></rect></clipPath></defs><rect style="${ssrRenderStyle({ "fill": "none", "stroke-width": "0.09575499" })}" y="0" x="0" id="rect7" height="75" width="100"></rect><g id="g820" transform="translate(0.1214458,-706.89637)"><path inkscape:connector-curvature="0" id="Path_21" d="m 61.518804,714.7509 a 29.773608,29.773608 0 0 0 -28.514509,26.89474 h 1.951124 a 27.641772,27.641772 0 0 1 7.930389,-16.69233 20.631058,20.631058 0 0 0 3.272794,2.46122 c -2.153668,4.16873 -3.471345,9.05372 -3.83202,14.23111 h 0.48059 c 0.369888,-5.19596 1.715817,-9.98409 3.771689,-13.98063 2.63649,1.53767 5.747549,2.67256 9.127102,3.33032 -0.570544,4.0593 -0.877173,8.60492 -0.887214,13.32801 h -2.999906 v 0.47817 h 2.999906 c 0.0096,4.72308 0.31667,9.2687 0.887214,13.32801 -3.379457,0.65767 -6.49089,1.79255 -9.127476,3.33032 -1.671546,-3.24889 -2.873492,-7.02166 -3.463498,-11.11129 h -0.48694 c 0.580873,4.10884 1.779374,7.97217 3.530553,11.36177 a 20.631058,20.631058 0 0 0 -3.272794,2.46122 27.641772,27.641772 0 0 1 -7.984742,-17.26575 H 32.947514 A 29.773608,29.773608 0 0 0 92.378548,744.51704 29.741667,29.741667 0 0 0 89.943097,732.71093 29.773608,29.773608 0 0 0 61.518804,714.7509 Z m 1.115649,1.93469 c 0.551512,0 1.09987,0.017 1.645549,0.0491 1.291037,1.20334 2.507619,3.7879 3.480869,7.48716 a 58.500998,58.500998 0 0 1 1.26302,6.34293 36.028539,36.028539 0 0 1 -6.389812,0.56482 36.028539,36.028539 0 0 1 -6.389998,-0.56482 58.50425,58.50425 0 0 1 1.263393,-6.3433 c 0.973538,-3.6983 2.190115,-6.28317 3.481056,-7.48642 0.545966,-0.0316 1.094411,-0.0495 1.645923,-0.0495 z m -2.354387,0.0995 c -1.221416,1.39041 -2.328855,3.87304 -3.234876,7.31494 a 58.928667,58.928667 0 0 0 -1.270866,6.37636 c -3.326763,-0.64924 -6.385476,-1.76716 -8.973192,-3.28026 2.430115,-4.54608 5.791001,-8.01879 9.671571,-9.82978 a 27.88726,27.88726 0 0 1 3.807363,-0.58126 z m 4.70952,7.5e-4 a 27.823856,27.823856 0 0 1 3.840238,0.59602 c 3.866417,1.81539 7.214913,5.28121 9.63795,9.81408 -2.587717,1.5133 -5.64643,2.63122 -8.973193,3.28027 a 58.932779,58.932779 0 0 0 -1.270677,-6.37618 c -0.905926,-3.44161 -2.013188,-5.9236 -3.234318,-7.31419 z m -10.525163,1.11266 c -2.318798,1.43927 -4.44993,3.50013 -6.289324,6.12513 a 28.919803,28.919803 0 0 0 -1.792732,2.92184 20.152992,20.152992 0 0 1 -3.156429,-2.37306 27.673235,27.673235 0 0 1 11.238485,-6.67391 z m 16.375736,0.0217 a 27.845564,27.845564 0 0 1 11.208226,6.64758 20.159304,20.159304 0 0 1 -3.161846,2.37773 28.920281,28.920281 0 0 0 -1.792732,-2.92184 c -1.830023,-2.61162 -3.948525,-4.66515 -6.253648,-6.10347 z m 11.547608,7.0288 a 27.82902,27.82902 0 0 1 5.800141,8.56713 27.63106,27.63106 0 0 1 2.275004,10.8072 h -7.419353 c -0.03471,-6.16484 -1.411338,-12.02764 -3.933068,-16.90882 a 20.62312,20.62312 0 0 0 3.277276,-2.46551 z m -3.697722,2.716 c 2.404771,4.6746 3.83949,10.43171 3.875352,16.65833 H 70.449971 c -0.0096,-4.72309 -0.316484,-9.26881 -0.887028,-13.32801 3.379362,-0.65776 6.490613,-1.79266 9.127102,-3.33032 z m -22.513765,3.41754 a 36.475143,36.475143 0 0 0 6.458173,0.57062 36.475812,36.475812 0 0 0 6.458174,-0.57062 c 0.565473,4.0311 0.869223,8.54677 0.879743,13.24079 h -4.171216 c -0.09699,0.16762 -0.207269,0.32761 -0.330043,0.47816 h 4.500698 c -0.0096,4.69402 -0.313791,9.20941 -0.879743,13.24079 a 36.823913,36.823913 0 0 0 -12.916347,0 c -0.5649,-4.03142 -0.868768,-8.54681 -0.878809,-13.24082 h 4.581949 C 59.757926,744.65 59.65179,744.48972 59.558714,744.32329 H 55.29691 c 0.01004,-4.69402 0.313896,-9.20941 0.87937,-13.24079 z m -23.326268,12.4757 a 29.773608,29.773608 0 0 0 0.0226,1.43485 h 1.941973 a 27.641772,27.641772 0 0 1 -0.0086,-0.19163 h 7.419354 c 0.0069,1.22526 0.06773,2.43831 0.179124,3.6344 h 0.482084 c -0.113168,-1.1901 -0.175749,-2.40285 -0.182841,-3.6344 h 7.2025 v -0.47817 h -7.2025 c 0.0014,-0.25593 0.0061,-0.51076 0.01232,-0.76505 H 42.23749 c -0.006,0.25455 -0.0107,0.50942 -0.01214,0.76505 h -7.419353 a 27.641772,27.641772 0 0 1 0.04277,-0.76505 z m 29.543305,0.76505 0.04968,0.0278 -0.08817,0.45033 h 0.633938 l -0.08817,-0.45052 0.04931,-0.0276 z m 8.056654,0.47817 h 12.115426 c -0.03586,6.22672 -1.470112,11.98421 -3.874978,16.65833 -2.636585,-1.53777 -5.747354,-2.67265 -9.127289,-3.33032 0.570543,-4.05931 0.877278,-8.60493 0.886841,-13.32801 z m 12.593588,0 h 7.41954 a 27.641581,27.641581 0 0 1 -8.079815,19.37003 20.630102,20.630102 0 0 0 -3.272793,-2.46122 c 2.52173,-4.88118 3.898353,-10.74406 3.933068,-16.90881 z m -19.547855,13.11302 a 36.423118,36.423118 0 0 1 5.528747,0.55475 58.500998,58.500998 0 0 1 -1.263019,6.34273 c -0.973538,3.69877 -2.189928,6.28316 -3.48087,7.48679 -0.545964,0.0316 -1.094693,0.0497 -1.646109,0.0497 -0.551416,0 -1.099671,-0.0181 -1.645923,-0.0497 -1.291037,-1.20363 -2.507423,-3.78802 -3.481056,-7.48679 a 58.504154,58.504154 0 0 1 -1.263019,-6.34273 36.423118,36.423118 0 0 1 7.251249,-0.55475 z m 5.998877,0.64308 c 3.326954,0.64926 6.385755,1.76718 8.973567,3.28028 -2.43021,4.54531 -5.791374,8.0186 -9.671945,9.82959 a 27.886399,27.886399 0 0 1 -3.807177,0.58145 c 1.221321,-1.3904 2.328761,-3.87314 3.234878,-7.31495 a 58.934404,58.934404 0 0 0 1.270677,-6.37637 z m -13.720257,3.9e-4 a 58.961755,58.961755 0 0 0 1.270866,6.37617 c 0.906021,3.44219 2.01346,5.92454 3.234876,7.31494 a 27.884678,27.884678 0 0 1 -3.807363,-0.58145 c -3.88057,-1.81099 -7.241734,-5.28427 -9.671945,-9.82958 2.587812,-1.51339 5.646612,-2.63121 8.973566,-3.28008 z m -9.391957,3.53036 a 28.897999,28.897999 0 0 0 1.792732,2.92183 c 1.839394,2.62511 3.970526,4.68588 6.289324,6.12514 a 27.674382,27.674382 0 0 1 -11.239792,-6.6726 20.16705,20.16705 0 0 1 3.157736,-2.37437 z m 32.504172,0 a 20.167145,20.167145 0 0 1 3.157736,2.37437 27.674765,27.674765 0 0 1 -11.239792,6.6726 c 2.318894,-1.43926 4.449833,-3.50003 6.289324,-6.12514 a 28.898477,28.898477 0 0 0 1.792732,-2.92183 z" style="${ssrRenderStyle({ "fill": "#3423a6", "stroke-width": "0.09563237" })}"></path><path id="Path_22" data-name="Path 22" d="M 49.201394,742.60196 H 25.478063 c -0.839652,-4.58079 -5.060291,-7.98243 -9.948062,-7.46889 -4.316271,0.4532 -7.7131327,3.94752 -8.1111545,8.26924 -0.5028351,5.46061 3.7673415,10.0675 9.0850755,10.0675 4.464788,0 8.190529,-3.2472 8.973759,-7.52043 h 15.725978 v 3.44276 h 3.347133 v -3.44305 h 2.964603 v 5.06852 h 3.347134 v -8.41565 z m -32.726257,7.49863 a 5.803546,5.803546 0 1 1 5.803546,-5.80345 5.810049,5.810049 0 0 1 -5.803546,5.80345 z" inkscape:connector-curvature="0" style="${ssrRenderStyle({ "fill": "#f18805", "stroke-width": "0.09563237" })}"></path><path id="Path_24" data-name="Path 24" d="m 65.329219,742.52937 a 2.6574323,2.6574323 0 1 0 -3.957555,2.31737 l -1.357213,6.93592 h 5.314768 l -1.357215,-6.93592 a 2.6558066,2.6558066 0 0 0 1.357215,-2.31737 z" inkscape:connector-curvature="0" style="${ssrRenderStyle({ "fill": "#f18805", "stroke-width": "0.09563237" })}"></path></g></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ApplicationMark.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const JetApplicationMark = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(true);
    const style = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
    });
    const message = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.banner) || "";
    });
    watch(message, async () => {
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({ "bg-indigo-500": style.value == "success", "bg-red-700": style.value == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": style.value == "success", "bg-red-600": style.value == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="h-5 w-5 text-white dark:text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="h-5 w-5 text-white dark:text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 font-medium text-sm text-white dark:text-slate-900 truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": style.value == "success", "hover:bg-red-600 focus:bg-red-600": style.value == "danger" }, "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white dark:text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Banner.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: Array,
      default: () => ["py-1", "bg-white", "dark:bg-slate-900"]
    }
  },
  setup(__props) {
    const props = __props;
    let open = ref(false);
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        "48": "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      }
      if (props.align === "right") {
        return "origin-top-right right-0";
      }
      return "origin-top";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        unref(open) ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg dark:shadow-gray-700 dark:border-gray-200"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Dropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    as: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 text-left hover:bg-gray-100 hover:dark:bg-gray-900 focus:outline-none focus:bg-gray-100 transition">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else if (__props.as == "a") {
        _push(`<a${ssrRenderAttr("href", __props.href)} class="block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:dark:bg-gray-900 focus:outline-none focus:bg-gray-100 transition">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: "block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:dark:bg-gray-900 focus:outline-none focus:bg-gray-100 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DropdownLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 focus:dark:border-indigo-300 transition" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:dark:text-gray-300 hover:border-gray-300 hover:dark:border-gray-700 focus:outline-none focus:text-gray-700 focus:dark:text-gray-300 focus:border-gray-300 focus:dark:border-gray-700 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/NavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    href: String,
    as: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "block pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900 focus:outline-none focus:text-indigo-800 focus:dark:text-indigo-200 focus:bg-indigo-100 focus:dark:bg-indigo-900 focus:border-indigo-700 focus:dark:border-indigo-300 transition" : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-slate-200 hover:bg-gray-50 hover:dark:bg-gray-900 hover:border-gray-300 hover:dark:border-gray-700 focus:outline-none focus:text-gray-800 focus:dark:text-gray-200 focus:bg-gray-50 focus:dark:bg-gray-900 focus:border-gray-300 focus:dark:border-gray-700 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button class="${ssrRenderClass([classes.value, "w-full text-left"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: classes.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ResponsiveNavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100 dark:bg-gray-800"><nav class="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(JetApplicationMark, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(JetApplicationMark, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 focus:dark:border-gray-700 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></button>`);
            } else {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-slate-500 bg-white dark:bg-slate-900 hover:text-gray-700 focus:outline-none transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
            }
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
                key: 0,
                class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 focus:dark:border-gray-700 transition"
              }, [
                createVNode("img", {
                  class: "h-8 w-8 rounded-full object-cover",
                  src: _ctx.$page.props.auth.user.profile_photo_url,
                  alt: _ctx.$page.props.auth.user.name
                }, null, 8, ["src", "alt"])
              ])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "inline-flex rounded-md"
              }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-slate-500 bg-white dark:bg-slate-900 hover:text-gray-700 focus:outline-none transition"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ]))
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-600"${_scopeId}> Manage Account </div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-t border-gray-100 dark:border-gray-800"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-600" }, " Manage Account "),
              createVNode(_sfc_main$3, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode("div", { class: "border-t border-gray-100 dark:border-gray-800" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$3, { as: "button" }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-slate-500 hover:bg-gray-100 hover:dark:bg-slate-900 focus:outline-none focus:bg-gray-100 focus:dark:bg-slate-900 focus:text-gray-500 focus:dark:text-slate-500 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200 dark:border-slate-800"><div class="flex items-center px-4">`);
      if (_ctx.$page.props.jetstream.managesProfilePhotos) {
        _push(`<div class="shrink-0 mr-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="font-medium text-base text-gray-800 dark:text-slate-200">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500 dark:text-slate-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("profile.show"),
        active: _ctx.route().current("profile.show")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form method="POST">`);
      _push(ssrRenderComponent(_sfc_main$1, { as: "button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div><div class="absolute top-20 right-10 hidden sm:block">`);
      _push(ssrRenderComponent(Sponsor, null, null, _parent));
      _push(`</div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white dark:bg-slate-900 shadow hidden sm:block"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
