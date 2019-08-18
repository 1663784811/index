import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllTQtype = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTQtype", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageTQtype = (parameter) => AJAXGET(baseurl + "/admin/findPageTQtype", parameter);

/**
 *  根据ID查找
 */
export const API_findIdTQtype = (parameter) => AJAXGET(baseurl + "/admin/findIdTQtype", parameter);

/**
 * 添加 或 更新
 */
export const API_saveTQtype = (parameter) => AJAXPOST(baseurl + "/admin/saveTQtype", parameter);

/**
 * 删除
 */
export const API_delTQtype = (parameter) => AJAXPOST(baseurl + "/admin/delTQtype", parameter);


