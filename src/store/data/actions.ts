import type { DataActions } from "./types";
import { getSavedData, saveData } from "@/api/mockFormsApi";

export const actions: DataActions = {
    getSavedData: async ({ commit }) => {
        const data = await getSavedData()
        commit('SET_DATA', data)
    },
    addDataRecord: async ({ commit, state }, record) => {
        commit('ADD_RECORD', record)
        const status = await saveData(state.data)
        return status
    }
}
