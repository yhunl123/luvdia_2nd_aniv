import {item_r, item_sr, item_ssr} from '@/object/gachaItem'
import store from "@/store";
import {router} from "@/router";

const draw = (num) => {
    let rate;
    let result = []

    for(let i= 0; i < num; i++) {
         rate = Math.floor((Math.random() * 100)+1)

        let item = {
            grade: '',
            id: '',
        }

        if (rate > 0 && rate < 81) {
            item.grade = 'R'
        } else if (rate >= 81 && rate < 98) {
            item.grade = 'SR'
        } else  {
            item.grade = 'SSR'
        }

        if (item.grade == 'R') {
            item.id = Math.floor((Math.random() * item_r.length) + 1)
        } else if (item.grade == 'SR') {
            item.id = Math.floor((Math.random() * item_sr.length) + 1)
        } else {
            item.id = Math.floor((Math.random() * item_ssr.length) + 1)
        }

        result.push(item)
    }

    return result
}

const checkNewItem = (item) => {
    let myItems = JSON.parse(localStorage.getItem('myItem'))

    if (myItems == null) {
        item.isNew = true;
    } else {
        if(myItems.findIndex((myItem) => myItem.id === item.id && myItem.grade === item.grade) === -1) {
            item.isNew = true;
        } else {
            item.isNew = false;
        }

    }
    return item;
}

const unlockItem = (item) => {
    let myItems = JSON.parse(localStorage.getItem('myItem'))

    if (myItems == null) {
        myItems = []
    }

    if(myItems.findIndex((myItem) => myItem.id === item.id && myItem.grade === item.grade) === -1) {
        myItems.push(item)
    }

    localStorage.setItem('myItem', JSON.stringify(myItems));
}

const openModal = (title, message) => {
    store.commit('setModalTitle', title)
    store.commit('setModalMessage', message)
    store.commit('setModalIsOpen', true)
}

export default {
    draw,
    checkNewItem,
    unlockItem,
    openModal
}