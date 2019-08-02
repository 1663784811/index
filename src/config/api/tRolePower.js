import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config.js";

/**
 * 获取所有表格
 */
export const API_findAllTRolePower = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTRolePower", parameter);


/**
 * 获取表格数据
 */
export const API_findPageTRolePower = (parameter) => AJAXGET(baseurl + "/admin/findPageTRolePower", parameter);

/**
 *  查找
 */
export const API_findIdTRolePower = (parameter) => AJAXGET(baseurl + "/admin/findIdTRolePower", parameter);


/**
 * 添加
 */
export const API_addTRolePower = (parameter) => AJAXPOST(baseurl + "/admin/addTRolePower", parameter);


/**
 *更新
 */
export const API_updateTRolePower = (parameter) => AJAXPOST(baseurl + "/admin/updateTRolePower", parameter);


/**
 * 删除
 */
export const API_delTRolePower = (parameter) => AJAXPOST(baseurl + "/admin/delTRolePower", parameter);


/**
 *  批量添加
 */
export const API_addTRolePowerArray = (parameter) => AJAXPOST(baseurl + "/admin/addTRolePowerArray", parameter);


/**
 *  批量删除更新
 */
export const API_updateTRolePowerArray = (parameter) => AJAXPOST(baseurl + "/admin/updateTRolePowerArray", parameter);


