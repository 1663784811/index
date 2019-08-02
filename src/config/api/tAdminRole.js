import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config.js";

/**
 * 获取所有表格TAdminRole
 */
export const API_findAllTAdminRole = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTAdminRole", parameter);


/**
 * 获取表格数据
 */
export const API_findPageTAdminRole = (parameter) => AJAXGET(baseurl + "/admin/findPageTAdminRole", parameter);

/**
 *  查找
 */
export const API_findIdTAdminRole = (parameter) => AJAXGET(baseurl + "/admin/findIdTAdminRole", parameter);


/**
 * 添加
 */
export const API_addTAdminRole = (parameter) => AJAXPOST(baseurl + "/admin/addTAdminRole", parameter);


/**
 *更新
 */
export const API_updateTAdminRole = (parameter) => AJAXPOST(baseurl + "/admin/updateTAdminRole", parameter);


/**
 * 删除
 */
export const API_delTAdminRole = (parameter) => AJAXPOST(baseurl + "/admin/delTAdminRole", parameter);


/**
 * 根据管理员ID查找
 */
export const API_findRoleByAdminid = (parameter) => AJAXPOST(baseurl + "/admin/findRoleByAdminid", parameter);

/**
 * 根据管理员ID查找
 */
export const API_updataTAdminRoleByAdminid = (parameter) => AJAXPOST(baseurl + "/admin/updataTAdminRoleByAdminid", parameter);

