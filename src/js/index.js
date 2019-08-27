import Vue from 'vue';

import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import Vuex from 'vuex';



import App from './components/app.vue';
import Home from './components/pages/home.vue';
import Header from "./components/view/Header.vue";
import HomeSectionOne from "./components/home_component/HomeSectionOne.vue";
import HomeSectionTwo from "./components/home_component/HomeSectionTwo.vue";
import Footer from "./components/view/Footer.vue";


import Swiper from 'vue-awesome-swiper'
import overlayscrollbars from 'overlayscrollbars'


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
Vue.use(Vuex);
Vue.use(Swiper);
Vue.use(overlayscrollbars);
Vue.use(ElementUI);

/**
 * вызов компонентов
 */

new Vue({
    el: '#app',
    data() {
        return {
            body_scroll: null,
            languages: {
                'ru': [
                    {
                        'link_follow' : 'Перейти по ссылке'
                    }
                ],
                'fr': [],
                'en': [
                    {
                        'link_follow': 'Link Follow'
                    }
                ]
            },
            currentLanguage:'ru'
        }
    },
    components: {
        App,
    },
    methods: {
        initScrollBar() {
            this.body_scroll = OverlayScrollbars(document.body, {
                scrollbars: {
                    autoHide: 'm',
                },
                overflowBehavior: {
                    x: "hidden"
                }
            });
        },
        scrolltoel(el) {
            let id = el.href.split('#').pop(),
                targetElement = document.getElementById(id);
            this.body_scroll.scroll({el: targetElement, scroll: {x: "never"}, block: "start", margin: 60}, 1000);
        },
        setlang(lang){
            this.currentLanguage = lang
        }
    },
    mounted() {
        this.initScrollBar()
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
    data: {},
    method: {},
    mounted() {

    },
});