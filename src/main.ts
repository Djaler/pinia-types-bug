import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCompositionAPI from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia';

Vue.use(VueRouter);
Vue.use(VueCompositionAPI);
Vue.use(PiniaVuePlugin);

const router = new VueRouter({});

const pinia = createPinia();

new Vue({
    router,
    pinia
});
