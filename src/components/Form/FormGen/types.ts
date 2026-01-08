import type { FormFields } from "@/types/form"

export interface Props {
    fields: FormFields
}

export interface Emits {
    (e: 'submit'): void
    (e: 'cancel'): void
}
