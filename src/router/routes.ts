import HomePage from "@/pages/HomePage.vue"
import FormPage from "@/pages/FormPage.vue"

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/forms/:formId',
        component: FormPage
    }
]
