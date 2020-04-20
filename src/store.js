import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            username: 'STORE USERNAME',
            name: '',
            contact: 'STORE NO',
            course: 'STORE COURSE',
            email: 'STORE EMAIL',
            module1: 'MODULE1',
            module2: 'MODULE2',
            module3: 'MODULE3',
            module4: 'MODULE4',
            module5: 'MODULE5'
        }
    },
    getters: {},
    mutations: {
        loginUser (state,payload) {
            state.user = {...state.user, username: payload.globalusername,
            name: payload.globalname, contact: payload.globalcontact, 
            course: payload.globalcourse, email: payload.globalemail, 
            module1: payload.globalmodule1, module2: payload.globalmodule2, 
            module3: payload.globalmodule3, module4: payload.globalmodule4,
            module5: payload.globalmodule5}
        }
    },
    actions: {}
});
