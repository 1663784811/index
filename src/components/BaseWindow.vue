<template>
    <Modal
            v-model="isShowWindow"
            :title="title"
            :draggable="draggable"
            :mask="mask"
            :mask-closable="closable"
            :z-index="zIndex"
    >
        <!--==========         基本表单弹窗        ==========-->
        <div v-for="(fieldDataObj , index) in fieldData" :key="index">

            <!--==== 输入框  =====-->
            <div v-if="fieldDataObj.controlType ==='input'" class="formRow">
                <span class="fieldName textOne">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <Input :placeholder="fieldDataObj.title" type="text" v-model="fromData[fieldDataObj.key]"/>
            </div>
            <!--==== 密码  =====-->
            <div v-else-if="fieldDataObj.controlType ==='password'" class="formRow">
                <span class="fieldName textOne">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <Input :placeholder="fieldDataObj.title" type="password" v-model="fromData[fieldDataObj.key]"/>
            </div>

            <!--====  单选框  =====-->
            <div v-else-if="fieldDataObj.controlType ==='radio'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <RadioGroup v-model="fromData[fieldDataObj.key]">
                    <Radio v-for="(selectObj , selectObjKey ) in fieldDataObj.selectArr"
                           :key="selectObjKey"
                           :label="selectObj.key">{{selectObj.title}}
                    </Radio>
                </RadioGroup>
            </div>
            <!--====  单选框  =====-->
            <div v-else-if="fieldDataObj.controlType ==='urlradio'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <UrlRadio :url="fieldDataObj.url"
                          :dataKey="fieldDataObj.dataKey"
                          :dataName="fieldDataObj.dataName"
                          v-model="fromData[fieldDataObj.key]"></UrlRadio>
            </div>
            <!--====  开关  =====-->
            <div v-else-if="fieldDataObj.controlType ==='radioSwitch'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <i-switch :value="fromData[fieldDataObj.key]"></i-switch>
            </div>

            <!--====  多选框  =====-->
            <div v-else-if="fieldDataObj.controlType ==='checkbox'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <CheckboxGroup v-model="fromData[fieldDataObj.key]">
                    <Checkbox v-for="(selectObj , selectObjKey) in fieldDataObj.selectArr"
                              :label="selectObj.key"
                              :key="selectObjKey">
                        {{selectObj.title}}
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <!--====  多选框  =====-->
            <div v-else-if="fieldDataObj.controlType ==='urlcheckbox'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <UrlCheckbox :url="fieldDataObj.url"
                             :dataKey="fieldDataObj.dataKey"
                             :dataName="fieldDataObj.dataName"
                             v-model="fromData[fieldDataObj.key]"></UrlCheckbox>
            </div>

            <!--====  下拉框  =====-->
            <div v-else-if="fieldDataObj.controlType ==='select'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <Select v-model="fromData[fieldDataObj.key]">
                    <Option v-for="(selectObj ,selectObjKey) in fieldDataObj.selectArr"
                            :value="selectObj.key"
                            :key="selectObjKey"
                    >{{selectObj.title}}
                    </Option>
                </Select>
            </div>
            <div v-else-if="fieldDataObj.controlType ==='urlselect'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <UrlSelect :url="fieldDataObj.url"
                           :dataKey="fieldDataObj.dataKey"
                           :dataName="fieldDataObj.dataName"
                           v-model="fromData[fieldDataObj.key]"></UrlSelect>
            </div>

            <!--====  日期  =====-->
            <div v-else-if="fieldDataObj.controlType ==='date'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <DatePicker type="datetime" :format="fieldDataObj.format || 'yyyy-MM-dd'"
                            v-model="fromData[fieldDataObj.key]"
                            :placeholder="fieldDataObj.title"></DatePicker>
            </div>

            <!--====  时间  =====-->
            <div v-else-if="fieldDataObj.controlType ==='time'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <TimePicker type="time" v-model="fromData[fieldDataObj.key]"
                            :placeholder="fieldDataObj.title"></TimePicker>
            </div>

            <!--====  日期时间  =====-->
            <div v-else-if="fieldDataObj.controlType ==='datetime'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <DatePicker type="datetime" :format="fieldDataObj.format || 'yyyy-MM-dd HH:mm:ss'"
                            v-model="fromData[fieldDataObj.key]"
                            :placeholder="fieldDataObj.title"></DatePicker>
            </div>
            <!--==== 整数  =====-->
            <div v-else-if="fieldDataObj.controlType ==='integer'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <InputNumber v-model="fromData[fieldDataObj.key]"></InputNumber>
            </div>
            <!--====  小数  =====-->
            <div v-else-if="fieldDataObj.controlType ==='float'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <InputNumber :step="0.1" v-model="fromData[fieldDataObj.key]"></InputNumber>
            </div>
            <!--====  文本域  =====-->
            <div v-else-if="fieldDataObj.controlType ==='textarea'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <Input :placeholder="fieldDataObj.title" type="textarea" :rows="6"
                       v-model="fromData[fieldDataObj.key]"/>
            </div>
            <!--==== drawer   =====-->
            <div v-else-if="fieldDataObj.controlType ==='drawer'" class="formRow">
                <span class="fieldName">
                    <i v-if="fieldDataObj.isRequired" style="color: #ed4014;margin-right: 4px">*</i>{{fieldDataObj.title}}:
                </span>
                <UrlDrawerTreeSelect
                        :url="fieldDataObj.url"
                        :keyStr="fieldDataObj.key"
                        :dataName="fieldDataObj.dataName"
                        v-model="fromData[fieldDataObj.key]"
                        @confirmValue="confirmValue"
                ></UrlDrawerTreeSelect>
            </div>
            <!--==== 隐藏框  =====-->
            <input v-else type="hidden" v-model="fromData[fieldDataObj.key]"/>
        </div>
        <div slot="footer">
            <Button type="success" size="large" long :loading="isLoading" @click="submitForm">保存</Button>
        </div>
    </Modal>
