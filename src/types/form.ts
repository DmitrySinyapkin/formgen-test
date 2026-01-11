export type FieldType = 'input' | 'select' | 'checkbox' | 'textarea'

export interface SelectOption {
    label: string
    value: string
}

export interface Field {
    type: FieldType 
    label: string
    attrs?: Record<string, any>
    options?: SelectOption[]
}

export interface FormFields {
    [key: string]: Field
}


export interface FormData {
    [key: string]: string | boolean
}

export interface Form {
    id: number
    title: string
    fields: FormFields
    initialValues?: FormData
}

export interface DataRecord {
    id: number
    data: FormData
}
