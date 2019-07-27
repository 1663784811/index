import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";

const baseurl = "http://localhost:8080";

/**
 * 获取所有表格
 */
export const API_findAllTRole = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTRole", parameter);


/**
 * 获取表格数据
 */
export const API_findPageTRole = (parameter) => AJAXGET(baseurl + "/admin/findPageTRole", parameter);

/**
 *  查找
 */
export const API_findIdTRole = (parameter) => AJAXGET(baseurl + "/admin/findIdTRole", parameter);


/**
 * 添加
 */
export const API_addTRole = (parameter) => AJAXPOST(baseurl + "/admin/addTRole", parameter);


/**
 *更新
 */
export const API_updateTRole = (parameter) => AJAXPOST(baseurl + "/admin/updateTRole", parameter);


/**
 * 删除
 */
export const API_delTRole = (parameter) => AJAXPOST(baseurl + "/admin/delTRole", parameter);

