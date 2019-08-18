import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json = {
    "title": "类型",
    "fieldList": [
        {
            "width": "60",
            "key": "id",
            "title": "",
            "type": "selection",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "integer"
        }
        , {
            "key": "tid",
            "title": "",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "type",
            "title": "类型",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "类型",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "img",
            "title": "图片",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "图片",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "createtime",
            "title": "创建时间",
            "type": "html",
            "length": "19",
            "isRequire": false,
            "regStr": "",
            "message": "",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "yyyy-MM-dd HH:mm:ss",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "date"
        }

    ]
};

//==== 解释json数据
const obj = EXPLAINFIELD(json);
//=====  标题
export const TitleJson = obj.title;
//===== 添加字段
export const addFieldDataJson = obj.addFieldData;
//===== 修改字段
export const updateFieldDataJson = obj.updateFieldData;
//=====  表头
export const TableHeaderJson = obj.TableHeader;
//=====  搜索字段
export const searchWhereJson = obj.searchWhere;




