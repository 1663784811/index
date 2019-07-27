import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";

const baseurl = "http://localhost:8080";


/**
 * 获取所有表格
 */
export const API_findAllTTAdmin = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTAdmin", parameter);


/**
 * 获取表格数据
 */
export const API_findPageTAdmin = (parameter) => AJAXGET(baseurl + "/admin/findPageTAdmin", parameter);

/**
 *  查找
 */
export const API_findIdTAdmin = (parameter) => AJAXGET(baseurl + "/admin/findIdTAdmin", parameter);


/**
 * 添加
 */
export const API_addTAdmin = (parameter) => AJAXPOST(baseurl + "/admin/addTAdmin", parameter);


/**
 *更新
 */
export const API_updateTAdmin = (parameter) => AJAXPOST(baseurl + "/admin/updateTAdmin", parameter);


/**
 * 删除
 */
export const API_delTAdmin = (parameter) => AJAXPOST(baseurl + "/admin/delTAdmin", parameter);

