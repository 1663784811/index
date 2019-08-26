import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json = {
    "title": "知识",
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
            "key": "title",
            "title": "标题",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "标题",
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
            "key": "author",
            "title": "作者",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "作者",
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
            "key": "content",
            "title": "内容",
            "type": "html",
            "length": "65535",
            "isRequire": false,
            "regStr": "",
            "message": "内容",
            "controlType": "textarea",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "like",
            "javaType": "string"
        }

        , {
            "key": "status",
            "title": "状态",
            "type": "html",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "状态",
            "controlType": "integer",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "integer"
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
            "key": "createtime",
            "title": "时间",
            "type": "html",
            "length": "19",
            "isRequire": false,
            "regStr": "",
            "message": "时间",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "yyyy-MM-dd HH:mm:ss",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "date"
        }
        , {
            "key": "source",
            "title": "来源",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "来源",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
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




