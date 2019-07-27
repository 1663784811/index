import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";

const baseurl = "http://localhost:8080";


/**
 * 获取所有表格
 */
export const API_findAllTDepartment = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTDepartment", parameter);


/**
 * 获取表格数据
 */
export const API_findPageTDepartment = (parameter = {}) => AJAXGET(baseurl + "/admin/findPageTDepartment", parameter);

/**
 *  查找
 */
export const API_findIdTDepartment = (parameter = {}) => AJAXGET(baseurl + "/admin/findIdTDepartment", parameter);


/**
 * 添加
 */
export const API_addTDepartment = (parameter) => AJAXPOST(baseurl + "/admin/addTDepartment", parameter);


/**
 *更新
 */
export const API_updateTDepartment = (parameter) => AJAXPOST(baseurl + "/admin/updateTDepartment", parameter);


/**
 * 删除
 */
export const API_delTDepartment = (parameter) => AJAXPOST(baseurl + "/admin/delTDepartment", parameter);

