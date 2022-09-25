import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    actions: {
        // fill the store with data from database asynchronously
        async fill() {
            let r = await import('@/team.json');
            
            // option 1: using $patch method
            // let data = r.default;

            // this.$patch({
            //     name: data.name,
            //     spots: data.spots,
            //     members: data.members
            // });

            // option 2: mutating the $state (https://pinia.vuejs.org/core-concepts/state.html#replacing-the-state)
            this.$state = r.default;
        },

        // increase team spots
        grow(spots) {
            this.spots = spots;
        }
    },

    getters: {
        spotsRemaining() {
            return this.spots - this.members.length;
        }
    }
});