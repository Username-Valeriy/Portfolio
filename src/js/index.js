import Vue from 'vue';

import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import vueSmoothScroll from 'vue2-smooth-scroll';

import App from './components/app.vue';
import Home from './components/pages/home.vue';
import Header from "./components/view/Header.vue";
import HomeSectionOne from "./components/home_component/HomeSectionOne.vue";
import HomeSectionTwo from "./components/home_component/HomeSectionTwo.vue";
import Footer from "./components/view/Footer.vue";



import Swiper from 'vue-awesome-swiper'
import overlayscrollbars  from 'overlayscrollbars'





/**
 * регистрация компонентов
 */
Vue.component('App', App);
Vue.component('Header', Header);
Vue.component('Home', Home);
Vue.component('HomeSectionOne', HomeSectionOne);
Vue.component('HomeSectionTwo', HomeSectionTwo);
Vue.component('Footer', Footer);
/**
 * использование компонетов
 */
Vue.use(VueRouter);
Vue.use(Swiper);
Vue.use(overlayscrollbars);
Vue.use(ElementUI);
Vue.use(vueSmoothScroll)

/**
 * вызов компонентов
 */

new Vue({
    el: 'app',
    components: {
        App,
    }
});

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        // {path: "*", component: PageNotFound}
    ],
    data:{

    },
    method:{

    },
    mounted() {

    },
});

window.onload = function () {

    OverlayScrollbars(document.body, {
        scrollbars : {
            autoHide:'m',
        },
        overflowBehavior : {
            x : "hidden"
        }
    });
};