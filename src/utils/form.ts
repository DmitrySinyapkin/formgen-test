import type { Form, FormFields } from "@/types/form"

const getEmptyValues = (fields: FormFields) => 
    Object.fromEntries(Object.entries(fields).map(([name, field]) => field.type === 'checkbox' ? [name, false] : [name, '']))

export const getInitialValues = (form: Form) => 
    form.initialValues || getEmptyValues(form.fields)
