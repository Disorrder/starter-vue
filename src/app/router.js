import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {name: 'main', path: '/', component: require('app/pages/main').default},
    ]
});
