import type { Form } from "@/types/form";
import type { ActionContext } from "vuex/types/index.js";

export interface FormsState {
    forms: Form[]
}

export interface FormsGetters {
    getFormById: (state: FormsState) => (id: number) => Form | null
}

export interface FormsMutations {
    'SET_FORMS': (state: FormsState, payload: Form[]) => void
}

type AugmentedActionContext = {
  commit<K extends keyof FormsMutations>(
    key: K,
    payload: Parameters<FormsMutations[K]>[1]
  ): ReturnType<FormsMutations[K]>
} & Omit<ActionContext<FormsState, FormsState>, 'commit'>

export interface FormsActions {
    getForms: ({ commit }: AugmentedActionContext) => void
}
