import DefaultLayout from '~/layouts/Default.vue'
import "./assets/css/app.css";

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);

  head.bodyAttrs = { class: 'bg-gray-900 text-gray-100 antialiased' };
  head.meta.push({
    name: "robots",
    content: "noindex"
  });
}
