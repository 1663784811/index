import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json = {
    "title": "banner图",
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
            "key": "loation",
            "title": "位置",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "位置",
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
            "key": "photo",
            "title": "图片",
            "slot": "img",
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
            "key": "url",
            "title": "URL",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "",
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
            "key": "status",
            "title": "状态",
            "slot": "status",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "",
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
            "key": "note",
            "title": "备注",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "备注",
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




