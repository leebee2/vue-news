import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history', //url 해쉬값(#)을 제거해주는것
    routes: [
        {
            //초기 진입시 어느 페이지를 우선으로 보여줄 것인지 설정
            path: '/',
            redirect : '/news',
        },
        {
            // path : url 주소
            path: '/news',
            name : 'news',
            // component : url 주소로 갔을때 표시될 컴포넌트 
            // 화살표 함수를 이용해서 import 하게 되면 최초에 모든 페이지를 import 하는 것이 아닌 해당 페이지만 import 하는 것이기 때문에
            component: () => import('../views/NewsView.vue'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: () => import('../views/AskView.vue'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: () => import('../views/JobsView.vue'),
        },
        {
            path: '/user/:id',
            component: () => import('../views/UserView.vue'),
        },
        {
            path: '/item/:id',
            component: () => import('../views/ItemView.vue'),
        },
    ]
});