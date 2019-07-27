import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";

const baseurl = "http://localhost:8080";
/**
 * 登录
 */
export const loginAdmin = (parameter) => AJAXPOST(baseurl + "/admin/login", parameter);
/**
 * 退出登录
 */
export const logoutAdmin = () => AJAXGET(baseurl + "/admin/logout");
/**
 * 注册
 */
export const registerAdmin = (parameter) => AJAXPOST(baseurl + "/admin/register", parameter);
/**
 * 获取后台菜单树
 */
export const getAdminTree = () => AJAXGET("/tree.json");
/**
 * 修改密码
 */
export const updatePassword = (passwordJson) => AJAXPOST(baseurl + "/admin/updatePassword", passwordJson);
/**
 * 修改个人信息
 */
export const updateuserinfo = (passwordJson) => AJAXPOST(baseurl + "/admin/updateuserinfo", passwordJson);
/**
 * 统计
 */
export const findAllTStatistics = (parameter = {sort: "createtime_asc"}) => AJAXGET(baseurl + "/admin/findAllTStatistics", parameter);

/**
 * 访问
 */
export const visit = () => AJAXGET(baseurl + "/visit");





