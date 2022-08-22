import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history', //url 해쉬값을 제거해주는것
    routes: [
        {
            path: '/',
            redirect : '/news',
        },
        {
            // path : url 주소
            path: '/news',
            // component : url 주소로 갔을때 표시될 컴포넌트 
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
    ]
});