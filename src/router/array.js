const index = () => import('@/pages/home/Home');
const cases = () => import('@/pages/home/Case');
const about = () => import('@/pages/home/About');
const Going = () => import('@/pages/home/Going');
const PublicNumber = () => import('@/pages/home/PublicNumber');

//=========================================
const admin = () => import('@/pages/admin/index/Admin');  // 首页
const adminLogin = () => import('@/pages/admin/index/Login');
const Register = () => import('@/pages/admin/index/Register');
const AdminIndex = () => import('@/pages/admin/system/AdminIndex');  //启动页面
const Statistics = () => import('@/pages/admin/system/Statistics');  //统计
const UserBaseInfo = () => import('@/pages/admin/user/UserBaseInfo');
const UpdatePassWord = () => import('@/pages/admin/user/UpdatePassWord');
//====================================================表
const TAdmin = () => import('@/pages/admin/components/TAdmin');
const TDepartment = () => import('@/pages/admin/components/TDepartment');
const TRole = () => import('@/pages/admin/components/TRole');
const TPower = () => import('@/pages/admin/components/TPower');





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
