import type { Form } from "@/types/form"

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
        }
    ]))
}
