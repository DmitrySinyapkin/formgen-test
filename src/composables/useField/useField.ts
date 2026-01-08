import type { FieldType } from "@/types/form";
import InputComponent from "@/components/UI/TextComponents/InputComponent.vue";
import TextareaComponent from "@/components/UI/TextComponents/TextareaComponent.vue";
import SelectComponent from "@/components/UI/SelectComponent/SelectComponent.vue";
import CheckboxComponent from "@/components/UI/CheckboxComponent/CheckboxComponent.vue";
import { computed } from "vue";

export function useField(type: FieldType) {
    const component = computed(() => {
        switch (type) {
            case 'input':
                return InputComponent
            case 'textarea':
                return TextareaComponent
            case 'checkbox':
                return CheckboxComponent
            case 'select':
                return SelectComponent
            default:
                return InputComponent
        }
    })

    return {
        component
    }
}
