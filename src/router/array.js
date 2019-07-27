const index = () => import('@/pages/home/Home');
const cases = () => import('@/pages/home/Case');
const about = () => import('@/pages/home/About');
const Going = () => import('@/pages/home/Going');
const PublicNumber = () => import('@/pages/home/PublicNumber');

const array = [
    {
        path: "",
        component: index
    },
    {
        path: "/index",
        component: index
    },
    {
        path: "/cases",
        component: cases
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/going",
        component: Going
    },
    {
        path: "/publicNumber",
        component: PublicNumber
    }
];
export default array;
