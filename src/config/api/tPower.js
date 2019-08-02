import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config.js";


/**
 * 获取所有表格
 */
export const API_findAllTPower = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTPower", parameter);


/**
 * 获取表格数据
 */
export const API_findPageTPower = (parameter) => AJAXGET(baseurl + "/admin/findPageTPower", parameter);

/**
 *  查找
 */
export const API_findIdTPower = (parameter) => AJAXGET(baseurl + "/admin/findIdTPower", parameter);


/**
 * 添加
 */
export const API_addTPower = (parameter) => AJAXPOST(baseurl + "/admin/addTPower", parameter);


/**
 *更新
 */
export const API_updateTPower = (parameter) => AJAXPOST(baseurl + "/admin/updateTPower", parameter);


/**
 * 删除
 */
export const API_delTPower = (parameter) => AJAXPOST(baseurl + "/admin/delTPower", parameter);


/**
 *  根据角色ID查询权限
 */
export const API_findTPowerByRoleid = (parameter) => AJAXPOST(baseurl + "/admin/findTPowerByRoleid", parameter);

/**
 *  根据 用户ID 和 角色ID查询权限
 */
export const API_findTPowerByAdminidAndRoleid = (parameter) => AJAXPOST(baseurl + "/admin/findTPowerByAdminidAndRoleid", parameter);

