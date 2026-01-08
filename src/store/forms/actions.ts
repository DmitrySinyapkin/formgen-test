import type { FormsActions } from "./types";
import { getForms } from "@/api/mockFormsApi";

export const actions: FormsActions = {
    getForms: async ({ commit }) => {
        const forms = await getForms()
        commit('SET_FORMS', forms)
    }
}
