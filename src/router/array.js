const index = () => import('@/pages/home/Home');
const cases = () => import('@/pages/home/Case');
const about = () => import('@/pages/home/About');
const Going = () => import('@/pages/home/Going');
const PublicNumber = () => import('@/pages/home/PublicNumber');
const Letter = () => import('@/pages/home/Letter');  //信
const Code = () => import('@/pages/home/Code');  //信
const H5 = () => import('@/pages/home/H5');  //h5
const Map = () => import('@/pages/home/Map');  // 地图
const HomeStatistics = () => import('@/pages/home/Statistics');  // 统计
const Study = () => import('@/pages/home/Study');  // 统计
//=========================================
const admin = () => import('@/pages/admin/index/Admin');  // 首页
const adminLogin = () => import('@/pages/admin/index/Login');  // 登录
const Register = () => import('@/pages/admin/index/Register');  // 注册
const AdminIndex = () => import('@/pages/admin/system/AdminIndex');  //启动页面
const Statistics = () => import('@/pages/admin/system/Statistics');  //统计
const UserBaseInfo = () => import('@/pages/admin/user/UserBaseInfo');//个人信息
const UpdatePassWord = () => import('@/pages/admin/user/UpdatePassWord');// 修改个人信息

const Photo = () => import('@/pages/admin/system/Photo');//


// //====================================================表
const TAdmin = () => import('@/pages/admin/components/TAdmin');
const TDepartment = () => import('@/pages/admin/components/TDepartment');
const TRole = () => import('@/pages/admin/components/TRole');
const TPower = () => import('@/pages/admin/components/TPower');
const TBanner = () => import('@/pages/admin/components/TBanner');
const TQtype = () => import('@/pages/admin/components/TQtype');
const Knowledge = () => import('@/pages/admin/components/TKnowledge');
const TQuestion = () => import('@/pages/admin/components/TQuestion');
const TKnowledgeUpdate = () => import('@/pages/admin/components/TKnowledgeUpdate');


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
        path: "/letter",
        component: Letter,
        meta: {}
    },
    {
        path: "/map",
        component: Map,
    },
    {
        path: "/h5",
        component: H5,
    },
    {
        path: "/code",
        component: Code,
    },
    {
        path: "/study",
        component: Study,
    },
    {
        path: "/statistics",
        component: HomeStatistics,
    },
    {
        path: "/publicNumber",
        component: PublicNumber
    },
    {
        path: '/admin',
        component: admin
    },
    {
        path: '/admin/login',
        component: adminLogin
    },
    {
        path: '/admin/register',
        component: Register
    },
    {
        path: '/admin/index',
        component: AdminIndex
    },
    {
        path: '/admin/Statistics',
        component: Statistics
    },
    {
        path: '/admin/UserBaseInfo',
        component: UserBaseInfo
    },
    {
        path: '/admin/UpdatePassWord',
        component: UpdatePassWord
    },
    {
        path: '/admin/TAdmin',
        component: TAdmin
    },
    {
        path: '/admin/TDepartment',
        component: TDepartment
    },
    {
        path: '/admin/TRole',
        component: TRole
    },
    {
        path: '/admin/TPower',
        component: TPower
    },
    {
        path: '/admin/TBanner',
        component: TBanner
    },
    {
        path: '/upload/Photo',
        component: Photo
    },
    {
        path: '/admin/TQtype',
        component: TQtype
    },
    {
        path: '/admin/tKnowledge',
        component: Knowledge
    },
    {
        path: '/admin/TKnowledgeUpdate',
        component: TKnowledgeUpdate,
        props: true
    },
    {
        path: '/admin/tQuestion',
        component: TQuestion
    }
];
export default array;
