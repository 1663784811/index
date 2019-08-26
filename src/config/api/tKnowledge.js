import {AJAXGET, AJAXPOST} from "@/assets/common/js/global";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllTKnowledge = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllTKnowledge", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageTKnowledge = (parameter) => AJAXGET(baseurl + "/admin/findPageTKnowledge", parameter);

/**
 *  根据ID查找
 */
export const API_findIdTKnowledge = (parameter) => AJAXGET(baseurl + "/admin/findIdTKnowledge", parameter);

/**
 * 添加 或 更新
 */
export const API_saveTKnowledge = (parameter) => AJAXPOST(baseurl + "/admin/saveTKnowledge", parameter);

/**
 * 删除
 */
export const API_delTKnowledge = (parameter) => AJAXPOST(baseurl + "/admin/delTKnowledge", parameter);


