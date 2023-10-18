import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => ({
        isLoading: false,
        isMenuOverlay: false,
        cart: [],
        checkout: []
    }),
    persist: true,
    actions: {}
})