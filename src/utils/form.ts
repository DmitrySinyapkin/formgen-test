import type { Form, FormFields } from "@/types/form"

export const getInitialValues = (form: Form) => 
    Object.fromEntries(Object.entries(form.fields).map(([name, field]) => form.initialValues?.[name]
        ? [name, form.initialValues[name]] 
        : field.type === 'checkbox'
        ? [name, false] 
        : [name, '']
    ))
