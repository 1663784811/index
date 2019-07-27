import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json = {
    "title": "角色",
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
            "title": "角色名称",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "角色",
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
            "key": "departmentid",
            "title": "组",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "组",
            "controlType": "urlradio",
            "url": "http://localhost:8080/admin/findAllTDepartment",
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
            "key": "code",
            "title": "授权码",
            "type": "html",
            "length": "45",
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
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "date"
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
        },
        {
            "key": "del",
            "title": "是否删除",
            "type": "html",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "integer"
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


