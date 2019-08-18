import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllTBanner = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTBanner", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageTBanner = (parameter) => AJAXGET(baseurl + "/admin/findPageTBanner", parameter);

/**
 *  根据ID查找
 */
export const API_findIdTBanner = (parameter) => AJAXGET(baseurl + "/admin/findIdTBanner", parameter);

/**
 * 添加 或 更新
 */
export const API_saveTBanner = (parameter) => AJAXPOST(baseurl + "/admin/saveTBanner", parameter);

/**
 * 删除
 */
export const API_delTBanner = (parameter) => AJAXPOST(baseurl + "/admin/delTBanner", parameter);