</template>

<script>
    import UrlSelect from "@/components/form/UrlSelect";
    import UrlCheckbox from "@/components/form/UrlCheckbox";
    import UrlRadio from "@/components/form/UrlRadio";
    import UrlDrawerTreeSelect from "@/components/form/UrlDrawerTreeSelect";

    export default {
        name: "BaseWindow",
        components: {
            UrlSelect,
            UrlCheckbox,
            UrlRadio,
            UrlDrawerTreeSelect
        },
        props: {
            //标题
            title: {
                type: String,
                default() {
                    return " ";
                }
            },
            //字段
            fieldData: {
                type: Array,
                default() {
                    return [];
                }
            },
            //是否显示
            show: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            //字段数据==》值
            valueData: {
                type: Object,
                default() {
                    return {};
                }
            },
            saveLoadding: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        watch: {
            show: function () {
                this.isShowWindow = this.show;
            },
            valueData: function () {
                this.fromData = this.valueData;

            },
            saveLoadding: function () {
                this.isLoading = this.saveLoadding;
            },
            isShowWindow: function () {
                this.$emit("update:show", this.isShowWindow)
            }
        },
        data() {
            return {
                zIndex: 1000,
                isShowWindow: this.show,
                fromData: this.valueData,
                isLoading: this.saveLoadding,
                mask: true,
                draggable: false,
                closable: false
            }
        },

        methods: {
            confirmValue: function (v, key) {
                this.fromData[key] = v;
            },
            //==== 开关弹窗
            operationWindow: function (isOpen = false) {
                this.isShowWindow = isOpen;
            },
            //====== 提交表单
            submitForm: function () {
                //===验证数据
                let fieldData = this.fieldData;
                let fromData = this.fromData;
                //=====  验证数据，数据转换
                for (let i = 0; i < fieldData.length; i++) {
                    // let fieldDataObj = fieldData[i];
                    // let fromDataObj = fromData[fieldDataObj.key];
                    // if (fieldDataObj.isRequired) {
                    //     //TODO    验证数据，数据转换
                    // } else {
                    //     if (fromDataObj != "") {
                    //
                    //     }
                    // }
                }
                //===提交表单
                this.$emit("submitForm", fromData)
            }
        }


    }
</script>

<style scoped lang="stylus">
    .formRow
        position: relative;
        padding: 10px 10px 10px 100px;
        min-height: 42px;

        .fieldName
            position: absolute;
            top: 13px;
            left: 0;
            display: block;
            width: 90px;
            text-align: right;


</style>
