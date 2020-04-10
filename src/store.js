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
            email: 'STORE EMAIL'
        }
    },
    getters: {},
    mutations: {
        loginUser (state,payload) {
            state.user = {...state.user, username: payload.globalusername,
            name: payload.globalname, contact: payload.globalcontact, 
            course: payload.globalcourse, email: payload.globalemail}
        }
    },
    actions: {}
});
