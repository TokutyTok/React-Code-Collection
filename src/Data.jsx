export const usersData = async (request) => {
    console.log(request)
    return await { users }
}

export const userData = async (request) => {
    console.log(request)
    let user = users.filter((value) => {
        return value.id === Number(request.params.id)
    })
    return await { user }
}

const users = [
    {
        id: 1,
        name: 'tok',
    },
    {
        id: 2,
        name: 'tak',
    },
]
