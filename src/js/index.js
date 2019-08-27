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

/**
 * регистрация компонентов
 */

import Swiper from 'vue-awesome-swiper'
import overlayscrollbars from 'overlayscrollbars'


/**
 * languages
 */
import ru from './I18n/ru'
import en from './I18n/en'


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
const store = new Vuex.Store({
    state: {
        language: 'ru',
        translations: {
            ru:ru,
            en:en
        }
    },
    mutations: {
        changeCurrentLang(state,key){
            state.language = key
        },
    },
    getters: {
        doneTranslations: state => {
            return state.translations[ state.language]
        }
    }
});
new Vue({
    el: '#app',
    router,
    store,
    data() {
        return {
            body_scroll: null,
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

    },
    mounted() {
        this.initScrollBar()
    },

});

