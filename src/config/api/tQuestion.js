import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllTQuestion = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTQuestion", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageTQuestion = (parameter) => AJAXGET(baseurl + "/admin/findPageTQuestion", parameter);

/**
 *  根据ID查找
 */
export const API_findIdTQuestion = (parameter) => AJAXGET(baseurl + "/admin/findIdTQuestion", parameter);

/**
 * 添加 或 更新
 */
export const API_saveTQuestion = (parameter) => AJAXPOST(baseurl + "/admin/saveTQuestion", parameter);

/**
 * 删除
 */
export const API_delTQuestion = (parameter) => AJAXPOST(baseurl + "/admin/delTQuestion", parameter);


