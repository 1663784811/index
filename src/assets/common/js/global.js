import axios from "axios";
import qs from 'qs';



/**
 * 设置Cookie
 * @param key
 * @param value
 * @param options
 */
export const SETCOOKIE = function (key, value, options = {}) {
    document.cookie = [
        ENCODEVALUE(key), '=', ENCODEVALUE(value),
        options.expires ? '; expires=' + new Date(options.expires * 1000).toUTCString() : '',
        options.path ? '; path=' + options.path : '; path= /',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
    ].join('')
};
/**
 * 获取Cookie
 */
export const GETCOOKIE = function (key) {
    let cookies = document.cookie ? document.cookie.split('; ') : [];
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split('=');
        let key1 = DECODEVALUE(parts.shift());
        if (key === key1) {
            return DECODEVALUE(parts);
        }
    }
};

/**
 * 编码
 * @param s
 * @returns {string}
 */
export const ENCODEVALUE = function (s) {
    if (typeof s === "object") {
        return encodeURIComponent(JSON.stringify(s));
    } else {
        return encodeURIComponent(s);
    }
};
/**
 * 解码
 * @param s
 */
export const DECODEVALUE = function (s) {
    return decodeURIComponent(s);
};





/**
 * Get 请求
 * @param _url URI
 * @param _params 请求参数
 * @param serializer 序列化
 * @returns {Promise<any>}
 */
export const AJAXGET = function (_url, _params = {}, serializer = 0) {
    return AJAXREQUEST(_url, _params, serializer, 'get');
};

/**
 * POST 请求
 * @param _url
 * @param _params
 * @returns {Promise<any>}
 */
export const AJAXPOST = function (_url, _params = {}, serializer = 0) {
    return AJAXREQUEST(_url, _params, serializer, 'post');
};

export const AJAXPOSTFILE = function (_url, _params = {}) {
    let header = GETHEADER();
    header['Content-Type'] = 'multipart/form-data';
    return AJAXREQUEST(_url, _params, 1, 'post', header);
};

/**
 * 请求
 * @param url
 * @param _params
 * @param serializer
 * @param requestType
 * @returns {Promise<any>}
 */
export const AJAXREQUEST = function (url, _params = {}, serializer = 0, requestType, header) {
    return new Promise((resolve, reject) => {
        let axiosLet = null;
        if (serializer == 0) {
            axiosLet = axios({
                url: url,
                method: requestType,
                params: _params,
                headers: header || GETHEADER(),
                paramsSerializer: params => {
                    return qs.stringify(params, {indices: false})
                }
            });
        } else {
            axiosLet = axios({
                url: url,
                method: requestType,
                data: _params,
                headers: GETHEADER(),
            });
        }
        axiosLet.then(res => {
            if (!res.data.code || (res.data.code != 500)) {
                resolve(res.data);
            } else {
                reject(res.data.message);
            }
        }).catch(error => {
            reject(error);
        });
    });
};

/**
 * 获取请求头
 * @returns {{Accept: string, "Content-Type": string, token: *}}
 */
export const GETHEADER = function () {
    let token = "";
    if (/\/shop/.test(window.location.href)) {
        token = GETCOOKIE('shop_token');
    } else {
        token = GETCOOKIE('token');
    }
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'token': token
    }
};

/**
 * 时间戳转时间
 * @param longTime
 * @returns {string}
 */
export const FORMATDATE = function (longTime) {
    const time = new Date(longTime);
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const mm = time.getMinutes();
    const s = time.getSeconds();
    return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (s < 10 ? '0' + s : s);
};

/**
 * 生成树结构
 * @param dataArr 树数据：数组
 */
export const CREATETREESTRUCTURE = function (dataArr) {
    let jsonArr = [];
    if (dataArr && dataArr.length > 0) {
        for (let i = 0; i < dataArr.length; i++) {
            //查找根节点
            if (!FINDTREEROO(dataArr, dataArr[i].pid, dataArr[i].id)) {
                //找到根节点
                jsonArr.push(CREATEJSONTREE(dataArr[i], dataArr))
            }
        }

    }

    return jsonArr;
};


