<template>
    <div class="createCode">
        <div class="row codeHeader">
            <div class="col f_left clear_f">
                <div class="inputBox">
                    <Input v-model="databaseUrl">
                        <span slot="prepend">数据库地址</span>
                    </Input>
                </div>
            </div>
            <div class="col f_left clear_f">
                <div class="inputBox">
                    <Input v-model="databaseUrl" style="width: 80px">
                        <span slot="prepend">端口</span>
                    </Input>
                </div>
            </div>
            <div class="col f_left clear_f">
                <div class="inputBox">
                    <Input v-model="databaseUrl" style="width: 150px">
                        <span slot="prepend">用户名</span>
                    </Input>
                </div>
            </div>
            <div class="col f_left clear_f">
                <div class="inputBox">
                    <Input v-model="databaseUrl" style="width: 150px">
                        <span slot="prepend">密码</span>
                    </Input>
                </div>
            </div>
            <div class="col f_left clear_f">
                <div class="inputBox">
                    <Input v-model="databaseUrl" style="width: 150px">
                        <span slot="prepend">数据库</span>
                    </Input>
                </div>
            </div>
            <div class="col f_left clear_f">
                <div class="inputBox">
                    <Button type="primary" icon="ios-power">
                        <span>连接</span>
                    </Button>
                </div>
            </div>
        </div>


        <div class="codeContent numOne" v-if="nowNum===0">
            <div class="row codeContentHeader">
                <div class="col num"><span>序号</span></div>
                <div class="col tableName"><span>表名</span></div>
                <div class="col note"><span>注释</span></div>
            </div>
            <div class="row codeContentMain">
                <ul class="clear_f">
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                </ul>

            </div>


        </div>

        <div class="codeContent numTwo" v-if="nowNum==1">
            <div class="row codeContentHeader">
                <div class="col num"><span>序号</span></div>
                <div class="col"><span>字段名</span></div>
                <div class="col"><span>key</span></div>
                <div class="col"><span>数据库类型</span></div>
                <div class="col"><span>java类型</span></div>
                <div class="col"><span>表名</span></div>
                <div class="col"><span>表名</span></div>
                <div class="col"><span>表名</span></div>
                <div class="col"><span>表名</span></div>
                <div class="col"><span>表名</span></div>
                <div class="col"><span>注释</span></div>
            </div>
            <div class="row codeContentMain">
                <ul class="clear_f">
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                    <li class="clear_f tableLi">
                        <div class="col num"><span><Checkbox></Checkbox></span></div>
                        <div class="col tableName"><span>表名</span></div>
                        <div class="col note"><span>注释</span></div>
                    </li>
                </ul>

            </div>
        </div>

        <div class="mainFooter">
            <ButtonGroup>
                <Button type="success" @click="clickPrev">
                    <Icon type="ios-arrow-back"></Icon>
                    上一步
                </Button>
                <Button type="success" @click="clickNext">
                    下一步
                    <Icon type="ios-arrow-forward"></Icon>
                </Button>
            </ButtonGroup>
        </div>


    </div>
</template>

<script>

    import '@/assets/admin/css/adminPage.css';

    export default {
        name: "CreateCode",
        data() {
            return {

                nowNum: 0,

                databaseUrl: "",
                port: 3306,
                user: "",
                password: "",
                database: ""
            }
        },

        methods: {
            /**
             * 点击下一步
             */
            clickNext: function () {
                this.nowNum++;
            },
            clickPrev: function () {
                this.nowNum == 0 ? 0 : this.nowNum--;
            }

        }


    }
</script>

<style scoped lang="stylus">
    .createCode
        height: 100%;
        overflow: auto;

        .codeHeader
            padding 10px 10px 0 10px;

            .inputBox
                margin: 0 10px 10px 0;

        .codeContent
            margin: 0 10px 10px 10px;
            border: 1px solid #eee;

            .col
                float: left

                span
                    font-size: 12px;
                    color: #666;

            .num
                width: 10%;

            .tableName
                width: 40%;

            .note
                width 50%;


            .codeContentHeader
                padding: 10px;
                background: #f3f3f3;


            .codeContentMain

                .tableLi
                    padding: 10px;

                    &:nth-child(2n)
                        background: #f9f9f9;

                    &:hover
                        background: #e8e8e8;

        .mainFooter
            padding: 20px;
            text-align: center;


</style>
