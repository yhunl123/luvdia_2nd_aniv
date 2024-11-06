import {createStore} from "vuex";

const store = createStore({
    state: {
        modalTitle: '',
        modalMessage: '',
        modalIsOpen: false,
        isConfirmModal: false,
        mPoint: 0,
        muted: false,
        volume: 0.1,
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
        },
        muted(state) {
            return state.muted;
        },
        volume(state) {
            return state.volume;
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
        },
        setMuted(state, value) {
            state.muted = value;
        },
        setVolume(state, value) {
            state.volume = value;
        }
    }
})

export default store;