/**
 * 树，组装数据
 * @param jsonDate
 * @param data
 * @returns {*}
 */
export const CREATEJSONTREE = function (jsonDate, dataArr) {
    let childrens = [];
    for (let i = 0; i < dataArr.length; i++) {
        if (jsonDate.id !== "" && jsonDate.id !== dataArr[i].id && jsonDate.id === dataArr[i].pid) {
            let childrenjson = CREATEJSONTREE(dataArr[i], dataArr);
            childrens.push(childrenjson);
        }
    }
    if (childrens.length > 0) {
        jsonDate.children = childrens;
        jsonDate.checked = undefined;
    }
    return jsonDate;
};
/**
 * 查找树的根节点
 * @param idstr
 * @param dataArr
 */
export const FINDTREEROO = function (dataArr, pid, id) {
    for (let i = 0; i < dataArr.length; i++) {
        if (pid !== "" && dataArr[i].id === pid && id !== dataArr[i].id) {
            return true;
        }
    }
    return false;
};
/**
 * 树结构转数组结构
 * @param treeData
 * @param index
 * @param indexName
 */
export const TREE2ARRAY = function (treeData = [], index = 0, indexName = "index") {
    let arr = [];
    //查找第一个节点
    for (let i = 0; i < treeData.length; i++) {
        treeData[i].data[indexName] = index;
        arr.push(treeData[i].data);
        //查找子节点
        if (treeData[i].children && treeData[i].children.length > 0) {
            arr = arr.concat(TREE2ARRAY(treeData[i].children, index + 1));
        }
    }
    return arr;
};


/**
 * 获取网址
 */
export const GETNOWBASEURL = function () {
    let l = window.location;
    return l.protocol + "//" + l.hostname + (l.port === 80 ? "" : ":" + l.port);
};

/**
 * 获取个人信息
 */
export const GETUSERINFO = function () {
    let userInfo = window.localStorage.getItem("userInfo");
    if (userInfo) {
        return JSON.parse(userInfo);
    }
};


/**
 *通用对象克隆
 * @param obj
 * @returns {*[]}
 */
export const CLONEOBJ = function (obj) {
    let temp = null;
    if (obj instanceof Array) {
        temp = obj.concat();
    } else if (obj instanceof Function) {
        temp = obj;
    } else {
        temp = {};
        for (let item in obj) {
            let val = obj[item];
            temp[item] = typeof val == 'object' ? clone(val) : val;
        }
    }
    return temp;
};


/**
 * 解释json 字段
 * @param json
 */
export const EXPLAINFIELD = function (responseData) {
    let json = {};
    json.title = responseData.title;
    json.addFieldData = responseData.fieldList;
    json.updateTitle = responseData.title;
    json.updateFieldData = responseData.fieldList;
    json.TableHeader = [];
    json.searchWhere = [];
    for (let i = 0; i < json.addFieldData.length; i++) {
        if (json.addFieldData[i].isWhere) {
            let jsonField = {};
            jsonField.keyStr = json.addFieldData[i].javaWhere + '_' + json.addFieldData[i].javaType + '_' + json.addFieldData[i].key;
            jsonField.name = json.addFieldData[i].title;
            json.searchWhere.push(jsonField)
        }
        if (json.addFieldData[i].isShowColumn) {
            json.TableHeader.push(json.addFieldData[i])
        }
    }
    return json;
};


/**
 * 判断某个值是否等于数组的某项
 * @return {number}
 */
export const IS_ARRAYHAVE = function (arr, value, key) {
    if (key) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][key] === value) {
                return i;
            }
        }
        return -1;
    } else {
        return arr.indexOf(value);
    }
};



