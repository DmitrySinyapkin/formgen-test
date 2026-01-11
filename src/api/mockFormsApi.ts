import type { Form, DataRecord } from "@/types/form"
import { SAVED_DATA_LS_KEY } from "@/constants/storage"

export const getForms: () => Promise<Form[]> = () => {
    return new Promise(resolve => resolve([
        {
            id: 1,
            title: 'Form 1',
            fields: {
                title: { label: 'Title', type: 'input', attrs: { placeholder: 'Title' } },
                description: { label: 'Description', type: 'textarea', attrs: { rows: 4, placeholder: 'Description...' } },
                privacy: { label: 'Privacy', type: 'select', options: [{ value: 'public', label: 'Public' }, { value: 'private', label: 'Private' }] },
                subscribe: { label: 'Subscribe', type: 'checkbox' },
            },
            initialValues: {
                title: 'blah',
                description: 'blah-blah',
                privacy: 'public',
                subscribe: true
            }
        },
        {
            id: 2,
            title: 'Form 2 with custom fields (PrimeVue)',
            fields: {
                email: { label: 'Email', type: 'input', attrs: { placeholder: 'Email' } },
                password: { label: 'Password', type: 'input', attrs: { placeholder: 'Password' } },
                remember: { label: 'Remember Me', type: 'checkbox' }
            }
        },
    ]))
}

export const getSavedData: () => Promise<DataRecord[]> = () => {
    return new Promise(resolve => {
        const data = localStorage.getItem(SAVED_DATA_LS_KEY) ? JSON.parse(localStorage.getItem(SAVED_DATA_LS_KEY)) : []
        resolve(data)
    })
}

export const saveData: (data: DataRecord[]) => Promise<string>  = (data) => {
    return new Promise(resolve => {
        localStorage.setItem(SAVED_DATA_LS_KEY, JSON.stringify(data))
        resolve('success')
    })
}
