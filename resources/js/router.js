import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import Home from './pages/HomeComponent.vue';
import Dekita from './pages/DekitaListComponent.vue';
import Login from './pages/Login.vue';
import DekitaCreateComponent from "./pages/DekitaCreateComponent";
import DekitaShowComponent from "./pages/DekitaShowComponent";
import DekitaEditComponent from "./pages/DekitaEditComponent";


// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    {
            path: '/dekita',
            name: 'task.list',
            component: Dekita
        },
        {
            path: '/dekita/create',
            name: 'task.create',
            component: DekitaCreateComponent
        },
        {
            path: '/dekita/:taskId',
            name: 'task.show',
            component: DekitaShowComponent,
            props: true
        },
        {
            path: '/dekita/:taskId/edit',
            name: 'task.edit',
            component: DekitaEditComponent,
            props: true
        },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', 
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router