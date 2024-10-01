import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import EffectPage from '../page/EffectPage.vue'
import MainPage from '../page/MainPage.vue'
import DrawPage from "../page/DrawPage.vue";
import StoragePage from "../page/StoragePage.vue";
import DrawResultPage from "@/page/DrawResultPage.vue";

// 라우터 설계
const routes = [
    { path: '/', name: '', component:MainPage, props: {hasHeader:true, hasFooter:true}},
    { path: '/storage', name: 'storage', component:StoragePage, props: {hasHeader:true, hasFooter:true}},
    { path: '/draw', name: 'draw', component:DrawPage, props: {hasHeader:true, hasFooter:true}},
    { path: '/effect',name: 'effect', component:EffectPage, props: {hasHeader:false, hasFooter:false}},
    { path: '/result',name: 'result', component:DrawResultPage, props: {hasHeader:false, hasFooter:false}},
]

// 라우터 생성
const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}