import type { DataRecord } from "@/types/form";
import type { ActionContext } from "vuex/types/index.js";

export interface DataState {
    data: DataRecord[]
}

export interface DataGetters {
    getDataByFormId: (state: DataState) => (id: number) => DataRecord[]
}

export interface DataMutations {
    'SET_DATA': (state: DataState, payload: DataRecord[]) => void
    'ADD_RECORD': (state: DataState, payload: DataRecord) => void
}

type AugmentedActionContext = {
  commit<K extends keyof DataMutations>(
    key: K,
    payload: Parameters<DataMutations[K]>[1]
  ): ReturnType<DataMutations[K]>
} & Omit<ActionContext<DataState, DataState>, 'commit'>

export interface DataActions {
    getSavedData: ({ commit }: AugmentedActionContext) => void
    addDataRecord: ({ commit }: AugmentedActionContext, record: DataRecord) => void
}
