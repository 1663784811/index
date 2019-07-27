<template>
    <div class="adminWindon">
        <!--============    头部     ============-->
        <div class="adminTop clear_f">
            <AdminHeaderLeft></AdminHeaderLeft>
            <AdminHeaderRight></AdminHeaderRight>
        </div>
        <!--============   内容     ============-->
        <div class="adminConter" :class="{ admionLeftMin: isTreeMinIcon}">
            <!--===   左则树  ===-->
            <div class="adminConterLeft scroll">
                <div class="adminLeftBtn"
                     @click="isTreeMinIcon=!isTreeMinIcon"
                >
                    <Icon type="ios-menu-outline"/>
                </div>
                <AdminLeftTree></AdminLeftTree>
            </div>
            <!--== 主要内容 ==-->
            <div class="adminConterRight">
                <Tabs v-if="tabDate.length>0"
                      :value="tabTabsValue">
                    <TabPane
                            v-for="tabObj in tabDate"
                            :label="tabObj.name"
                            :icon="tabObj.iconType"
                    >
                        <iframe :src="tabObj.url" frameborder="0" class="tabIframe"></iframe>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import AdminHeaderLeft from './components/AdminHeaderLeft';
    import AdminHeaderRight from './components/AdminHeaderRight';
    import AdminLeftTree from './components/AdminLeftTree';
    import {mapGetters} from 'vuex'

    export default {
        name: "Admin",
        components: {
            AdminHeaderLeft,
            AdminHeaderRight,
            AdminLeftTree

        },
        data() {
            return {
                //=====  是否使用树小图标、
                isTreeMinIcon: false
            }
        },
        computed: {
            ...mapGetters('admin', {
                tabDate: 'tabDate',
                tabTabsValue: 'tabIndex'
            })
        },
        methods: {}
    }
</script>

<style lang="stylus">
    @import "./admin.styl"
</style>
