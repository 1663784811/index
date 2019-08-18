import {AJAXGET, AJAXPOST, AJAXPOSTFILE} from "@/assets/common/js/global";
import {_upload as baseurl} from "../config";


/**
 * 获取所有表格 ==>所有
 */
export const API_findAllRPhoto = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllRPhoto", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageRPhoto = (parameter) => AJAXGET(baseurl + "/admin/findPageRPhoto", parameter);

/**
 *  根据ID查找
 */
export const API_findIdRPhoto = (parameter) => AJAXGET(baseurl + "/admin/findIdRPhoto", parameter);

/**
 * 添加 或 更新
 */
export const API_saveRPhoto = (parameter) => AJAXPOST(baseurl + "/admin/saveRPhoto", parameter);

/**
 * 删除
 */
export const API_delRPhoto = (parameter) => AJAXPOST(baseurl + "/admin/delRPhoto", parameter);


/**
 * 上传文件
 */
export const API_uploadFile = (parameter) => AJAXPOSTFILE(baseurl + "/upload/photo", parameter);

