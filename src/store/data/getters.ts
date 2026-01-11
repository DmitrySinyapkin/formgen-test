import type { GetterTree } from "vuex/types/index.js"
import type { DataGetters, DataState } from "./types"

export const getters: GetterTree<DataState, DataState> & DataGetters = {
    getDataByFormId: (state: DataState) => (id: number) =>
        state.data.filter(record => record.formId === id)
}
