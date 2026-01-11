import HomePage from "@/pages/HomePage.vue"
import FormPage from "@/pages/FormPage.vue"
import CustomFormPage from "@/pages/CustomFormPage.vue"
import TablePage from "@/pages/TablePage.vue"

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/forms/:formId',
        component: FormPage
    },
    {
        path: '/custom-forms/:formId',
        component: CustomFormPage
    },
    {
        path: '/data/:formId',
        component: TablePage
    },
]
