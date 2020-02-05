import DefaultLayout from '~/layouts/Default.vue'
import "./assets/css/app.css";

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
