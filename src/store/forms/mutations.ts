import type { FormsMutations } from "./types";

export const mutations: FormsMutations = {
    'SET_FORMS': (state, paload) => {
        state.forms = paload
    }
}
