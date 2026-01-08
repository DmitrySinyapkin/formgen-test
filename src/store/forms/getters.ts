import type { FormsGetters, FormsState } from "./types"
import type { GetterTree } from "vuex/types/index.js"

export const getters: GetterTree<FormsState, FormsState> & FormsGetters = {
    getFormById: (state: FormsState) => (id: number) => 
        state.forms.find(form => form.id === id) || null
}
