import type { DataMutations } from "./types";

export const mutations: DataMutations = {
    'SET_DATA': (state, paload) => {
        state.data = paload
    },
    'ADD_RECORD': (state, payload) => {
        state.data.push(payload)
    }
}
