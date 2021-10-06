import Home from '@/views/Home.vue';
import Detail from  '@/views/Detail.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/dog/:dogId',
        name: 'dog',
        component: Detail
    }
];

export default routes;