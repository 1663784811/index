import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json = {
    "title": "资源",
    "fieldList": [
        {
            "width": "60",
            "key": "id",
            "title": "id",
            "type": "selection",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "id",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "integer"
        },
        {
            "key": "tid",
            "title": "id字符",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "id字符",
            "controlType": "hidden",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "like",
            "javaType": "string"
        },
        {
            "key": "pid",
            "title": "父级",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "父级",
            "controlType": "drawer",
            "url": "http://localhost:8080/admin/findAllTPower",
            "dataKey": "tid",
            "dataName": "name",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "like",
            "javaType": "string"
        },
        {
            "key": "name",
            "title": "资源名称",
            "slot": "name",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "资源名称",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        },
        {
            "key": "url",
            "title": "url",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "url",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        },
        {
            "key": "code",
            "title": "授权码",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "授权码",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        },
        {
            "key": "icon",
            "title": "图标",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "图标",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        },
        {
            "key": "powertype",
            "title": "资源类型",
            "slot": "powertype",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "资源类型",
            "controlType": "radio",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "integer",
            "selectArr": [
                {
                    "key": 1,
                    "title": "菜单"
                },
                {
                    "key": 2,
                    "title": "按钮"
                }
            ]
        },
        {
            "key": "createtime",
            "title": "创建时间",
            "type": "html",
            "length": "26",
            "isRequire": false,
            "regStr": "",
            "message": "创建时间",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "yyyy-MM-dd HH:mm:ss",
            "isShowColumn": true,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "date"
        },
        {
            "key": "status",
            "title": "状态",
            "slot": "status",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "状态",
            "controlType": "radio",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "integer",
            "selectArr": [
                {
                    "key": 1,
                    "title": "正常"
                },
                {
                    "key": 2,
                    "title": "锁定"
                }
            ]
        },
        {
            "key": "note",
            "title": "备注",
            "type": "html",
            "length": "255",
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
            "javaType": "string",
            "selectArr": [
                {
                    "key": 1,
                    "title": "测试"
                },
                {
                    "key": 1,
                    "title": "测试"
                }
            ]
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


