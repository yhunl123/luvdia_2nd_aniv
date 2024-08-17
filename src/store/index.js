import {createStore} from "vuex";

const store = createStore({
    state: {
        isHeader: 'Y',
        isFooter: 'Y',
    },
    getters: {
        isHeader(state) {
            return state.isHeader;
        },
        isFooter(state) {
            return state.isFooter;
        }
    },
    mutations: {
        setIsHeader(state, value) {
            state.isHeader = value;
        },
        setIsFooter(state, value) {
            state.isFooter = value;
        }
    }
})

export default store;
