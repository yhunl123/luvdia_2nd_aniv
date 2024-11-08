import {createStore} from "vuex";

const store = createStore({
    state: {
        modalTitle: '',
        modalMessage: '',
        modalIsOpen: false,
        isConfirmModal: false,
        mPoint: 0,
        muted: false,
        modalMuted: false,
        currentPlayTime: 0,
        bgMusicVolume: 0.05,
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
        modalMuted(state) {
            return state.modalMuted;
        },
        currentPlayTime(state) {
            return state.currentPlayTime;
        },
        bgMusicVolume(state) {
            return state.bgMusicVolume;
        },
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
        setModalMuted(state, value) {
            state.modalMuted = value;
        },
        setCurrentPlayTime(state, value) {
            state.currentPlayTime = value;
        },
        setBgMusicVolume(state, value) {
            state.bgMusicVolume = value;
        },
    }
})

export default store;
