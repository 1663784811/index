import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './array';
import {GETCOOKIE} from "@/assets/common/js/global";
import {_token_admin as adminToken, MODE} from "@/config/config";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: MODE,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

router.beforeEach((to, from, next) => {
    let path = to.path;
    if (
        /^\/admin/.test(path)
        && !/^\/admin\/login/.test(path)
        && !/^\/admin\/register/.test(path)
        && (
            GETCOOKIE(adminToken) === undefined
            || GETCOOKIE(adminToken) === ""
        )
    ) {
        router.push({
            path: "/admin/login"
        });
        return;
    }
    next();
});
export default router;
