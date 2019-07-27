import {CLONEOBJ} from "@/assets/common/js/global";

const state = {
    tabDate: [
        {
            tid: "adminIndexStart",
            name: "后台首页",
            "url": "/admin/index",
            iconType: "ios-menu-outline"
        }
    ],    // 页面签数据
    tabIndex: 0
};

const getters = {
    tabDate: (state) => {
        return state.tabDate;
    },
    tabIndex: (state) => {
        return state.tabIndex;
    }
};

const actions = {
    changeTabDate: function (context, obj) {
        context.commit('commitDate', obj);
    }
};

const mutations = {
    commitDate: function (state, obj) {
        let tabDate = state.tabDate;
        let ishave = false;
        for (let i = 0; i < tabDate.length; i++) {
            if (obj.tid === tabDate[i].tid) {
                ishave = true;
                let o = CLONEOBJ(obj);
                if (/\?/.test(o.url)) {
                    o.url = o.url + "&t=" + new Date().getTime();
                } else {
                    o.url = o.url + "?t=" + new Date().getTime();
                }
                state.tabDate[i] = o;
                state.tabIndex = i;
            }
        }
        if (!ishave) {
            state.tabDate.push(CLONEOBJ(obj));
            state.tabIndex = state.tabDate.length - 1;
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
