import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config.js";

/**
 * 获取所有表格TAdminPower
 */
export const API_findAllTAdminPower = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTAdminPower", parameter);


/**
 * 获取表格数据
 */
export const API_findPageTAdminPower = (parameter) => AJAXGET(baseurl + "/admin/findPageTAdminPower", parameter);

/**
 *  查找
 */
export const API_findIdTAdminPower = (parameter) => AJAXGET(baseurl + "/admin/findIdTAdminPower", parameter);


/**
 * 添加
 */
export const API_addTAdminPower = (parameter) => AJAXPOST(baseurl + "/admin/addTAdminPower", parameter);


/**
 *更新
 */
export const API_updateTAdminPower = (parameter) => AJAXPOST(baseurl + "/admin/updateTAdminPower", parameter);


/**
 * 删除
 */
export const API_delTAdminPower = (parameter) => AJAXPOST(baseurl + "/admin/delTAdminPower", parameter);


/**
 * 根据管理员ID查找
 */
export const API_updateTAdminPowerByAdminidAndRoleid = (parameter) => AJAXPOST(baseurl + "/admin/updateTAdminPowerByAdminidAndRoleid", parameter);

