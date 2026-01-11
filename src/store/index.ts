import { createStore } from "vuex";
import forms from "./forms";
import data from "./data";

export default createStore({
    modules: {
        forms,
        data
    }
})
