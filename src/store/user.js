import { defineStore } from "pinia";

export const storeUser = defineStore("user",{
    state: () => {
        return {
            userId:"",
        }
    },
    actions: {
        setUserId(param){
            this.userId = param;
        }
    },
    getters: {
        getUserId(state){
            return state.userId;
        }
    }
});