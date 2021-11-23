import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueRouter);
Vue.use(VueCompositionAPI);

const router = new VueRouter({});

new Vue({
    router,
});
