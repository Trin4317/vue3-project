import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {
    // similar to data
    state() {
        return {
            count: 0
        };
    },

    // similar to methods
    actions: {
        increment() {
            if (this.count < 10) {
                this.count++;
            }
        }
    },

    // similar to computed
    getters: {
        remaining() {
            return 10 - this.count;
        }
    }
});