import { HomePage, AboutPage, HotelPage, NotFoundPage } from '../../pages';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/hotel/:id',
        component: HotelPage,
    },
    {
        path: '*',
        component: NotFoundPage,
    },
];

export default routes;
