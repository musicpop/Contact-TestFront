
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vueRouter';
import routeConfig from './router/route-config'
import VueResource from 'vue-resource'
//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes:[routeConfig], // short for routes: routes
    linkActiveClass:'active'     //router-link的选中状态的class，也有一个默认的值

});

const app = new Vue({
    router
}).$mount('#app');

