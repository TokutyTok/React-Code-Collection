import { redirect } from 'react-router-dom'

export const action = async ({ request }) => {
    console.log(request)
    const formData = await request.formData()
    const obj = Object.fromEntries(formData)
    const id = formData.get('id')
    return redirect(`/users/${id}`)
}
