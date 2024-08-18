import {createStore} from "vuex";

const store = createStore({
    state: {
        modalTitle: '',
        modalMessage: '',
        modalIsOpen: false,
        isConfirmModal: false,
        mPoint: 0,
    },
    getters: {
        modalTitle(state) {
            return state.modalTitle;
        },
        modalMessage(state) {
            return state.modalMessage;
        },
        modalIsOpen(state) {
            return state.modalIsOpen;
        },
        isConfirmModal(state) {
            return state.isConfirmModal;
        },
        mPoint(state) {
            return state.mPoint;
        }
    },
    mutations: {
        setModalTitle(state, value) {
            state.modalTitle = value;
        },
        setModalMessage(state, value) {
            state.modalMessage = value;
        },
        setModalIsOpen(state, value) {
            state.modalIsOpen = value;
        },
        setIsConfirmModal(state, value) {
            state.isConfirmModal = value;
        },
        setMPoint(state, value) {
            state.mPoint = value;
        }
    }
})

export default store;
